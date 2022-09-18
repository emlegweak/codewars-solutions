//find all occurrences of an element in an array

const findAll = (array, n) => {
 let indexes = []
 for(let i = 0; i < array.length; i++){
   if(array[i] === n){
     indexes.push(i)
   }
 }
  return indexes
}