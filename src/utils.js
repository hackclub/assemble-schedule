export const toSpecialTime = (hhmmap) => {
  // Needs to be in "9:15 am" format
  let hours = parseInt(hhmmap.split(':')[0])
  const minutes = parseInt(hhmmap.split(':')[1].split(' ')[0])
  const apm = hhmmap.split(' ')[1]
  if (apm == 'pm' && hours != 12) {
    hours += 12
  }

  let result = 0
  result += (hours * 60)
  result += minutes

  result -= 9 * 60 // cal starts at 9 am
  result = result / 30 // each "tick" in the calendar is 30 minutes
  console.log(result)

  return result
}