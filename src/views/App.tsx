import React from 'react'
import '@/assets/css/base.scss'
import router from '@/router/index'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import 'dayjs/locale/zh-cn'

import 'moment/locale/zh-cn';
import { RouterProvider } from 'react-router-dom'

const App = () => (
  <ConfigProvider locale={zhCN}>
    <RouterProvider router={router} />
  </ConfigProvider>
)

export default App
