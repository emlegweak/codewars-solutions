//list to array
function listToArray(list) {
  let array = []
  for(let i = list; i; i = i.next){
    array.push(i.value)
  }
  return array
}