//summing a number's digits
function sumDigits(number) {
  number = Math.abs(number)
  let digits = String(number).split('')
  return digits.reduce((a,b) => Number(a) + Number(b), 0)
}
