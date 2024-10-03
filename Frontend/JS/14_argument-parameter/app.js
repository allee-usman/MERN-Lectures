/*++++++++++++++++++++++++++++++++++++++
++++++++++ Argument Parameter ++++++++++ 
/*++++++++++++++++++++++++++++++++++++++*/

//$ 'arguments' is an array-like object accessible inside functions that contains the values of the arguments passed to that function. 

//* Regular function 
// function add() {
//     let sum = 0;
//     for (let index = 0; index < arguments.length; index++) {
//         sum += arguments[index];
//     }
//     return sum;
// }
// console.log(add(10,20)); //Expected output: 30
// console.log(add(10,20, 30)); //Expected output: 60
// console.log(add(10,20, 30, 40)); //Expected output: 100

//* function expression
const add = function() {
    let sum = 0;
    for (let index = 0; index < arguments.length; index++) {
        sum += arguments[index];
    }
    return sum;
}
// console.log(add(10,20)); //Expected output: 30
// console.log(add(10,20, 30)); //Expected output: 60
// console.log(add(10,20, 30, 40)); //Expected output: 100

// Note: arguments parameter does not work with arrow functions
//* arrow function
const findSum = () => {
    let sum = 0;
    for (let index = 0; index < arguments.length; index++) {
        sum += arguments[index];
    }
    return sum;
}
// console.log(findSum(10,20, 30, 40)); //Expected output: error

const showArguments = function() {
    console.log(arguments[0]); //Expected output: 12
    console.log(arguments[1]); //Expected output: 98
    console.log(arguments[2]); //Expected output: 112
}
// showArguments(12,98, 112)

//INFO: The arguments object is useful for functions called with more arguments than they are formally declared to accept, called variadic functions, such as Math.min().

//* Each argument index can also be set or reassigned:
function show() {
    console.log("Before reassigning: ", arguments[0]); //Expected output: 12
    arguments = "Ali Usman"
    console.log("After reassigning: ", arguments); //Expected output: "Ali Usman"
    
} 
// show(12)

function func(a) {
    arguments[0] = 99; // updating arguments[0] also updates a
    console.log(a); //Expected output: 99
}

// func(10); 

function func2(a) {
    a = 99; // updating a also updates arguments[0]
    console.log(arguments[0]); //Expected output 99
}

// func2(10);

