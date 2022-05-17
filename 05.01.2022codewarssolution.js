//Is it a palindrome?
function isPalindrome(x) {
    let palindrome = (x.split('').reverse().join('')).toLowerCase();
    x = x.toLowerCase();
    return x === palindrome;
}