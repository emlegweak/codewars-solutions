// Are they the "same"?
function comp(array1, array2) {
    return !array1 || !array2 || array1.length !== array2.length ? false : array1.map(a => a ** 2).sort().toString() == array2.sort().toString()
}