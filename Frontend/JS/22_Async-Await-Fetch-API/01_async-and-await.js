//* * * * * * * * * * * * * * * * * * * * *
//* * * * * * * * async keyword * * * * * *
//* * * * * * * * * * * * * * * * * * * * *

//$ 'async' keyword is used before a function (including arrow functions, functions expression) to make it asynchronous

async function greet() {
	//*without any return statement, still it will return a promise with state as fullfilled but result as undefined
}
// console.log(greet()); // Output: Promise { 'undefined' }, state: fullfilled

async function greet1() {
	return 'Hello, Ali!'; // aync function always returns a promise
}
// console.log(greet1()); // Output: Promise { 'Hello, Ali!' }, state: fullfilled

async function greet2() {
	ab.ab(); //since this line will throw an error, hence rejected promise with error message will be returned
}
// console.log(greet2()); // Output: Promise { 'ReferenceError: ab is not defined' }, state: rejected

// greet1()
// 	.then((result) => {
// 		console.log('Promise was resolved with message ' + result);
// 	})
// 	.catch((err) => {
// 		console.log('Promise was rejected with message ' + result);
// 	});

//+++++++++++++++++++++++++++++++++++++++++++
//* ++++++++++++ await keyword ++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++

//* this pauses the execution of its surrounding async functions until the promise is settled (resolved or rejected)

function getNumber() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let number = Math.floor(Math.random() * 10) + 1;
			console.log(number);
			resolve(number);
		}, 1000);
	});
}

// async function demo() {
// 	getNumber();
// 	getNumber();
// 	getNumber();
// }
// demo(); // when you run this line of code, you will notice all three numbers will get printed at once.

//* But we want to print the next number after delay of 1 second. Here is how:
// async function demo() {
// 	await getNumber();
// 	await getNumber();
// 	await getNumber();
// 	await getNumber();
// 	getNumber();
// }
// demo(); //? now you will notice each number will get printed after delay of 1 second.

//Note: Please note that 'await' keyword can only be used in "async" functions.

//* Now we will implement that colorChnage() functionality using async functions and await keyword.

let h1 = document.querySelector('h1');

// function nextColorChnage(color, delay) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout( () => {
// 			h1.style.color = color;
// 			resolve(`${color} has been applied successfully!!`);
// 		}, delay)
// 	})
// }

// async function colorChnage() {
// 	await nextColorChnage('red', 1000);
// 	await nextColorChnage('pink', 1000);
// 	await nextColorChnage('yellow', 1000);
// 	await nextColorChnage('green', 1000);
// 	nextColorChnage('orange', 1000);
// }
// colorChnage();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//* +++++++ Handling Promise Rejections with await ++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function nextColorChnage(color, delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let number = Math.floor(Math.random() * 5) + 1;
			if (number > 3) {
				reject('Failed to change color!');
			}

			h1.style.color = color;
			console.log(`${color} color has been applied successfully!!`);
			resolve(`${color} color has been applied successfully!!`);
		}, delay);
	});
}

async function colorChnage() {
	try {
		await nextColorChnage('red', 1000);
		await nextColorChnage('pink', 1000);
		await nextColorChnage('yellow', 1000);
		await nextColorChnage('green', 1000);
		await nextColorChnage('orange', 1000);
	} catch (err) {
		console.log('Error: ', err);
	}

	let a = 5; //? in case of promise rejection, from here to onwards code will not be executed. So to tackle this, we will write the above code in try & catch block
	console.log(a);
}
colorChnage();
