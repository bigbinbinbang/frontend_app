export const getCurrentDate = (): string => {
  const today = new Date()
  let date = ''
  date += today.getFullYear() // 获取当前年份
  date += '-' // 添加分隔符
  date += ('0' + (today.getMonth() + 1)).slice(-2) // 获取当前月份，并且保证两位数字
  date += '-' // 添加分隔符
  date += ('0' + today.getDate()).slice(-2) // 获取当前日期，并且保证两位数字
  return date // 返回格式化后的日期字符串
}
