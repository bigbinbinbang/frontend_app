import style from './style.module.scss'
import logo from '@/assets/img/logo.png'
import { DatePicker } from 'antd'
import dayjs from 'dayjs'
import { getCurrentDate } from '@/utils'
export default function Head() {
  const handleChange = (date, dateString) => {
    console.log(date, dateString)
  }
  return (
    <>
      <img className={style.logo} src={logo} alt="中钢招标" />
      <DatePicker
        onChange={handleChange}
        className={style.data_pick}
        variant="borderless"
        size="large"
        inputReadOnly
        defaultValue={dayjs(getCurrentDate(), 'YYYY/MM/DD')}
        style={{ 'fontSize': '20px' }}
      />
    </>
  )
}
