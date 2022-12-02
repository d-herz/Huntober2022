//12-2-22
// https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

// Given a string of characters as input, write a function that returns it with the characters reversed.No Reverse Method(well brute force it first, but then no reverse method)! 

//always a string of characters? No empty inputs, integers, or other weird stuff?
//Return the same string with characters in the reverse order (without reverse method)

//My sol
function revString(str) { 
  // console.log(str.length) //sanity check
  //initialize new string
  let newStr = '' 
  
  //loop through original string backwards and add each letter (starting from the end) to the new string
  for (let i = str.length-1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr
}


console.log(revString('abcd')) // 'dcba'
console.log(revString('JavaScript'))  //'tpircSavaJ'