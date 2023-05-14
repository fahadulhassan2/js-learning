const accountId = 144553
let accountEmail = "hitesh@google.com"

var accountPassword = "12345"
// accountCity behave same like a var 
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"

// var accessible anywhere 
accountCity = "Bengaluru"
if (true) {
    accountCity = "pakistan"
}

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//  Note 

//  Let ,const have block & local scope  and var have gobale scope and re-decalarable

// when we use const ,let varaible goes in TDZ Tempory Dead Zone

// when we use var keywork varaible goes in hosting -> undefine

//when we use const must decallar value other its throw error

// e.g const age; -> error
// e.g const age = 0; -> correct