//remove the minimum 
function removeSmallest(numbers) {
  let dullArray = numbers.slice(0)
  let minVal = numbers.indexOf(Math.min(...numbers))
  dullArray.splice(minVal, 1)
  return dullArray
}