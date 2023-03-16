// Standup 3-16-23
// Solves Leetcode: https://leetcode.com/problems/binary-search/description/

function binarySearch(nums, target) {
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
}
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9), "4")