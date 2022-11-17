// 11 - 16 - 22

// Given an array of strings of the same letter type.Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] => ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

// If the average length is not an integer, use Math.round().
// The input array's length > 1

//Will the array elements always consist of the same letter? Never any empty or different value types?


//My solution
// function averageLength(arr) {
//   let arrLength = arr.length
//   // console.log(arrLength)

//   let totalStrLength = 0
//   arr.forEach(ele => totalStrLength += ele.length)
//   // console.log(totalStrLength)

//   let avgElementLength = Math.round(totalStrLength / arrLength)
//   console.log(` The average length is ${ avgElementLength }`)

//   let newArr = arr.map( x => x.split(''))
//   // console.log(newArr)

//   for (let i = 0; i < newArr.length; i++) {
//     while (newArr[i].length > avgElementLength) {
//       newArr[i].pop();
//     }

//     while (newArr[i].length < avgElementLength) {
//       newArr[i].push(newArr[i][0])
//     }
//   }
//   newArr = newArr.map( x => x.join(''))

//   return newArr
// }


//Leon Solution
function averageLength(arr) {

  //get avg length -> rounded
  const avgLength = Math.round( arr.join('').length /arr.length )

  return arr.map( str => str[0].repeat(avgLength) )
}


console.log(averageLength(['u', 'y'])) // ['u', 'y'] avg length = 1
console.log(averageLength(['aa', 'bbb', 'cccc'])) // ['aaa', 'bbb', 'ccc'] avg length = 3
console.log(averageLength(['aa', 'bb', 'ddd', 'eee'])) // ['aaa', 'bbb', 'ddd', 'eee'] avg length = 2.5;
console.log(averageLength(['vvv', 'i', 'iiiiiiiiii', 'kkkkkkkkk', 'g', 'qqqqqq'])) //avg length = 5