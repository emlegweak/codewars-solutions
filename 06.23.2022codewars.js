//credit card mask 
// return masked string
function maskify(cc) {
    let maskedChars = ""
    let lastFour = cc.substr(-4)
    for (let i = 0; i < cc.length - 4; i++) {
        maskedChars += '#'
    }
    return maskedChars + lastFour
}
