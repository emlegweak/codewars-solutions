//find the capitals
var capitals = function (word) {
	// Write your code here
  let capLetters = []
  for(let i = 0; i < word.length; i++){
    if(word[i].toUpperCase() == word[i]){
      capLetters.push(i)
    }
  }
  return capLetters
};