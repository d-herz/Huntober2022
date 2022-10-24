// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

//parameters: 2 (array of numbers and an integer) (Will the array ever be empty? Will it always contain the required amount of even numbers (at least 'n')? Will it always contain only numbers (no strings, etc), always positive values (both, ok!)? all whole numbers?)
//return a new array with the last n even numbers

// function lastEvens (arr, n) {
  
//   let arr2 = arr.filter( x => x % 2 === 0)
//   return arr2.slice(-n)

// }
//1-liner
const lastEvens = ( arr, n ) => arr.filter( x => x % 2 === 0 ).slice(-n)

console.log(lastEvens([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
console.log(lastEvens([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))
console.log(lastEvens([6, -25, 3, 7, 5, 5, 7, -3, 23], 1))