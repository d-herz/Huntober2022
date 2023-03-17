// Standup 3-16-2023
// Leetcode: Binary Search
// https://leetcode.com/problems/binary-search/description/

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its INDEX. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

//   Example 1:

// Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1, 0, 3, 5, 9, 12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1


// Constraints:

// 1 <= nums.length <= 104
//   - 104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0, right = nums.length - 1
  while (left < right) {
    let mid = left + Math.floor((right - left + 1) / 2)
    if (target < nums[mid]) {
      right = mid - 1
    } else {
      left = mid
    }
  }
  return nums[left] === target ? left : -1
};


