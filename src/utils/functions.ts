export function getDateString(dateStr: string) {
  const date = new Date(dateStr)
  const months = [
    'ม.ค.',
    'ก.พ.',
    'มี.ค.',
    'เม.ษ.',
    'พ.ค.',
    'มิ.ย.',
    'ก.ค.',
    'ส.ค.',
    'ก.ย.',
    'ต.ค.',
    'พ.ย.',
    'ธ.ค.',
  ]
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear() +
    543}`
}
