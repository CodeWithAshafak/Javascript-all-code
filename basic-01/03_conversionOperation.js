let score = undefined //put strng and number also that is score= "33a" it will throw NaN that is Not a Number ,If socre= undefined then it will throw NaN also ,if score= true it will Thorow 1 and if the score = false  then it will throw 0

// console.log(typeof score);
// console.log(typeof (score));


let valueInNumber = Number(score);
// console.log(typeof valueInNumber );
// console.log(valueInNumber);


// Notes
// 1> "33" =>33
// 2> "33ab" => NaN
// 3> true => 1
// 4> false => 0


let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean (isLoggedIn)
//console.log(typeof booleanIsLoggedIn );

// notes :-

//1 => true; 0 => false 
// "" => false
// "ashafak" =>true


let someNumber = 33;
let stringNumber = String (someNumber)
//console.log(stringNumber)
//console.log(typeof stringNumber);  // here the number is converted into the string




//****************************** Operations **************************************
let value = 3
let negValue = -value
//console.log(negValue);




// console.log(2+2);
// console.log(2*2);
// console.log(2-2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%3)



let str1 = "hello"
let str2 = " ashafak"

let str3 = str1 + str2
// console.log(str3)


console.log("1" +2); //ans is 12
console.log(1 + "2"); // ans is 12 
console.log("1"+ 2 + 3);   // ans is 123
console.log(1+2+"3");     // ans is 33


console.log(+true); //ans is 1
console.log(+"");   // empty string is 0 then we are going to make positive ans result is 0







