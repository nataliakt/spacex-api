const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export function datetimeToDate(datetime: string): string {
  const date = new Date(datetime);
  return `${date.getDay()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

export function datetimeToHour(datetime: string): string {
  const date = new Date(datetime);
  return `${date.getHours()}:${date.getMinutes()}`;
}