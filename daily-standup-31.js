//1-18-23, 1-19-23
//https://www.codewars.com/kata/5694cb0ec554589633000036

// In mathematics, the factorial of a non - negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

// #Your task

// You have to create the function factorial that receives n and returns n! You have to use recursion.

//My 1st Solution:
function factorial(n) {

  if (n === 0) {
    return 1
  } else {
    return n * factorial(n-1)
  }

}

//Leon
function factorial(n) {
  if (n < 2 ) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}


console.log(factorial(3)) // 6
console.log(factorial(5)) // 120
console.log(factorial(10)) // 3,628,800
