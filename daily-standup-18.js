//11-28-22
// String Array Duplicates
// https://www.codewars.com/kata/59f08f89a5e129c543000069

// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra", "allottee", "assessee"]) = ["abracadabra", "alote", "asese"].
//   dup(["kelless", "keenness"]) = ["keles", "kenes"].
// Strings will be lowercase only, no spaces

// dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]), ['codewars', 'picaniny', 'hubububo'])
// dup(["abracadabra", "allottee", "assessee"]), ['abracadabra', 'alote', 'asese'])
// dup(["kelless", "keenness"]), ['keles', 'kenes'])


// function dup(arr) {
//   let arr2 = arr.map(x => x.split(''))

//   for (let i = 0; i < arr2.length; i++) {

//     arr2[i] = arr2[i].filter((x, j, a) => x !== a[j - 1])

//   }
//   return arr2.map(x => x.join(''))
//   // console.log(arr2)
// };

//Leons

function dup(arr) {

  return arr.map( word => word.split('').filter( (l,i,a) => l != a[i-1]).join('') )
  // console.log(arr2)
};

console.log(dup(["kelless", "keenness"])) //['keles','kenes']
console.log(dup(["Woolloomooloo", "flooddoorroommoonlighters", "chuchchi"])) // ['Wolomolo','flodoromonlighters','chuchchi']
console.log(dup(["abracadabra", "allottee", "assessee"])) // ['abracadabra','alote','asese']