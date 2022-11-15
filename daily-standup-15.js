//11-15-22

// Task
// You will be given an array of numbers.You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

//   Examples
// [7, 1]  => [1, 7]
// [5, 8, 6, 3, 4]  => [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  => [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
//sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])

//First sol
function sortArray(arr) {
  //filter -> sort
  const oddNums = arr.filter(x => x % 2 !== 0).sort( (a, b) => a-b) //can just do x % 2, because it is truthy, but x % 2 !== 0 is 'more readable'
  
  //map

  return arr.map( x => x % 2 === 0 ? x : oddNums.shift() )
  
}

//alt solution
function sortArray(arr) {
  //filter -> sort
  const oddNums = arr.filter(x => x % 2 !== 0).sort((a, b) => b - a ) //sort in descending order, so can pop inside the map instead of shift. Improves the time complexity

  //map
  return arr.map(x => x % 2 === 0 ? x : oddNums.pop()) //better time complexity



}


console.log(sortArray([7, 1])) // [1,7]
console.log(sortArray([ 5, 8, 6, 3, 4])) // [3, 8, 6, 5, 4]
console.log(sortArray([5, 3, 2, 8, 1, 4])) // [1,3,2,8,5,4]
console.log(sortArray([5, 3, 1, 8, 0])) // [1,3,5,8,0]