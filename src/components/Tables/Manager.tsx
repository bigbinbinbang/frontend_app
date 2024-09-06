import { Table } from 'antd'
const { Column } = Table
interface Columns {
  rank: number
  managerName: string
  departmentName: string
  sectionApprovalCount: number
  customCount: number
  receipts: number
  bidWinningAmount: number
  sectionOpenCount: number
  [props: string]: any
}
const data: Columns[] = []
const Manager: React.FC = () => {
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
          title="项目经理"
          dataIndex="managerName"
          render={(managerName) => (
            <>
              <p className="linear-2">{managerName}</p>
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
          title="立项包数"
          dataIndex="sectionApprovalCount"
          render={(sectionApprovalCount) => (
            <>
              <p className="linear-4">{sectionApprovalCount}</p>
            </>
          )}
        />
        <Column
          title="客户数"
          dataIndex="customCount"
          render={(customCount) => (
            <>
              <p className="linear-5">{customCount}</p>
            </>
          )}
        />
        <Column title="实收收入(万元)" dataIndex="receipts" />
        <Column title="中标金额(万元)" dataIndex="bidWinningAmount" />
        <Column title="本月已开标包数" dataIndex="sectionOpenCount" />
      </Table>
    </>
  )
}
export default Manager
