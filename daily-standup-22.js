// 12-5-22
// From: https://www.codewars.com/kata/52efefcbcdf57161d4000091
// Count all the occurring characters in a string. If you have a string like aba, then the result should be { 'a': 2, 'b': 1 }.
// What if the string is empty ? Then the result should be empty object literal, {}.

//prep as usual, parameters, return, etc.
//My sol
// function count(str) {
//   let cache = {}
//   if (str) {
//     let arrStr = str.split('')

//     for (let i = 0; i < arrStr.length; i++) {
//       if (cache.hasOwnProperty(arrStr[i])) {
//         cache[arrStr[i]]++

//       } else {
//         cache[arrStr[i]] = 1

//       }
//     }
//   } else {
//     return cache
//   }
//   return cache;
// }

//Leon's solution
function count(str) {
  //create object
  let countObject = {}
  //loop -> check val exists ? val ++ : val = 1

  for (const char of str) { //for of loop
    if ( countObject[char] ) { //Don't need .hasOwnProperty, just check using square bracket notation
      countObject[char]++
    } else {
      countObject[char] = 1
    }
  }
  
  return countObject

}

console.log(count('aba')) // { 'a': 2, 'b': 1 }
console.log(count('')) //{}
console.log(count())

