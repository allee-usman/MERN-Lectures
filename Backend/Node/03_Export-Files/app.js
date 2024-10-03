//* Suppose we want to define our own math library and then use in our project. i.e:

//$: require() is a built-in function to include external modules which exist in separate files.

// const myName = require('./math.js');
// console.log(myName); // output: Ali Usman


const module1 = require('./math.js');
console.log(module1); // output: {sum: function, subtract: function, g: 9.8, PI: 3.1415}
console.log(module1.sum(4+3)); // output: 7
console.log(module1.PI); // output: 7
