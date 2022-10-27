//10-27-22
//(Duplicate Encoder from Codewars: 6q)
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

//Params: always a string? never empty or numbers or werid stuff?
//return a string consisting of parantheses, '(' for singular chars, and ')' for multiple
/* 
1. all lowercase
2. count how many of each letter (char map)
3. loop a new string based on char map (but iterate length of og string)
*/

function dupEncode (text){
  let charMap = {}
  let str = ''
  text = text.toLowerCase()

  for(char of text){
    if(charMap.hasOwnProperty(char)){
      charMap[char]++
    }else{
      charMap[char] = 1
    }
  }
  console.log(charMap)

  for(let i = 0; i < text.length; i++){
    if(charMap[text[i]] > 1){
      str += ')'
    }else{
      str += '('
    }
  }
  return str
}

console.log(dupEncode('din'))
console.log(dupEncode('recede'))
console.log(dupEncode('Success'))
