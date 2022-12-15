// 12-15-22
// https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


//   describe("Two Sum", () => {
//     it("Should implement two sum", () => {
//       assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//     });
//   });


//My first solution
// var twoSum = function (nums, target) {

//   for (let i = 0; i < nums.length; i++) {

//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }

//     }
//   }

// };

//My second solution
// function twoSum2(nums, target) {
//   let numsMap = {}

//   for (const num of nums) {
//     numsMap[num] = num
//   }
//   // console.log(numsMap)
//   let arr = [...Object.values(numsMap)]
//   let arr2 = []

//   for (const num of arr) {
//     if (numsMap[target - num]) {
//       arr2.push(num)
//     }
//     if (arr2.length > 1) {
//       console.log(arr2)
//       return [nums.indexOf(arr2[0]), nums.indexOf(arr2[1])] 
//     }
//   }
// }


//Leon: 
function twoSum2(arr, sum) {
  const pairs = []
  const nums = {}

  for (const num1 of arr) {
    const num2 = sum - num1
    
    if (nums[num2]) {
      pairs.push([num1, num2])
    } else {
      nums[num1] = 1
    }
  }
  return pairs
}



// console.log(twoSum([2, 7, 11, 15], 9)) // [0,1]
// console.log(twoSum([3, 2, 4], 6)) // [1,2]
// console.log(twoSum([3, 3], 6)) // [0,1]
// //
console.log(twoSum2([2, 7, 11, 15], 9)) // [0,1]
console.log(twoSum2([3, 2, 4], 6)) // [1,2]
console.log(twoSum2([3, 3], 6)) // [0,1]
console.log(twoSum2([1, 2, 2, 3, 4], 4)) // [[2,2], [3,1]]