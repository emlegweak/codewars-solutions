//shortest word
function findShort(s) {
    //split string into array of words separated by space
    let words = s.split(' ')
    //shortest word at index 0
    let shortestWord = words[0]
    //loop through array of words
    for (let i = 0; i < words.length; i++) {
        //check word length - if current word is less than the shortest word while looping through the array, return shortest word
        if (words[i].length < shortestWord.length) {
            shortestWord = words[i]
        }
    }
    //they want the length of the word tho
    return shortestWord.length
}

//profit