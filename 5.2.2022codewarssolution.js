//Nth power

function index(array, n) {
    if (n <= array.length - 1 && n > 0) {
        return Math.pow(array[n], n)
    } else {
        return -1
    }
}