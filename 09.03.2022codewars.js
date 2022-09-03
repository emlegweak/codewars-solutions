//Odd-Even String Sort
function sortMyString(S) {
    let even = S.split('').filter((item, x) => x % 2 === 0).join('')
    let odd = S.split('').filter((item, x) => x % 2 !== 0).join('')
    return `${even} ${odd}`
}