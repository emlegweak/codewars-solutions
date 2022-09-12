//Sum of Array Singles

function repeats(arr){
  return arr.filter(element => arr.indexOf(element) === arr.lastIndexOf(element)).reduce((a,b)=> a+b)
};