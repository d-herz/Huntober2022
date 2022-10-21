// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)

//parameter: non-empty array of integers (always integers?, always positive/never negative?)
//return: the average of the array, rounded down to nearest integer. It will be a whole number (no 2.5, 2.3, etc)
// getAverage([1,2,3,4,5,]) === 3;


// simple reduce and divide
// function getAverage(arr){
//   return Math.floor( (arr.reduce((acc,c) => acc + c , 0))/arr.length )
// }


//for loop
// function getAverage(arr){

//   let sum = 0
//   let avg = 0

//   for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
//   }

//   avg = Math.floor( sum/arr.length)
//   return avg
// }

//Implicit return
const getAverage = arr => Math.floor( (arr.reduce((acc,c) => acc + c , 0))/arr.length )



console.log(getAverage([1,2,3,4,5]))

console.log(getAverage([2,2,2,2]))

console.log(getAverage([2.5, 4.3, 5.9, 4.2, 6.7, 9.2, 23, 2.77]))