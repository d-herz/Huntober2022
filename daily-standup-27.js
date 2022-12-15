// 12-14-22
//https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// const magazine =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// describe("Ransom Note", () => {
//   it("Should return true", () => {
//     assert.equal(ransomNote("sit ad est sint", magazine), true);
//   });

//   it("Should return false", () => {
//     assert.equal(ransomNote("sit ad est love", magazine), false);
//   });

//   it("Should return true", () => {
//     assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//   });

//   it("Should return false", () => {
//     assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//   });
// });


const magazine = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

//My attempt
function createNote(mag, ransomNote) {

  const magWords = mag.split(' ')
  let magWordMap = {}
  
  for (let word of magWords) {
    magWordMap[word] = magWordMap[word] + 1 || 1;
  }
  // console.log(magWordMap)

  let noteWords = ransomNote.split(' ');
  // console.log(noteWords)
  let isItPossible = true;

  for (const word of noteWords) {
    if (magWordMap[word]) {
      magWordMap[word]--
      if (magWordMap[word] < 0) {
        isItPossible = false
      } 

    } else {
      isItPossible = false
    }
  }
  return isItPossible
}

//Leon's 
function ranNote(note, mag) {
  const noteWordArr = note.split(' ')
  const magWordArr = mag.split(' ')
  const magHash = {}
  let possible = true;

  for (let word of magWordArr) {
    magHash[word] = magHash[word] + 1 || 1
  }

  for (const word of noteWordArr) {
    if (magHash[word]) {
      magHash[word]--
      if (magHash[word] < 0) {
        possible = false
      }
    } else {
      possible = false
    }
  }
  return possible
}


console.log(createNote(magazine, "sit ad est sint")) //true
console.log(createNote(magazine, "sit ad est love")) //false
console.log(createNote(magazine, "sit ad est sint in in")) //true
console.log(createNote(magazine, "sit ad est sint in in in in")) //false


console.log(ranNote("sit ad est sint", magazine)) //true
console.log(ranNote("sit ad est love", magazine)) //false
console.log(ranNote("sit ad est sint in in", magazine)) //true
console.log(ranNote("sit ad est sint in in in in", magazine)) //false
