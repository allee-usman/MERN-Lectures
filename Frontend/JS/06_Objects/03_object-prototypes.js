/*
++++++++++++++++++++++++++++++++
$ +++++ Object Prototypes ++++++
++++++++++++++++++++++++++++++++

Objects prototypes is a mechanism by which JavaScript objects inherit features from one another. It is like a "template object" that all objects inherit features (methods && properties) from without having their own copy.
*/
//Problem:
let arr1 = [1, 2, 3, 4];
arr1.sayHello = function () {
	console.log('Hello, I am an array!');
};
let arr2 = [1, 2];
arr2.sayHello = function () {
	console.log('Hello, I am an array!');
};
let arr3 = [1, 3, 4];
arr3.sayHello = function () {
	console.log('Hello, I am an array!');
};
//we have to define same function for multiple arrays, it violates the DRY (Don't repeat yourself) principle.

//* __proto__: is a property that refers to the prototype of an object. It is used to access the internal prototype ([[Prototype]]) of an object, which links to the object's prototype and allows for inheritance of properties and methods.

// console.log(arr1.__proto__); //output: all the methods belongs to array
arr1.__proto__.push = (number) => console.log(`Pushing number: ${number}`);

// arr1.push(2); //output: Pushing number: 2
// console.log(arr1); //output: [1,2,3,4,function]

//* prototype: this property returns the actual property of the specified data type
// console.log(String.prototype);
// console.log(Array.prototype);

console.log(arr1.sayHello == arr2.sayHello); //output: false
//this shows that sayHello() for arr1 and arr2 are differnet and have different memory occupied

console.log('abc'.toLowerCase == 'xyz'.toLowerCase); //output: true (depicts both string refrence to same "toLowerCase" methods)
