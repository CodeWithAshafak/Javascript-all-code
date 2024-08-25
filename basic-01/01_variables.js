const accountId = 23353
let accountEmail = "ashafak04@gmail.com"
var accountPassword = "ahsfakiod%rft5"
accountCity = "pune" // javascripe me bina keyword likhe variable declare kar skate hai but aisa nhi karna chahiye .
let accountState; // yeh "Undefined" print Karega 
 


// const accountId = 45 it is not possible because const keyword cant be changed after it declared.
// console.log(accountId);  yeh change nhi hoga q ki variable ka data type const declared hai.

//now we want to update and see what happen ....
accountEmail = "434"
accountPassword = "34ashfak"
accountCity = "hyd"

/*
Prefer not to use var 
because of issue block scope and functional scope 


*/



console.table([accountId, accountEmail,accountPassword,accountCity ,accountState]) 
// If you want to print multiple variable by using single comment then we have to use consol.table([in the square braket write variable name ])
