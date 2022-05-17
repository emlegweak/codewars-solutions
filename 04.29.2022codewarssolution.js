//Square Every Digit

function squareDigits(num) {
    return Number(String(num).split('').map(function (number) { return Math.pow(Number(number), 2) }).join(''))
}