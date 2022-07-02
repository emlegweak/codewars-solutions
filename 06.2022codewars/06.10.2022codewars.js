//Bit Counting
var countBits = function (n) {
    return [...n.toString(2)].filter(x => x === "1").length
};
