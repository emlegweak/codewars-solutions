//Collatz Conjecture (3n+1)

var hotpo = function (n) {
    if (n == 0) return 0; //Optional Handler to n = 0

    let counter = 0

    while (n > 1) {
        if (n % 2 === 0) {
            n = n / 2
        } else {
            n = 3 * n + 1
        }
        counter += 1
    }
    return counter
}