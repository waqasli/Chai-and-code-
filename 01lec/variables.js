const accountId=1234
let accountEmail="waqasaliwaqas7600@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;
//accountId=2 // not allow to change 
accountEmail="waqasali6544@gmail.com"
accountPassword="2312321"
accountCity="lahore"
/*
Prefer not to use of var because of issue in block scope and fuunctional scope 
*/
console.log(accountId);
console.log(accountEmail);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])