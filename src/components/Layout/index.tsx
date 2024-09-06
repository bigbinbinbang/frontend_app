import { Layout } from 'antd'
import React from 'react'
import Head from './Header'
import style from './style.module.scss'
const { Header, Content } = Layout

const Layouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Layout className={style.layout}>
        <Header className={style.header}>
          <Head></Head>
        </Header>
        <Content className={style.content}>{children}</Content>
      </Layout>
    </>
  )
}
export default Layouts
