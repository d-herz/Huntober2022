// Standup 3-16-23
// Solves Leetcode: https://leetcode.com/problems/binary-search/description/

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.ceil((left + right) / 2)
    // let mid = left + Math.floor((right - left + 1) / 2)
    
    if (target < nums[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
      // left = mid
    }
  }
  return nums[left] === target ? left : -1
}
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9), "4")
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9), "-1")