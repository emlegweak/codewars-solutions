//Training JS # 14: Methods of Number object--toString() and toLocaleString()
function colorOf(r, g, b) {
    return '#' + convertToHex(r) + convertToHex(g) + convertToHex(b)
}

function convertToHex(x) {
    let convertedColor = x.toString(16)
    return (x < 16 ? "0" : "") + convertedColor
}