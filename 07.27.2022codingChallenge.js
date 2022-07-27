//changing it up, did a leetcode challenge today!

//1480. Running Sum of 1d Array

//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
//Return the running sum of nums.
/*
Example 1:

Input: nums = [1, 2, 3, 4]
Output: [1, 3, 6, 10]
Explanation: Running sum is obtained as follows: [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4].
    Example 2:

Input: nums = [1, 1, 1, 1, 1]
Output: [1, 2, 3, 4, 5]
Explanation: Running sum is obtained as follows: [1, 1 + 1, 1 + 1 + 1, 1 + 1 + 1 + 1, 1 + 1 + 1 + 1 + 1].
    Example 3:

Input: nums = [3, 1, 2, 10, 1]
Output: [3, 4, 6, 16, 17]


Constraints:

1 <= nums.length <= 1000
    - 10 ^ 6 <= nums[i] <= 10 ^ 6

*/

//my solution
var runningSum = function (nums) {
    let outputArray = [];
    nums.reduce((prev, curr, i) => outputArray[i] = prev + curr, 0);
    return outputArray;
};

//testcase
runningSum([1, 2, 3, 4]);

//output
//[1, 3, 6, 10]
//Expected
//[1, 3, 6, 10]

//details
//Runtime: 103 ms, faster than 29.58 % of JavaScript online submissions for Running Sum of 1d Array.
//Memory Usage: 42.4 MB, less than 48.49 % of JavaScript online submissions for Running Sum of 1d Array.