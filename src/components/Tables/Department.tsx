import { Table } from 'antd'
const { Column } = Table
interface Columns {
  rank: number
  projectManagerCount: number
  customCount: number
  customCountYOY: string
  projectApprovalCount: number
  sectionApprovalCount: number
  sectionApprovalCountYOY: string
  sectionOpenCount: number
  perPackageCount: number
  receivable: number
  receipts: number
  receiptsYOY: string
  perReceipts: number
  bidWinningAmount: number
  packageReceipts: number
  bidWinningAmountYOY: string
  perBidWinningAmount: number
  packageBidWinningAmount: number
  [props: string]: any
}
const data: Columns[] = []
const Department: React.FC = () => {
  return (
    <>
      <Table dataSource={data} pagination={false} rowKey="rank">
        <Column
          title="排名"
          dataIndex="rank"
          width={65}
          className="border"
          render={(rank: number) => (
            <>
              <p className="linear-1">{rank}</p>
            </>
          )}
        />
        <Column
          title="部门"
          dataIndex="departmentName"
          width={90}
          render={(departmentName) => (
            <>
              <p className="linear-2">{departmentName}</p>
            </>
          )}
        />
        <Column
          title="项目经理数"
          dataIndex="projectManagerCount"
          width={80}
          render={(projectManagerCount) => (
            <>
              <p className="linear-3">{projectManagerCount}</p>
            </>
          )}
        />
        <Column
          title="客户数"
          dataIndex="customCount"
          width={80}
          render={(customCount) => (
            <>
              <p className="linear-4">{customCount}</p>
            </>
          )}
        />
        <Column
          title="同比%"
          dataIndex="customCountYOY"
          width={80}
          render={(customCountYOY) => (
            <>
              <p className="linear-5">{customCountYOY}</p>
            </>
          )}
        />
        <Column title="立项项目数" dataIndex="projectApprovalCount" className="color_1 border" />
        <Column title="立项包数" dataIndex="sectionApprovalCount" className="color_1" />
        <Column title="同比%" dataIndex="sectionApprovalCountYOY" className="color_1" width={80} />
        <Column title="当月开标包数" dataIndex="sectionOpenCount" className="color_1" />
        <Column title="人均包数" dataIndex="perPackageCount" className="color_1" />
        <Column title="应收收入(万元)" dataIndex="receivable" className="color_2 border" />
        <Column title="实收收入(万元)" dataIndex="receipts" className="color_2" />
        <Column title="同比%" dataIndex="receiptsYOY" className="color_2" width={80} />
        <Column title="人均实收收入(万元)" dataIndex="perReceipts" className="color_2" />
        <Column title="单包实收收入(万元)" dataIndex="packageReceipts" className="color_2" />
        <Column title="中标金额(万元)" dataIndex="bidWinningAmount" className="color_3 border" />
        <Column title="同比%" dataIndex="bidWinningAmountYOY" className="color_3" width={80} />
        <Column title="人均中标金额(万元)" dataIndex="perBidWinningAmount" className="color_3" />
        <Column title="单包中标金额(万元)" dataIndex="packageBidWinningAmount" className="color_3 borderR" />
      </Table>
    </>
  )
}
export default Department
