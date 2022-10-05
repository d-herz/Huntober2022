//Day 1, Saturday 10-1-22
//Hint from twitter? "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"
/*
'0' <-> 'O'      '5' <-> 'S'
'1' <-> 'I'      '6' <-> 'G'
'2' <-> 'Z'      '7' <-> 'L'
'3' <-> 'E'      '8' <-> 'B'
'4' <-> 'h'      '9' <-> 'q'
*/


//PREP:
//P: String
//R: string fixed from errors
//E: "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."  ==== "PRO-TIP #498: IT'S NICE TO SAY HELLO."
//P: giant conditional or switch statement?


function stringFix(str){
  let newStr = ''
  let newArr = []
  
  let arrStr = str.split('')

  for(let i = 0; i<arrStr.length; i++){

    switch (arrStr[i]){
      case '0':
        newArr.push('O');
        break;
      case '1':
        newArr.push('I');
        break;
      case '2':
        newArr.push('Z');
        break;
      case '3':
        newArr.push('E');
        break;
      case '4':
        newArr.push('h');
        break;
      case '5':
        newArr.push('S');
        break;
      case '6':
        newArr.push('G');
        break;
      case '7':
        newArr.push('L');
        break;
      case '8':
        newArr.push('B');
        break;
      case '9':
        newArr.push('g');
        break;
      default:
        newArr.push(arrStr[i])
    }
  }
  return newArr.join('')
}

//Day 2, Sunday 10-2-22
//1st: remove everything up to (and including) the first lowercase 'c'.
//2nd: remove all instances of the word 'Eek!'
//3rd: reverse the entire string
//4th: (from result of first 3 steps) 'Split this string up on *lowercase* 'V'. The first character in each substring besides this first one is what you need to remember for tomorrow's task'

// "af)|Cz>:CGAHY1_2+(OHYYTM!2vka,&yAlWJ3.r&ZVs4F5&bEa<1r1_nlsR!eA-dOUmgwd2=CE7?ynnl+KQf8lW8u4/Nh1|D7SK2uYz-Y $YD)q.VmLD-&P(lL=:HDMA1!?_R#P,V3bKLqUp_t.X:_dM<Mr9zQ~fKJOBDF&Qjen=d ZAR8ze5g-gj@aZ/I:M:!.IBXLq@vN&8L7oH, /0RFtH+.7%eXtM/mxV7*%0Hj.?FSm.Kh8=@jlUJ_S.ApQzye-xB7ZVA2AwEaxTa_snPX?>D5th&Ag/9)7%#uMN=J<h!#prB=:CI;U_.T5*#rb)9q<ht~W<BOmQlmy.<8EqIlR(Gh~~$zmW;Y$7dn-$bW1jf%PL),krpzE LQwsG;EQ;l:Z;+6#.3)KDA+s#k#YMmUhm% 2KB)GqR U@4B>+A9Vh62@:&SNKVas5%&N6Oz!s/%7(Pd1xWy#Kv>uqyX=VEyHbe-64|ex^& 2W(gD=>FT*?tMZO$(+B8uTj,DU2~QST(B|xls=9kzN|:4hXt~:R4|nir,6RN8fg~3!3!^!yWZ)bE@SI.zV5Z%V9Qf_^ 4az$?wqtWrRu+1aS9<%I=!xW.:ps f).($Qz9s;8:uxVqJN9K$42NG(0=j)wZ&U1oB?v^7WVP6QE6-?L;^aglPd5dHO(L2TT5+$NeK-P;js-UAiWCI7>Yr&8|md-X)U=%IpuY)9iymv~ _S^ ,&0|(22&(mIcux_4a196w^FN78kz2kX1k&Psc53d ctbl?Eek!kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS<Ntoav?m8<Q(1ur3Dpd)(XjY1pE)but>eG@QfEek!$Wx8NRZgmQ5t2 kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6! sVk~=Ts3T>j/ZAS)AKX3zOocGL icK#-x0Eek!yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot deeEek!n uoy tahw si enEek!o tsrif siht sedisEek!eb gnirtsbus hcae ni retEek!carahc tsrifEek! eEek!Eek!hT .'V' *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht tilpEek!S"

function strCleanse(str){

  let cIndex = str.indexOf('c')
  console.log(cIndex)

  let arr = str.slice(cIndex+1).replaceAll('Eek!', '')
  
  let arr1 = arr.split('').reverse().join('')
  console.log(arr1)

  let vSplit = arr1.split('v')

  let firstChar = []

  for(let i =0; i<vSplit.length; i++){
    firstChar.push(vSplit[i][0])
  }
  return firstChar
}
//output  ['S', 'S', 'p', 'a', 'c', 'e'] (SPACE?)


//Day 3, Monday 10-3-22:
//We need to create a function that will replace any instances of any of the key characters in a given string with an empty space (' '). (Key characters = yesterday's soultion: SPACE)

function spaceCase(str){

  let newStr = str.replaceAll('S','-').replaceAll('P','-').replaceAll('A','-').replaceAll('C','-').replaceAll('E','-')

  //(THE FOLLOWING IS JUST TO TEST PROVIDED EXAMPLE)
  // let newStr = str.replaceAll('A','-').replaceAll('_','-').replaceAll('K','-').replaceAll('E','-').replaceAll('Y','-').replaceAll('!','-') 

  return newStr.split('-').join(' ')

}

//Day 4, Tuesday 10-4-22:
// Today is simple! Given a string, reverse it. Any details like whitespace, letter casing, or punctuation should be preserved and flipped along with the rest of the string. For example:

// "   The white space at the beginning of this string doesn't match the whitespace at the end. "
// reverse it
// " .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "

//PREP:
//P: a string
//R: string but reversed, and preserve whitespace, casing, and punctuation
//E: function strRev ("   The white space at the beginning of this string doesn't match the whitespace at the end. ") === " .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "
/*P:
function strRev(str){
  .split into array, reverse array, and join?
}
*/

function strRev(str){

  let arrRevJoin = str.split('').reverse().join('')
  return arrRevJoin

}

//Day 5, Wednesday 10-5-22