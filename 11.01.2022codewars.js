//Given a string, return a new string that has transformed based on the input:

//Change case of every character, ie. lower case to upper case, upper case to lower case.
//Reverse the order of words from the input.
//Note: You will have to handle multiple spaces, and leading/trailing spaces.

//For example:
//"Example Input" ==> "iNPUT eXAMPLE"
//You may assume the input only contain English alphabet and spaces.

function stringTransformer(str) {
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return str.split('')
            .map(x => upperCaseChars.indexOf(x) === -1 ? x.toUpperCase() : x.toLowerCase())
            .join('')
            .split(' ')
            .reverse()
            .join(' ')  
}