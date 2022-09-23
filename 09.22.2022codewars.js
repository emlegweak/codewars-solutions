//currying functions: multiply all elements in an array

/* left blank for unlimited creativity :) */
function multiplyAll(array){
  return function(integer){
    return array.map((element)=> element * integer) 
  } 
}