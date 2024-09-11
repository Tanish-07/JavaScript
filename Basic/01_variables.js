/*
NOTE:
We can't redefine const in javascript.
We can even define variables without any declerative type like accountCity.
We should use let since var have issues in block scope and functional scope.
The undefined variable values remain undefined in javascript.
*/

const accountId = 123456;
let accountEmail= "Tan@gmail.com"           //TO BE USED INSTEAD OF var
var accountPassword = "Hello_World"
accountCity = "Delhi"
let accountState;                           //Remain Undefined 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

accountId = 654321                          //NOT ALLOWED   
accountEmail = "Tanish@gmail.com"           
accountPassword = "HelloWorld"
accountCity = "Noida"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])