//01-03-2023
//(Same as Standup 29: can you solve with a for loop like previous? How about with recursion?)

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

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.

//For loop
// var fib = function (n) {
 
//   let results = [0, 1, ];
  
//   for (let i = 2; i <= n; i++) {
//     results[i] = results[i - 1] + results[i - 2]
//   }

//   return results[n]

// };


//Recursion
// var fib = function (n) {
 
//   if (n < 2) {
//     return n
//   } else {
//     return (fib(n-1) + fib(n-2))
//   }
// };

//Memoization + Recursion
var memo = {}

var fib = function (n) {
  if (n === 0 || n === 1) {
    return n;
  } else if (memo[n]) {
    return memo[n];
  } else {
    var result = fib(n - 1) + fib(n - 2);
    memo[n] = result;
    return result;
  }
};


console.log(fib(0)) // 0
console.log(fib(1)) // 1
console.log(fib(2)) // 1
console.log(fib(3)) // 2
console.log(fib(4)) // 3
console.log(fib(5)) // 5
console.log(fib(10)) // 55 