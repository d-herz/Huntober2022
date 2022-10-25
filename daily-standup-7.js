//10-25-22
// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// solve([[1,2],[4],[5,6]]),4)
// solve([[1,2],[4,4],[5,6,6]]),4)
// solve([[1,2],[3,4],[5,6]]),8)
// solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

//are the arrays always filled with integers? No string integers or other funny buisnes? WIll it be empty? Will it always be 3 arrays? I noticed in the provided examples there was always 3 arrays
//return a number, that represents the amount of unique arrays possible, not using duplicats

//my sol
// function solve(arr){
//   let product = 1
//   let arrsFilt = new Set

//   for (let i = 0; i < arr.length; i++) {
//     arrsFilt.add( arr[i].filter( (el, ind) => arr[i].indexOf(el) === ind) )
//   }
  
//   arrsFilt = Array.from(arrsFilt)

//   for (let j = 0; j < arrsFilt.length; j++) {
//     product *= arrsFilt[j].length
//   }
  
//   return product

// }

//Leon's solutions

// function solve(arr) {
//   return arr.map( subArr => [...new Set(subArr)].length).reduce( (acc, c) => acc * c, 1)
// }

const solve = arr => arr.reduce( (acc, c) => acc * new Set(c).size, 1)

console.log(solve([[1,2],[4],[5,6]]))
console.log(solve([[1,2],[4,4],[5,6,6]]))
console.log(solve([[1,2],[3,4],[5,6]]))
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]))
console.log(solve([[1,2,3],[3,5,8,9,4,6,6,7],[8,9,10,12,5,6,8,4],[1,2,3,4,5,6,7,8,9]]))

//user sol's
// const solve = a => a.map( v => new Set(v).size ).reduce( (v,w) => v*w , 1 ) ;

// function solve(arr) {
//   return arr.reduce((res, curr) => res *= new Set(curr).size, 1);
// };