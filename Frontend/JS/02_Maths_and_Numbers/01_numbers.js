let number1 = 199
// console.log(number1);

let number2 = new Number(123) //number object
// console.log(number2);
// console.log(number2.valueOf()); //value -> 123

// +++++++++++++++++ Maths +++++++++++++++++++
// console.log(Math.PI);

// Generate random number upto 10
let randNum = Math.random()*10
// console.log(randNum);

randNum = Math.floor(randNum) //to round off and make integer
// console.log(randNum); 

// Generate random number > 0 and < 100
let randNum1 = Math.floor((Math.random()*100) + 1)
// console.log(randNum1);

// Generate random number > Minimum value && <= Maximum Value
let minValue = 10
let maxValue = 50
let randNum3 = Math.floor((Math.random()*(maxValue - minValue + 1)) + minValue)
console.log(randNum3);


// console.log(Math);
// console.log(Math.abs(-10)); //Expected: 10
// console.log(Math.round(123.3)); //Expected: 123
// console.log(Math.ceil(123.3)); //Expected: 124
// console.log(Math.floor(123.3)); //Expected: 123
// console.log(Math.min(123.3, 12, 13, 198)); //Expected: 12
// console.log(Math.max(123.3, 12, 13, 198)); //Expected: 198



