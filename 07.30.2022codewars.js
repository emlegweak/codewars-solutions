//find the parity outlier

function findOutlier(integers) {
    const odds = [];
    const evens = [];
    for (let integer of integers) {
        if (integer % 2 === 0) {
            evens.push(integer);
        } else {
            odds.push(integer);
        }
    }
    return odds.length === 1 ? odds[0] : evens[0];
}