//12-7-22
// https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

//TODO: Given a string of characters, return the character that appears the most often.

//   describe("Max Character", () => {
//     it("Should return max character", () => {
//       assert.equal(max("Hello World!"), "l");
//     });
//   });

// No String or Array Methods(well brute force it first, but then no methods)! 

//Will our parameter always be a string? (Never a number, or empty, or anything weird?...)
//Does case matter, do we count 'L' as the same as 'l'? (not sure yet)
//We will return a single letter, the one which occurs the most? What if there isn't one? (don't really have answer at this point)

// My solution
function maxChar(str) {

  let charMap = {}
  let charCount = 0
  let mostOccur = ''

  for (const char of str) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }

  for (const char in charMap) {
    if (charMap[char] > charCount ) {
      charCount = charMap[char]
      mostOccur = char
    } 
  }
  // console.log(charMap) 
  // console.log(charCount) 
  // console.log(mostOccur) 
  return mostOccur
}

//Article solution, almost identical to mine! :D
// const max = string => {
//   const characters = {};

//   for ( let character of string) {
//     characters[character] = characters[character] + 1 || 1;  
//   }

//   let maxCount = 0;
//   let maxCharacter = null

//   for (let character in characters) {
//     if (characters[character] > maxCount) {
//       maxCount = characters[character];
//       maxCharacter = character
//     }
//   }
//   return maxCharacter
// }


//Leon solution
function maxCharacter(str) {
  
  let charMap = {}
  let count = 0;
  let maxChar = null;

  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1
  }
  
  for (const char in charMap) {
    if (charMap[char] > count) {
      maxChar = char
      count = charMap[char]
    }
  }
  return maxChar
}



console.log(maxChar('Hello World')) //'l'
console.log(maxChar('Suhhh')) //'h'
console.log(maxChar('We Go Get')) //G or e, 

console.log(max('Help me')) //'e'
console.log(max('Suhhh')) //'h'
console.log(max('We Go Get')) //G or e, 