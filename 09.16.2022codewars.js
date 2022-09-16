//smallest value of an array
function min(arr, toReturn) {
  // TODO
  if(toReturn === 'value'){
    return Math.min(...arr)
  }else if(toReturn === 'index'){
    return arr.indexOf(Math.min(...arr))
  }
}