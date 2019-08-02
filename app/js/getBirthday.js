// 1997/8/5
export function compute () {
  let date = new Date()
  let y = date.getFullYear()
  let m = date.getMonth()
  let d = date.getDate()
  if (m + 1 === 8 && d === 5) {
    return y - 1997
  }
  return false
}
