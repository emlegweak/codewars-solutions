//Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark
function remove (string) {
return string.split(' ').filter(x => x.split('!').length !== 2).join(' ')
}