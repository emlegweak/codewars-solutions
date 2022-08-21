//Power
function numberToPower(number, power) {
    let numPower = 1;
    for (let i = 1; i <= power; i++) {
        numPower *= number
    }
    return numPower
}