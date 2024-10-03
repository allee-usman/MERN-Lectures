//* The 'try' statement allows you to write a block of code to be test for error while the code is being executed
//* The 'catch' statement allows you to write a block of code to be be executed if an error occurs in 'try' block

// try {
//     console.log(a);
    
// } catch {
//     console.log('a is not declared');
    
// }

//Output: a is not declared
let b = 10
try {
	console.log(b);
} catch {
	console.log('b is not declared');
}
// Output: 10