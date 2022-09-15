//array element parity
function solve(arr){
   let integer = []
   for(let i = 0; i < arr.length; i++){
     if(!arr.includes(-1 * arr[i])){
       integer.push(arr[i])
     }
   }
  return integer[0]
};