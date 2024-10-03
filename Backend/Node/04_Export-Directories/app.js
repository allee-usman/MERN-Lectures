//* Suppose we want to use all the file of "Fruits" Directory. For this we have to make a special file called "index.js" in the "Fruits" Directory. This file will require all the info from other files. See futher explanation in index.js file.

//require the fruits directory
const fruits = require("./Fruits");
console.log(fruits);
console.log(fruits[1].name); //output: Mango
/*
* So requiring a directory is two step process:
//1st step:
require() will try to find index.js(entry point) file in the requested directory
2nd step: After finding the index.js file, it will start its execq from the index.js file

//Note: If you do not want to make index.js named file, then you need to explicitly specify the path to this file in require() i.e:
const fruits = require("./Fruits/fileName.js");
*/
