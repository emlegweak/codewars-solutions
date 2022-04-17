//Count the number of cubes with paint on

var countSquares = function(cuts){
    return cuts ? 6 * cuts**2 + 2 : 1
}