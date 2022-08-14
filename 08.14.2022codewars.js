//Coding 3min: Jumping Dutch act
function sc(floor) {
    let scream = ""
    if (floor <= 1) {
        return scream
    } else if (floor <= 6) {
        return 'Aa~ '.repeat(floor - 1) + 'Pa! ' + 'Aa!';
    } else {
        return 'Aa~ '.repeat(floor - 1) + 'Pa!';
    }
}