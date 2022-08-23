//Be Concise II - I Need Squares
function squaresOnly(array) {
    return array.filter(x => Number.isInteger(Math.sqrt(x)))
}