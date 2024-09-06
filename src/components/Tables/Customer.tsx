import { Table } from 'antd'
const { Column } = Table
interface Columns {
  rank: number
  customName: string
  departmentName: string
  receipts: number
  receiptsYOY: string
  sectionApprovalCount: number
  packageReceipts: number
  bidWinningAmount: number
  packageBidWinningAmount: number
  [props: string]: any
}
const data: Columns[] = []
const Customer: React.FC = () => {
  return (
    <>
      <Table dataSource={data} pagination={false} rowKey="rank">
        <Column
          title="排名"
          dataIndex="rank"
          className="border"
          render={(rank: number) => (
            <>
              <p className="linear-1">{rank}</p>
            </>
          )}
        />
        <Column
          title="客户名称"
          dataIndex="customName"
          render={(customName) => (
            <>
              <p className="linear-2">{customName}</p>
            </>
          )}
        />
        <Column
          title="所属部门"
          dataIndex="departmentName"
          render={(departmentName) => (
            <>
              <p className="linear-3">{departmentName}</p>
            </>
          )}
        />
        <Column
          title="实收收入"
          dataIndex="receipts"
          render={(receipts) => (
            <>
              <p className="linear-4">{receipts}</p>
            </>
          )}
        />
        <Column
          title="同比%"
          dataIndex="receiptsYOY"
          render={(receiptsYOY) => (
            <>
              <p className="linear-5">{receiptsYOY}</p>
            </>
          )}
        />
        <Column title="立项包数" dataIndex="sectionApprovalCount" />
        <Column title="中标金额(万元)" dataIndex="bidWinningAmount" />
        <Column title="单包实收收入(万元)" dataIndex="packageReceipts" />
      </Table>
    </>
  )
}
export default Customer
