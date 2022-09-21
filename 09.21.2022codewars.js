//what dominates your array?


function dominator(arr) {
   const indexes = [];

  for (let x = 0; x < arr.length; x++) {
    indexes[arr[x]] = indexes[arr[x]] ? indexes[arr[x]] + 1: 1;
    if (indexes[arr[x]] > arr.length / 2){
      return arr[x];
      }
  }

  return -1;
}