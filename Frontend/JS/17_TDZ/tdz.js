//$ The Temporal Dead Zone (TDZ) in JavaScript is a behavior that occurs when you try to access a variable declared with let or const before it has been initialized. The period between the start of the block and the actual declaration of the variable is called the Temporal Dead Zone. During this time, the variable exists but cannot be accessed, leading to a ReferenceError.

// console.log(myName);
// console.log("Hi");
// console.log("JS");
// var myName = 'ali'; // Expected output: undefined

console.log(myName);
console.log("Hi");
console.log("JS");
let myName = 'ali'; // Expected output: error
//* Hence we can say that from line number 8 to 11, there is temporal dead zone

