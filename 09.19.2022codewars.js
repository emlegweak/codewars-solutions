//merge two arrays
function mergeArrays(a, b) {
 const combinedLength = Math.max(a.length, b.length)
 let combinedArray = []
 for(let i = 0; i < combinedLength; i++){
   combinedArray.push(a[i])
   combinedArray.push(b[i])
 }
  return combinedArray.filter(element => element !== undefined)
}