//12-21-22
//https://leetcode.com/problems/fibonacci-number/

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

//   F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

//     Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:
// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3

/**
 * @param {number} n
 * @return {number}
 */

// F(n) = F(n-1) + F(n-2) for n > 1

//My 1st solution using a do-while:
// var fib = function (n) {
//   let cache = {}
//   let i = 0;

//  do {
//     if (i <= 1 ) {
//       cache[i] = i
//     } else {
//       cache[i] = cache[i - 1] + cache[i - 2]
//     }
//    i++
//   } while (i < n )
  
//   let arr = Object.values(cache)
//   arr.reverse()
//   return n > 1 ? arr[0] + arr[1] : n;
// };

//My 2nd sol with a for loop:
// var fib = function (n) {
//   let cache = {}

//   for (let i = 0; i < n; i++) {
//     if (i <= 1) {
//       cache[i] = i
//     } else {
//       cache[i] = cache[i - 1] + cache[i - 2]
//     }
//   }
//   // console.log(n, cache)
//   let arr = Object.values(cache)
//   arr.reverse()
//   // console.log(arr)
//   return n > 1 ? arr[0] + arr[1] : n;
// };

//My 3rd sol with recursion:
// var fib = function (n) {
//   if (n === 0 || n === 1) {
//     return n
//   } else {
//     return fib(n-1) + fib(n-2)
//   }
// };

//Leon's Solution:
var fib = function (n) {
  let arr = [0, 1]
  
  for (let i = 2; i <= n; i++) {
      arr[i] = arr[i-1] + arr[i-2]
  }
  return arr[n]
};


console.log(fib(0)) // 0
console.log(fib(1)) // 1
console.log(fib(2)) // 1
console.log(fib(3)) // 2
console.log(fib(4)) // 3
console.log(fib(5)) // 5
console.log(fib(10)) // 55 






