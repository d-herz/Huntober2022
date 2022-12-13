//12/13/22
//https://leetcode.com/problems/majority-element/
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.You may assume that the majority element always exists in the array.

//   Example 1:
// Input: nums = [3, 2, 3]
// Output: 3

// Example 2:
// Input: nums = [2, 2, 1, 1, 1, 2, 2]
// Output: 2


/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
  let n = nums.length
  let charMap = {}

  for (const num of nums) {
    charMap[num] = charMap[num] +1 || 1
  }
  // console.log(charMap)

  for (const char in charMap) {
    if (charMap[char] > n / 2) {
      return char
    }
  }
};

console.log(majorityElement([3, 2, 3])) //3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])) //2