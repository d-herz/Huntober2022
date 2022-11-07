// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 

//my attempt which doesn't work for keeping words with the same last letter in the same spot as original
function last(x){

  let arr = x.split(' ').map( x => x.split('').reverse()).sort().map( x => x.reverse().join(''))

  return arr
}


//Working Solution
function last(x){
  return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

//Leon's alt sol
function last(x){
  return x.split(' ').sort( ( a, b) => a.slice(-1) > b.slice(-1))
}

console.log(last('man i need a taxi up to ubud')) // ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
console.log(last('what time are we climbing up the volcano')) // ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']