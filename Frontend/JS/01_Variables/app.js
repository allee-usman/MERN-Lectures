const accountId = 144553
let accountEmail = "aliusman@google.com"
var accountPassword = "12345"
accountCity = "Pattoki"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ali@gmail.com"
accountPassword = "123131"
accountCity = "Lahore"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])