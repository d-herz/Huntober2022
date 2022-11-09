//11-9-22: Array.diff
// https://www.codewars.com/kata/523f5d21c841566fde000009
// Implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// arrayDiff([], [4,5]), [], "a was [], b was [4,5]"

// arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"

// arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"



// My first highly-unoptimized solution
function arrayDiff(a, b) {
  
  return a.filter( x => !b.includes(x))
}

//Leon's more-optimal solution:
function arrayDiff(a, b) {
  let newSet = new Set(b)
  return a.filter( n => !newSet.has(n) ) //has happens in constant time
}

console.log( arrayDiff([1,2],[1]) ) //[2]
console.log( arrayDiff([1,2,2,2,3],[2]) ) //[1,3]
console.log( arrayDiff( [1,2,2], [1] ) ) //[2,2]
console.log( arrayDiff([1,2,2], [2]) ) //[1]
console.log( arrayDiff([1,2,2], [] ) ) //[1,2,2]


//Other codewar user sol's

// function arrayDiff(a, b) {
//   b = new Set(b)
//   return a.filter(v => !b.has(v))
// }


// function arrayDiff(a, b) {

//   var arr = new Array(); //Not sure why you "new Array()" and not just []
  
//   for(var i = 0;i<a.length;i++){ //b.indexOf(a[i] < 0 ) because if not in b, indexOf returns -1
//       if(b.indexOf(a[i])<0){
//           arr.push(a[i]);
//       }
//   }

//   return arr;
// }

// function arrayDiff(a, b) {
//   return a.filter( v => { return b.indexOf(v) === -1 });
// }