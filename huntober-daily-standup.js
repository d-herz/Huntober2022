//10-12-22, Wednesday:

// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

//P: a number, always a number?, ever empty?, always positive?, never a string or any funny stuff?
//R: number(s) and depending on parity a string
//E: fizzBuzz (6) === 1,2,'Fizz',4,'Buzz','Fizz'
/*
P: loop, conditional checking parity
*/

function fizzBuzz(n){
  for(let i=0; i<= n; i++){
    if(i % 3 === 0 && i % 5 === 0 ){
      console.log(i + ' Fizz Buzz')
    }else if (i % 5 === 0){
      console.log(i +' Buzz')
    }else if( i % 3 === 0 ){
      console.log(i + ' Fizz')
    }else{
      console.log(i)
    }
  }
}

fizzBuzz(35)