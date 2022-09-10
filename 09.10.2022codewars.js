//largest pair sum in array
//sort array in numerical order, slice off two largest nums, add two largest nums
function largestPairSum(numbers) {
    return numbers.sort((a, b) => a - b).slice(-2).reduce((a, b) => a + b, 0)
}