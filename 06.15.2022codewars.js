//Mumbling

function accum(s) {
    const arr = []
    const lowerCase = s.toLowerCase()

    for (let i = 0; i < lowerCase.length; i++) {
        let upperCase = lowerCase[i].toUpperCase()
        for (let j = 0; j < i; j++) {
            upperCase += lowerCase[i]
        }
        arr.push(upperCase)
    }
    return arr.join('-')
}