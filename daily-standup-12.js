// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

//always 2 arrays?, both arrays always have numbers and at most 1 number missing in the mixed array?
//first array always sorted (don't need to do?)
// sort the mixed array, then use foreach or map to compare


function findDeletedNumber(arr, mixArr) {
  mixArr = mixArr.sort( (a,z) => a-z)

  if (arr.length !== mixArr.length){
    return Number( arr.filter( x => !mixArr.includes(x)) )

  }else{
    return 0
  }

}

//Leon's 1st Solution: Not good time complexity (quadratic) 
// function findDeletedNumber(arr, mixArr) {
//   return arr.filter(x =>mixArr.indexOf(x) == -1)[0]||0
// }

//Leon's 2nd: (this would be a linear solution)
function findDeletedNumber(arr, mixArr) {
  if(arr.length === mixArr.length){ //check this first, in order to exit the function in constant time if this case is true ( we could let the else statement run, it would return 0 for the right case, but we use this conditional because it would be a constant time solution when the lengths are the same)
    return 0
  }else{
    let arrSum = arr.reduce( (acc, c) => acc + c, 0)
    let mixArrSum = mixArr.reduce( (acc,c) => acc + c, 0)
    return arrSum - mixArrSum
  }
}



    
console.log( findDeletedNumber([1,2,3,4,5], [3,4,1,5]) ) //2 'Deletion

console.log( findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]) ) //5 'Deletion'

console.log( findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]) ) //0, 'No deletion'
