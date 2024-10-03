// require all the files
const apple = require('./apple.js');
const mango = require('./mango.js');
const orange = require('./orange.js');

//make an array of all the fruits
let fruits = [apple, orange, mango];

//export the fruits
module.exports = fruits;