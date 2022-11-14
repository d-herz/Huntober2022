//11-14-22

// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example(just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

//Parameter is an array of length 3, is that always the case? Never a string, never a different length, etc?


// function gimme(arr) {
//   let arrSort = [...arr].sort( (a, z) => a-z )

//   return arr.indexOf(arrSort[1])

// }


function gimme(arr) {
  let midIndex = 0
  let arrMin = Math.min(...arr)
  // console.log(arrMin)
  let arrMax = Math.max(...arr)
  // console.log(arrMax)

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > arrMin && arr[i] < arrMax) {
      midIndex = i
      return midIndex
    }
  }
}

console.log(gimme([2, 3, 1])) //0
console.log(gimme([5, 10, 14])) //1