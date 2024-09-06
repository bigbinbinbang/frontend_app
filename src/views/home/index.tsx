import React from 'react'
import Layouts from '@/components/Layout'
import { Col, Row } from 'antd'

import NavBar from '@/components/NavBar'
import style from './style.module.scss'
import LineChart from '@/components/common/LineChart'
import CardBoard from '@/components/common/CardBoard'
import Department from '@/components/Tables/Department'
import BidType from '@/components/Tables/BidType'
import Customer from '@/components/Tables/Customer'
import Laws from '@/components/Tables/Laws'
import Manager from '@/components/Tables/Manager'
import Procurement from '@/components/Tables/Procurement'
import Region from '@/components/Tables/Region'
const Home: React.FC = () => {
  return (
    <Layouts>
      <Row gutter={24} className={style.row}>
        <Col span={12}>
          <NavBar />
          <LineChart chartId="chart1" />
        </Col>
        <Col span={12}>
          <NavBar />
          <LineChart chartId="chart2" />
        </Col>
      </Row>
      <Row gutter={24} className={style.row}>
        <Col span={12}>
          <NavBar />
          <LineChart chartId="chart3" />
        </Col>
        <Col span={12}>
          <NavBar />
          <LineChart chartId="chart4" />
        </Col>
      </Row>
      <Row className={style.row}>
        <Col span={24}>
          <NavBar />
          <Department></Department>
        </Col>
      </Row>
      <Row gutter={24} className={style.row}>
        <Col span={12}>
          <NavBar />
          <BidType />
        </Col>
        <Col span={12}>
          <NavBar />
          <Customer />
        </Col>
      </Row>
      <Row gutter={24} className={style.row}>
        <Col span={12}>
          <NavBar />
          <Laws />
        </Col>
        <Col span={12}>
          <NavBar />
          <Manager />
        </Col>
      </Row>
      <Row gutter={24} className={style.row}>
        <Col span={12}>
          <NavBar />
          <Procurement />
        </Col>
        <Col span={12}>
          <NavBar />
          <Region />
        </Col>
      </Row>
      <Row justify="center" gutter={24} className={style.row}>
        <Col span={6}>
          <CardBoard></CardBoard>
        </Col>
        <Col span={6}>
          <CardBoard></CardBoard>
        </Col>
        <Col span={6}>
          <CardBoard></CardBoard>
        </Col>
        <Col span={6}>
          <CardBoard></CardBoard>
        </Col>
        <Col span={6}>
          <CardBoard></CardBoard>
        </Col>
        <Col span={6}>
          <CardBoard></CardBoard>
        </Col>
      </Row>
    </Layouts>
  )
}

export default Home
