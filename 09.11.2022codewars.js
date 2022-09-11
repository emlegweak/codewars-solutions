//Minimize Sum Of Array (Array Series #1)

function minSum(arr) {
  let sortedArray = arr.sort((a,b)=> a-b)
  let sum =0 
  for(let i = 0; i < arr.length/2; i++){
    sum += sortedArray[i] * sortedArray[sortedArray.length - 1 - i]
  }
  return sum
}