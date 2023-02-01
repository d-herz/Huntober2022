//1-31-23 & 2-1-23
//https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/

// Find the greatest common divisor of two positive integers.The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// function mygcd(x, y) {
//   let divisorsX = [];

//   let divisorsY =[];

//   let smallerNumber = x < y ? x : y

//   for (let i = 0; i <= smallerNumber; i++) {
//     if (x % i === 0) {
//       divisorsX.push(i)
//     }

//     if (y % i === 0) {
//       divisorsY.push(i)
//     }
//   }

//   console.log( divisorsX.sort() )
//   console.log( divisorsY.sort() )
// }

//Non-Recursive
// function mygcd(x, y) {

//   let smallerNumber = x < y ? x : y

//   for (let i = smallerNumber; i > 0 ; i--) {
//     if (x % i === 0 && y % i === 0) {
//       return i 
//     }
//   }
// }

//Recursive with Euclidian Algorithm
function mygcd(a, b) {
  if (b === 0 ) {
    return a
  }
  return mygcd( b, a % b)
}


console.log(mygcd( 30,12))//6
console.log(mygcd( 8, 9 ))//1
console.log(mygcd(1,1 )) //1
console.log(mygcd(18,9 )) //9