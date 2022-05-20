//sum of differences in array 

function sumOfDifferences(arr) {
    return arr.sort((a, b) => b - a)
        .reduce((sum, num, index, array) =>
            index + 1 < array.length ? sum + num - array[index + 1] : sum, 0)
}