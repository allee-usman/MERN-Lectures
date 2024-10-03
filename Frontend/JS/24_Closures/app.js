//+++++++++++++++++++++++++++++++++++
//* +++++++++++ Closures ++++++++++++
//+++++++++++++++++++++++++++++++++++

/*
//$ A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s letiables — a scope chain.
//* The closure has three scope chains:
    it has access to its own scope — letiables defined between its curly brackets
    it has access to the outer function’s letiables
    it has access to the global letiables

*/
// let name = "Ali";
// function outer() {
//     let name = "Usman";
//     function inner() {
//         // let name = "AU";
//         console.log(name);
//     }
//     inner();
// }
// outer();

// let name = 'Ali';
// function outer() {
// 	let name = 'Usman';
// 	function inner() {
// 		// let name = "AU";
// 		console.log(name);
// 	}
// 	return inner;
// }
// let inner = outer();
// inner(); //Expected Output: "Usman"

// function outer() {
// 	let b = 10;
// 	function inner() {
// 		let a = 20;
// 		console.log(a + b);
// 	}
// 	return inner;
// }
// let X = outer();
// let Y = outer();

// console.log(X);
//Note: X is equavilent to inner().

//end of outer() function executionsX(); // X() invoked the first time
// X(); // Expected Output: 30
// Y(); // Expected Output: 30

/*
//* Let us examine step-by-step what happens when X() is executed:
// 1): Variable a is created, and its value is set to 20.
// 2) JavaScript now tries to execute a + b. Here is where things get interesting. Since b is part of the outer function, b would only exist while the outer() function is in execution. Since the outer() function finished execution long before we invoked X(), any variables within the scope of the outer function cease to exist, and hence variable b no longer exists.

//? How does JavaScript handle this?
This is where "Closures" comes into play. The inner function can access the variables of the enclosing function due to closures in JavaScript. In other words, the inner function preserves the scope chain of the enclosing function at the time the enclosing function was executed, and thus can access the enclosing function’s variables.
In our example, the inner function had preserved the value of b=10 when the outer() function was executed, and continued to preserve (closure) it.

*/

function outer() {
	var b = 10;
	var c = 100;
	function inner() {
		var a = 20;
		console.log('a= ' + a + ' b= ' + b);
		a++;
		b++;
	}
	return inner;
}
let A = outer(); // outer() invoked the first time
let B = outer(); // outer() invoked the second time

A(); // Expected output: a= 20 b= 10
/*
* when A() is executed first time:
->    variable a is created anew, and set to 20
->    the value of b is from the closure value. b(first_time), so b=10.
->    variables a and b are incremented by 1.
->    A() completes execution and all its inner variables — variable a — cease to exist.
->    However, b(first_time) was preserved as the closure, so b(first_time) continues to exist.
*/

A(); // Expected output: a= 20 b= 11
/*
* when A() is executed second time:
->    variable a is created anew, and set to 20
->    the value of b is from the closure value. b(second_time), so b=11.
->    variables a and b are incremented by 1.
->    A() completes execution and all its inner variables — variable a — cease to exist.
->    However, b(second_time) was preserved as the closure, so b(second_time) continues to exist.
*/


A();    // Expected output: a= 20 b= 13
/*
* when A() is executed third time:
->    variable a is created anew, and set to 20
->    the value of b is from the closure value. b(third_time), so b=12.
->    variables a and b are incremented by 1.
->    A() completes execution and all its inner variables — variable a — cease to exist.
->    However, b(third_time) was preserved as the closure, so b(third_time) continues to exist.
*/

B(); // Expected output: a= 20 b= 10
/*
* When B() is invoked the first time:
->    variable a is created anew, and set to 20
->    the value of a=20, the value of b is from the closure value — b(first_time), so b=10
->    variables a and b are incremented by 1
->    B() completes execution, and all its inner variables — variable a — cease to exist
->    However, b(first_time) was preserved as the closure, so b(first_time) continues to exist.
*/
