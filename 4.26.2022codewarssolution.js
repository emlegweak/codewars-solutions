//Area of a Square

function squareArea(A) {
    let circumference = A * 4
    let radius = (circumference / Math.PI) / 2
    let side = radius
    let area = Math.pow(side, 2)
    return Math.round(area * 100) / 100
}