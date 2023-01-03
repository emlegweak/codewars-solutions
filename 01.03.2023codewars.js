//esreveR
reverse = function(array) {
  let reversedArray = []
  for(let i= 0; i< array.length; i++){
    reversedArray[i] = array[array.length - i - 1]
  }
  return reversedArray
}