//How good are you really?

function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    classPoints.forEach(n => sum += n);
    sum;
    let average = sum / classPoints.length
    if (average < yourPoints) {
        return true
    } else {
        return false
    }
}
