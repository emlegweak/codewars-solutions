//the vowel code
const vowels=['a','e','i','o','u']
const nums = ['1','2','3','4','5']

function encode(string) {
   return [...string].map(x => vowels.includes(x) ? x = vowels.indexOf(x) + 1 : x).join('')
}

function decode(string) {
  return [...string].map(y => nums.includes(y) ? y = vowels[nums.indexOf(y)] : y).join('')
}