import * as echarts from 'echarts/core'
// 按需引入图表类型
import { LineChart } from 'echarts/charts'
// 按需引入标题，提示框组件
import { TitleComponent, TooltipComponent, LegendComponent, GridComponent } from 'echarts/components'
// 引入 Canvas 渲染器
import { CanvasRenderer } from 'echarts/renderers'
import debounce from 'lodash/debounce'
import { useEffect } from 'react'
// 注册必须的组件
echarts.use([LineChart, TitleComponent, TooltipComponent, LegendComponent, GridComponent, CanvasRenderer])
interface ChartInfo {
  chartId: string
  chartData?: []
}
// 折线图基本配置
const basicOption = {
  legend: {
    data: ['2022年', '2023年', '2024年'],
    right: '5%',
    textStyle: {
      color: '#fff'
    }
  },
  grid: {
    left: '2%',
    right: '3%',
    bottom: '3%',
    containLabel: true
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    type: 'category',
    boundaryGap: false,
    axisLabel: {
      color: 'rgb(126, 136, 144)'
    },
    axisLine: {
      lineStyle: {
        type: 'dashed',
        color: 'rgba(126, 136, 144, 0.4)'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        color: 'rgba(126, 136, 144, 0.4)'
      }
    }
  },
  yAxis: {
    axisLabel: {
      color: 'rgb(126, 136, 144)'
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        color: 'rgba(126, 136, 144, 0.4)'
      }
    }
  },
  series: [
    {
      data: [4, 20, 1, 2, 21, 105, 28, 2, 0, 0, 0, 0],
      name: '2024年',
      smooth: true,
      type: 'line'
    }
  ]
}
const initEchart = (dom) => {
  echarts.dispose(dom)
  let chartInstance = echarts.init(dom)
  chartInstance.setOption(basicOption)
}
const LineCharts = ({ chartId }: ChartInfo) => {
  useEffect(() => {
    const dom = document.getElementById(chartId)
    initEchart(dom)
    window.addEventListener(
      'resize',
      debounce(function () {
        initEchart(dom)
      }, 600)
    )
  })
  return (
    <>
      <div id={chartId} style={{ width: '100%', height: '300px' }} />
    </>
  )
}
export default LineCharts
