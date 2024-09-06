import { Table } from 'antd'
const { Column } = Table
interface Columns {
  rank: number
  purchasingMethodName: string
  sectionApprovalCount: number
  receipts: number
  bidWinningAmount: number
  [props: string]: any
}
const data: Columns[] = []
const Procurement: React.FC = () => {
  return (
    <>
      <Table dataSource={data} pagination={false} rowKey="rank">
        <Column title="排名" dataIndex="rank" />
        <Column title="招标采购方式" dataIndex="purchasingMethodName" />
        <Column title="立项包数" dataIndex="sectionApprovalCount" />
        <Column title="实收收入(万元)" dataIndex="receipts" />
        <Column title="中标金额(万元)" dataIndex="bidWinningAmount" />
      </Table>
    </>
  )
}
export default Procurement
