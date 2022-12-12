//12-12-22

//https://leetcode.com/problems/contains-duplicate/

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//   Example 1:
// Input: nums = [1, 2, 3, 1]
// Output: true

// Example 2:
// Input: nums = [1, 2, 3, 4]
// Output: false

// Example 3:
// Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */

//my sol
var containsDuplicate = function (nums) {

  let charMap = {}
  for (num of nums) {
    if (charMap[num]) {
      return true
    } else {
      charMap[num] = 1
    }
  }
  return false
};

//Leon
function containsDupes(arr) {
  let numsMap = {}
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if (numsMap[num]) {
      return true
    } else {
      numsMap[num] = true;
    }
  }
  return false
}


console.log(containsDuplicate([1, 2, 3, 4])) //false
console.log(containsDuplicate([1, 2, 3, 1])) //true
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])) //true

console.log(containsDupes([1, 2, 3, 4])) //false
console.log(containsDupes([1, 2, 3, 1])) //true
console.log(containsDupes([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])) //true
