//To square(root) or not to square(root)
function squareOrSquareRoot(array) {
    return array.map(item => Math.sqrt(item) == Math.sqrt(item).toFixed() ? Math.sqrt(item) : item * item);
}