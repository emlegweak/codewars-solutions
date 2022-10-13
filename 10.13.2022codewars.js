//ones and zeros

//given an array of ones and zeroes, convert the equivalent binary value to an integer
//ex. [0,0,0,1] is treated as 0001 which is the binary representation of 1

//join numbers in array to convert to string
//use parseint method to return 2 digit value

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2)
};