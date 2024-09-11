let score = null

console.log(typeof score)               //String

let valueInNumber = Number(score)       
console.log(valueInNumber)              //NaN(Not an Number)
console.log(typeof valueInNumber)       //number

/*
NOTE:
To do type conversion we have to just 
write the varible inside the bracket of the datatype in which it is to be changed
datatype should begin with capital
*/

// "33"-> 33
// "33abc"-> NaN
// "true"-> 1/ "false"-> 0
//  null -> 0
//  undefined -> NaN

// Into Boolean
let isLoggedIn = 1;

console.log(typeof isLoggedIn)
let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn)
console.log(typeof boolIsLoggedIn)

// 1->true/ 0->fales
// "Tanish"-> true / ""->false

