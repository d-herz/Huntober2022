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


//Leon
function majorityEle (arr) {
  // arr.sort()
  // return arr[Math.floor(arr.length/2)] //logarithmic solution

  let elem = {},
    count = 0,
    majElem = arr[0]
  
  for (const num of arr) {
    elem[num] = elem[num] + 1 || 1;
  }

  for (const num of arr) {
    elem[num] = elem[num] + 1 || 1;
    // elem[num] > arr.length/2 
  }

  for (const n in elem) {
    if (elem[n] > count) {
      count = elem[n]
      majElem = n
    }
  }
  return majElem
};

console.log(majorityElement([3, 2, 3])) //3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])) //2


console.log(majorityEle([3, 2, 3])) //3
console.log(majorityEle([2, 2, 1, 1, 1, 2, 2])) //2