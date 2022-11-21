//11-21-22
// https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries.For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

//My solution
const removeConsecutiveDuplicates = s => {

  let arr = s.split(' ')
  console.log(arr)

  let arr2 = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]){
      arr2.push(arr[i])
    }  
  }
  
  console.log(arr2)
  return arr2.join(' ')
}


console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')) // "alpha beta gamma delta alpha beta gamma delta"