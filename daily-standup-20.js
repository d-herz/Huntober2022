//12-1-22
// Given a number as an input, print out every integer from 1 to that number.However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

//Will it always be a whole number, a positive number? 0 (no) ? Anything weird or no?

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log('Fizzbuzz')
      
    } else if (i % 3 === 0) {
      console.log('Buzz')
      
    } else if (i % 2 === 0) {
      console.log( 'Fizz')
    } else {
      console.log(i)
    }
  }
}

//Leon's solution //only difference was && for first condition

function fizzBuzzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 6 === 0 ) { 
    console.log('Fizzbuzz')

    } else if (i % 3 === 0) {
      console.log('Buzz')

    } else if (i % 2 === 0) {
      console.log('Fizz')
    } else {
      console.log(i)
    }
  }
}

console.log(fizzBuzz(15))
console.log(fizzBuzz(22))

