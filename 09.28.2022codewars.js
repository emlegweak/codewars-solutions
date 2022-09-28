//odd or even?
function oddOrEven(array) {
  if(array === []) return 'even'
   let sum = array.reduce((a,b) => a+b, 0)
   return sum % 2 === 0 ? "even" : "odd"
}