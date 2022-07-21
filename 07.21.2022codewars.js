//Multiply the number
function multiply(number) {
    if (number.toString().charAt(0) === '-') {
        return number * Math.pow(5, (number.toString().length - 1))
    }
    return number * Math.pow(5, (number.toString().length))
}