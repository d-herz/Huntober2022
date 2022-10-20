// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// repeats([4,5,7,5,4,8]),15)
// repeats([9, 10, 19, 13, 19, 13]),19)
// repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
// repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
// repeats([5, 10, 19, 13, 10, 13]),24)

//Parameters, always numbers? Negative numbers? No strings, empty arrays? Always numbers that occur once?
//The return should be a number, the sum of the numbers that appear singularly
//filter/map, or maybe a charMap, or a set


function repeats(arr){
  let arr2 = arr.filter( (x, i, a) => a.indexOf(x) == a.lastIndexOf(x))
  console.log(arr2)
  return arr2.reduce( (acc, c) => acc + c, 0)
}

console.log(repeats([4,5,7,5,4,8])) //15
console.log(repeats([9, 10, 19, 13, 19, 13])) //19
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]))  //12