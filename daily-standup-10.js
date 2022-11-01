// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.


//solution with no hint (my brute forcing)
function stringTransformer(str) {
  str = str.split(' ').reverse().join('-') //add a hyphen at each space

  let arr = str.split(' '); //split the string into an array, and reverse it(?) 

  let word = arr.map( x => x.split('')); //loop through the array and split each word into an array of the letters

  let newArr = []; //empty array initialized for pushing the opposite case letters into

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word[i].length; j++) {

      if (word[i][j].toLowerCase() === word[i][j]) {
        newArr.push(word[i][j].toUpperCase())
      } else {
        newArr.push(word[i][j].toLowerCase())
      }
    }
  }
  return newArr.join('').replace('-', ' ')
}

console.log(stringTransformer('Example Input'))


//solution with Leon's hint: make an array, map through it making your changes to each letter, and join back into a string