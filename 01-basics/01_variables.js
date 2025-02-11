const accountId = 144553
let accountEmail = "email@gmail.com"
var accountPassword = "12345"

accountCity = "Jaipur"
let accountState;

// accountId = 2 not alowed as const
accountEmail = "etsy@hs.com"
accountPassword = "234"
accountCity = "Bengaluru"

console.log(accountId);
/* 
 prefer not to use var; issue with block scope and function scope
*/
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
