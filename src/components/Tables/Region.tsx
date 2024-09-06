import { Table } from 'antd'
const { Column } = Table
interface Columns {
  rank: number
  areaName: string
  customCount: number
  sectionApprovalCount: number
  receipts: number
  bidWinningAmount: number
  [props: string]: any
}
const data: Columns[] = []
const Region: React.FC = () => {
  return (
    <>
      <Table dataSource={data} pagination={false} rowKey="rank">
        <Column title="排名" dataIndex="rank" className="border" />
        <Column title="行政区域" dataIndex="areaName" />
        <Column title="客户数" dataIndex="customCount" />
        <Column title="立项包数" dataIndex="sectionApprovalCount" />
        <Column title="实收收入(万元)" dataIndex="receipts" />
        <Column title="中标金额(万元)" dataIndex="bidWinningAmount" />
      </Table>
    </>
  )
}
export default Region
