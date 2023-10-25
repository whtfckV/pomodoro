export function timeConvert(minutes: number) {
  let hoursString = 'час'
  const hours = minutes / 60
  const rhours = Math.floor(hours)
  minutes = (hours - rhours) * 60
  const rminutes = Math.round(minutes)

  if (rhours > 1) {
    hoursString = 'часа'
  }

  if (rhours > 4) {
    hoursString = 'часов'
  }

  return `${rhours ? `${rhours} ${hoursString}` : ''} ${rminutes} мин`
}
