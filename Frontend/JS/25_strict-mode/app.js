//++++++++++++++++++++++++++++++++++++++++++++
//* +++++++++++ Strict Mode in JS ++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++

/*
$ Strict mode is a JavaScript feature that makes the interpreter more strict with JavaScript syntax reducing the likelihood of mistakes in your code. If you are not using a strict mode then you are in a sloppy mode.

Note: 'use strict' should be top of the code, meaning that no code should come before 'use strict' otherwise it will not enable strict mode no matter you have written 'use strict'. See Example:
*/

user = "Ali Usman"
console.log(user); //Expected output: "Ali Usman"

'use strict'; //enable strict mode

user = 'Ali Usman';
console.log(user); // no error despite adding 'use strict'
//Expected output: "Ali Usman"

//* we can use strict mode inside the function body which is often mentioned as function-level strict mode i.e:
// function strictFunction() {
// 	('use strict');
// 	user = 'Ali Usman';
// 	console.log(user); //Expected output: user is not defined
// }
// strictFunction();

//Note: we cannot use strict mode inside the function if it is using default parameters, rest, or destructuring.

//Default parameters example:
// function strictFuncWithDefault(a = 10) {

// 	'use strict'; // syntax error
//     //Expected output: Illegal 'use strict' directive in function with non-simple parameter list
// }
// strictFuncWithDefault();

//Rest parameters example:
// function strictFuncWithRest(...param) {

// 	'use strict'; // syntax error
//     //Expected output: Illegal 'use strict' directive in function with non-simple parameter list
// }
// strictFuncWithRest();

//Destructured parameters example:
// function strictFuncWithDestructured( { param } ) {

// 	'use strict'; // syntax error
//     //Expected output: Illegal 'use strict' directive in function with non-simple parameter list
// }
// strictFuncWithDestructured();

/*
* ++++++++++++++ Automatic strict mode +++++++++++++++
There are various situations when strict mode is enabled automatically and you don’t need to enable it yourself:
1) Classes: In all parts of the class, strict mode is enabled automatically.
2) Modules: When using ES6 JavaScript modules, the entire module works in strict mode. 
//? Modules are reusable functions that can encapsulate code and separate some functionalities.
3) JSON : SON is a data format often used to transmit data between servers and web applications. It always works in a strict mode and you cannot turn it off. 

? What exactly does Strict Mode do?
When struct mode is enabled, the syntax of JavaScript changes and so does the runtime. Let’s cover every change that takes place when going from sloppy mode to strict mode.

* Situation 1: Undeclared variables:
In strict mode, you cannot re-declare a variable without using var, let, or const. This feature prevents us from creating global variables. See Example:
*/

// 'use strict';
// user = "Ali Usman";
// console.log(user); //Expected output: user is not defined

/*
* Situation 2) Object property assignment:
There are 3 situations where you cannot assign property in strict mode.
    1st: Non-writable property: In Objects, properties have their attributes, one of which is writable. Writable defines whether the value can be changed.
    Therefore, in a sloppy mode, if you try to assign a new value even if the writable is false, it’s not going to throw any error. It will not rewrite the value but the error will remain “silent”. See Example:
*/

// const person = {};
// //define "name" property for "person" with writable as false
// Object.defineProperty(person, 'name', {
//     value: 'Ali Usman',
//     writable: false
// });
// person.name = 'new name';
// console.log(person.name); //Expected output: "Ali Usman"
//? Notice above although name is not changed, but the error remain silent.

//* with strict mode enabled:

// 'use strict';

// const person = {};
// //define "name" property for "person" with writable as false
// Object.defineProperty(person, 'name', {
//     value: 'Ali Usman',
//     writable: false
// });
// person.name = 'new name'; //error: Cannot assign to read only property 'name' of object '#<Object>'
// console.log(person.name);

/*
There are 3 situations where you cannot assign property in strict mode.
*   2nd: Non-extensible object: 
    In JavaScript, we can make objects non-extensible which means they won’t be able to receive any new properties. See Example:
*/

// const person = {};
// Object.preventExtensions(person);

// person.name = 'Ali Usman'; //error: Cannot assign to read only

// console.log(person); //Expeted outpt: {} (empty object)
//? Notice: In the proceeding example, although "name" property is not added to the object, we aren’t going to receive any errors.

//* with strict mode enabled:

// 'use strict';

// const person = {};
// Object.preventExtensions(person);

// person.name = 'Ali Usman'; //error: Cannot assign to read only

// console.log(person); //Error: Cannot add property name, object is not extensible

/*
There are 3 situations where you cannot assign property in strict mode.
*   3rd: Getter-only property: 
    In objects, we have a special method that starts with a getter which retrieves a property value, and also a setter method that sets/modifies a property. 
    A getter-only property means that it provides only a way to get the value. Getter-only properties automatically become read-only.
    Read-only means that the object property attribute writable is set to false - it cannot be modified.
    See Example:
*/

// const person = {
//     get name() {
//         return "Ali Usman";
//     }
// }
// console.log(person.name); //Output: "Ali Usman"

