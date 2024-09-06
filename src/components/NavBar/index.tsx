import React, { useState } from 'react'
import { Col, Row, Select, Button } from 'antd'
import style from './style.module.scss'

const NavBar: React.FC = () => {
  const [deptLists] = useState([
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Yiminghe', label: 'yiminghe' },
    { value: 'disabled', label: 'Disabled' }
  ])
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  return (
    <>
      <Row gutter={24}>
        <Col span={5}>
          <div className={style.common_title}>开标包数</div>
        </Col>
        <Col span={19} className={style.bth_group}>
          <Select
            defaultValue="lucy"
            onChange={handleChange}
            options={deptLists}
            getPopupContainer={(triggerNode) => triggerNode.parentElement}
          />
          <Button ghost>导出数据</Button>
          <Button ghost>显示更多</Button>
        </Col>
      </Row>
    </>
  )
}
export default NavBar
