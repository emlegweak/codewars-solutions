//absent vowel
function absentVowel(x) {
    let vowels = 'aeiou'
    for (let i in vowels) {
        if (x.indexOf(vowels[i]) === -1) {
            return Number(i)
        }
    }
}