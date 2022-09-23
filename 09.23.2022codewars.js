//duplicate encoder
function duplicateEncode(word){
  return word.toLowerCase().split('').reduce((acc,c,i,arr) =>{
    let parens = arr.filter(letter => letter === c).length < 2 ? '(' : ')'
    return acc + parens
  }, '')
}
