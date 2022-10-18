// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 

// an array of integeres in the form of strings and number types
//return sum of the array

//* Map and reduce
// function reduceMixedArr (arr) {
//   console.log(arr)
//  return arr.map( x=> +x ).reduce((acc,c) => acc + c, 0)
// }

// console.log(reduceMixedArr(['5', '0', 9, 3, 2, 1, '9', 6, 7]))


//* Using a for loop
// function reduceMixedArr (arr) {
//   let arr2 = []
//   let sum = 0
//   for(let i = 0; i <arr.length; i++){
//     sum += +arr[i]
//     arr2.push(arr[i])
//   }
//   console.log(arr2, sum)
// }

// console.log(reduceMixedArr(['5', '0', 9, 3, 2, 1,'9', 6, 7]))


//* Using a straight reduction
function reduceMixedArr (arr) {
  return arr.reduce((acc,c) => +acc + +c, 0)
}

console.log(reduceMixedArr(['5', '0', 9, 3, 2, 1,'9', 6, 7]))