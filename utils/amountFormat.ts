/* eslint-disable @typescript-eslint/no-unsafe-call */
function AmountFormat(amount) {
  const amountString = amount?.toString().split('')
  let result = ''
  let count = 0
  for (let i = amountString?.length - 1; i >= 0; i -= 1) {
    if (count === 3) {
      result += ','
      count = 0
    }
    result += amountString[i]
    count += 1
  }
  return result.split('').reverse().join('')
}

export { AmountFormat }
