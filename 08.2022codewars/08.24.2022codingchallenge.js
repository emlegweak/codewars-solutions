//leetcode for today!
//217. Contains Duplicate
//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
/*

Example 1:
Input: nums = [1, 2, 3, 1]
Output: true

Example 2:
Input: nums = [1, 2, 3, 4]
Output: false

Example 3:
Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
Output: true


Constraints:
1 <= nums.length <= 105
    - 109 <= nums[i] <= 109 

*/

//Solution 

var containsDuplicate = function (nums) {
    //.some() method iterates over all elements in the array and returns true if one or more elements pass the conditions (are duplicates)
    //.indexOf() method compares the current element index with the other elements in the array and if both indexes are the same, it is not a duplicate
    //if the indexes are NOT equal, returns true
    return nums.some((item, index) => index !== nums.indexOf(item))
};