// Immediately Invoked Function Expressions (IIFE)

// ? Why needed? 
/*
* Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.

? Syntax:
*(function (){ 
* Function Logic Here. 
*})();

? Use Cases Of IIFE
* Avoid polluting the global namespace.
* To create closures in JavaScript.
* IIFE is used to create private and  public variables and methods.
* It is used to execute the async and await function.
* It is used to work with require function.
*/

//? e.g
(function dbConnection(){
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED ${name}`);
} )('darazStore')