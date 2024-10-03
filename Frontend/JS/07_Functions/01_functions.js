//* method 1:
function sayHello() {
	console.log('Hello');
}
// sayHello() //function call

//* method 2: Function Expression
const sayHelloWithName = function (name) {
	//? this method usually reffers to expression not function
	console.log(`Hello, ${name}`);
};
// sayHelloWithName("Ali Usman")

//! +++++++++++++++++++++ Important +++++++++++++++++++++
//$ if you call the expression before the declaration, it will throw an exception

// greetWithName("Ali Usman") //Expected: Cannot access 'greetWithName' before initialization aka hoisting error

const greetWithName = function (name) {
	console.log(`Hello, ${name}`);
};

//* ++++++++++++++++ High Order Functions +++++++++++++++++++++
// A function which takes one or more function as arguments or return a function as an output is called high order functions.

function multipleGreets(sayHello) {
	//takes function as arguments
	for (let i = 0; i < 5; i++) {
		sayHello();
	}
}

let hello = function () {
	console.log('Hello');
};
// multipleGreets(hello); //Expected output: hello

function oddEvenTestFactory(request) {
	if (request === 'odd') {
		return function (number) {
			if (number % 2 !== 0) {
				return true;
			}
            return false;
		};
	} else if (request === 'even') {
        return function (number) {
            if (number % 2 === 0) {
                return true;
            }
            return false;
        };
    } else {
        console.log("Invalid Request");
    }
}

let func = oddEvenTestFactory('odd') //func will now behave as oddNumberTest function
// console.log(func(5)); //true


//* ++++++++++++++++ Functions with return statement +++++++++++++++++++++
const findSum = function (n1, n2) {
	return n1 + n2;
};

// console.log(findSum(4, 9)); //Expected: 13

//* ++++++++++++++++ Functions with default values +++++++++++++++++++++
function greet(name = 'Ali Usman') {
	console.log(`Hello, ${name}`);
}
// console.log(greet("Osama")); //Expected: Hello, Osama
// console.log(greet("")); //Expected: Hello,
// console.log(greet(null)); //Expected: Hello, null
// console.log(greet()); //Expected: Hello, Ali Usman

//* +++++++++++++++++++ Join Operator +++++++++++++++++
function calculateCartPrice(val1, val2, ...num1) {
	console.log(val1); //Expected: 12
	console.log(val2); //Expected: 10
	console.log(num1); //Expected: [ 23, 25, 28, 30 ]
}
// calculateCartPrice(12, 10, 23, 25, 28, 30);

//* +++++++++++++ Working with Objects & Arrays through Functions +++++++++++++
const user = {
	username: 'Ali Usman',
	prices: 199,
};

function handleObject(anyobject) {
	console.log(
		`Username is ${anyobject.username} and price is ${anyobject.price}`
	);
}

// handleObject(user)

// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
	return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));
