//your order, please
function order(words){
  // ...
  let array = words.split(' ')
  let result = []
  array.forEach(word =>{
    let item = word.split('')
    let number = item.find(element=>parseInt(element))
    result.push([word,parseInt(number)]) 
  })
   result.sort((a,b)=>a[1]-b[1])
          .map(x=> x.splice(1,1))
  
  return result.join(' ')
}