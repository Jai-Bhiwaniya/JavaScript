const account_id = 144553
let account_email = "jai@google.com"
var account_pass = "Jaiatlan"
account_city = "Umaria"
let account_state
// account_id=2 // not allowed

account_email = "jai@outlook.com"
account_pass = "Jaiatlan@123"
account_city = "Varanasi"

/*
Prefer not to use var
because of issue in block scope and
*/
console.log(account_id);

console.table([account_id,account_email,account_pass,account_city,account_state])