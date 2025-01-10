const accountId = 144553
let accountEmail = "nish@gmail.com"
var accountPassword = "123545"

accountCity = "Sydney"

//accountId = 2 //not allowed

accountEmail = "hc.vn"
accountPassword = "232323"
accountCity = "melbourne"
let accountState;

console.log(accountId); 
/* Prefer not to use var 
because of iussue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])