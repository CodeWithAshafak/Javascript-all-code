let score = undefined //put strng and number also that is score= "33a" it will throw NaN that is Not a Number ,If socre= undefined then it will throw NaN also ,if score= true it will Thorow 1 and if the score = false  then it will throw 0

console.log(typeof score);
console.log(typeof (score));


let valueInNumber = Number(score);
console.log(typeof valueInNumber );
console.log(valueInNumber);


// Notes
// 1> "33" =>33
// 2> "33ab" => NaN
// 3> true => 1
// 4> false => 0


let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean (isLoggedIn)
console.log(typeof booleanIsLoggedIn );

// notes :-

//1 => true; 0 => false 
// "" => false
// "ashafak" =>true


let someNumber = 33;
let stringNumber = String (someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);

// here the number is converted into the string