// person.name = "new name"; // try to change the name
// console.log(person.name); //Output: "Ali Usman"
// //?Notice: name isn't changed but error remains silent

//* with strict mode enabled:

// 'use strict';

// const person = {
//     get name() {
//         return "Ali Usman";
//     }
// }
// console.log(person.name); //Output: "Ali Usman"

// person.name = "new name"; // try to change the name
// console.log(person.name); //Error: Cannot set property name of #<Object> which has only a getter

/*
* situation 3) Object property deletion:
    Object properties that have an attribute configurable set to false, cannot be deleted. This attribute controls whether an attribute can be deleted. 
    See Example:
*/

// const studentInfo = {
// 	major: 'Software Engineering',
// };
// //define property with configurable as "false"
// Object.defineProperty(studentInfo, 'name', {
// 	value: 'Ali Usman',
// 	configurable: false
// });

// delete studentInfo.major;
// console.log(studentInfo); //output: { name: 'Ali Usman' }

// delete studentInfo.name;
// console.log(studentInfo); //output: { major: 'Ali Usman' }
// //Notice: "name" property is not deleted, and error remains silent

//* with strict mode enabled:

// "use strict";

// const studentInfo = {
// 	major: 'Software Engineering',
// };
// //define property with configurable as "false"
// Object.defineProperty(studentInfo, 'name', {
// 	value: 'Ali Usman',
// 	configurable: false
// });

// delete studentInfo.major;
// console.log(studentInfo); //output: { name: 'Ali Usman' }

// delete studentInfo.name;
// console.log(studentInfo); //error: TypeError: Cannot delete property 'name' of #<Object>

/*
* situation 4) Duplicate parameters:
    In sloppy mode, if we repeat the parameter names, we will not see any error again!
    Example:
 */

// function sayMyName(name, name) {
//     console.log(name); //output: "Ali Usman"
// }
// sayMyName('Ali Usman', 'Ali Usman');
// //Notice: Updon duplicate parameters name, there is no error

//* with strict mode enabled:

// "use strict";

// function sayMyName(name, name) {
// 	console.log(name); //SyntaxError: Duplicate parameter name not allowed in this context
// }
// sayMyName('Ali Usman', 'Ali Usman');

/*
* situation 5) Leaking eval:
    Eval in JavaScript is a function that can execute a code written as a string. So if I write a function in a string, I can actually execute it even if it’s a string.
    If we use it in a sloppy mode we will be able to declare a variable with var in string.
    Example:
 */

// eval("var myName = 'Ali Usman';")
// console.log(myName); //output: Ali Usman

//* with strict mode enabled:

// "use strict";

// eval("var myName = 'Ali Usman';")
// console.log(myName); //ReferenceError: myName is not defined

/*
* situation 6) Properties on primitive values:
    In JavaScript, you cannot add properties to primitive values. If you try to do so anyway, in a sloppy mode it won’t warn you about anything.
    Example:
*/

// let fullName = 'Ali';
// fullName.lastname = 'Usman';
// console.log(fullName); //output: Ali

//* with strict mode enabled:

// "use strict";

// let fullName = 'Ali';
// fullName.lastname = "Usman";
// console.log(fullName); //TypeError: Cannot create property 'lastname' on string 'Ali'

/*
* situation 7) Parameter and argument indices synchronization:
    When we don’t use a strict mode, parameters and arguments can lose synchronization and act unexpectedly.
    Example:
*/

// function printNumber(num) {
// 	num = 22;
// 	arguments[0] = 10;
// 	console.log(num); // output: 10
// 	console.log(arguments); // output: Arguments { 0: 10, callee: ...... }
// 	console.log(arguments[0]); // output: 10
// 	console.log(num); // output: 10
// }
// printNumber(5);

//Notice: arguments[0] and "num" are sync with each other

//* with strict mode enabled:

// 'use strict';

// function printNumber(num) {
//     num = 22;
// 	arguments[0] = 10;
// 	console.log(num); // output: 22
// 	console.log(arguments); // output: Arguments { 0: 10, callee: ...... }
// 	console.log(arguments[0]); // output: 10
// 	console.log(num); // output: 22
// }
// printNumber(5);

/*
* situation 08) This keyword:
    The this keyword in JavaScript refers to various scopes depending on where and how it’s used. When we use it globally, outside any functions, object, or block, this refers to the global object (window). i.e
*/
// console.log(this); // output: Window { window: Window, self: ...... }

//* with strict mode enabled:
//However, when we use a strict mode it becomes undefined which helps to avoid extra errors in later usage of this keyword.

// "use strict";
// console.log(this); // output: undefined


/*
* situation 09) Stack-walking properties:
    Functions in JavaScript have a property called caller. It returns a reference to the function that we call the target function.  i.e
*/

// function targetFunction() {
//     console.log(someFunction.caller);
// }

// function callerFunction() {
//     targetFunction();
// }
// callerFunction();

//* when strcit mode enabled, it is not possible:

// "use strict";

// function targetFunction() {
// 	console.log(someFunction.caller); //ReferenceError: someFunction is not defined
// }

// function callerFunction() {
// 	targetFunction();
// }
// callerFunction(); 