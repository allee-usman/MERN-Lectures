const user = {
    username: "Ali Usman",
    price: 1234,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this); //Expected: 'User' Object
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// ? if run in node environment
// console.log(this); //Expected: Empty Object({})
// ? if run browser console
// console.log(this); //Expected: Window Object

//* this keyword in regular function
function SayName(){
    let username = "Ali Usman"
    // console.log(username); //Expected: Ali Usman
    // console.log(this.username); //Expected: undefined
}
SayName()

//* this keyword's behaviour in expression
const sayMyName = function(){
    let username = "Ali Usman"
    // console.log(username); //Expected: Ali Usman
    // console.log(this.username); //Expected: undefined
}
sayMyName()

//? ++++++++++++++ Arrow functions ++++++++++++++ 

/* 
//* Syntax -> (arguments) => {}
can be stored in variables i.e  
const functionName = () => {}  
*/

const sum = (num1, num2) => {
    return num1 + num2
}
// console.log(sum(3, 4)) //Expected: 7

//* compact way to arrow function
const sum2 = (num1, num2) =>  num1 + num2
// console.log(sum2(3, 4)) //Expected: 7

//* we can also enclose the body in paranthesis in compact notation
const sum3 = (num1, num2) => ( num1 + num2 )
// console.log(sum2(3, 4)) //Expected: 7

//? +++++++++++++ use case of paranthesis +++++++++++++

//* without wrapping, if we return an object, see behaviour:
const returnObject = () => {username: "Ali Usman"}
// console.log(returnObject()) //Expected: undefined

//* with wrapping:
const returnObject1 = () => ({username: "Ali Usman"})
// console.log(returnObject1()) //Expected: { username: 'Ali Usman' }




// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

//Note: 'this' keyword behaves differnently with arrow functions compare to regular functions

//* In regular functions, 'this' always refers to the calling object
//* In arrow functions, 'this' refers to parent of the calling object i.e
const student = {
    name: 'Ali Usman',
    prop: this,
    marks: 67,
    getName: function() {
        return this.name;
    },
    getMarks: () => {
        console.log(this); //Output: parent's scope -> window object
        return this.marks
    }
} // object has global scope

// console.log(student.prop); // if run on browser's console, will out window object

// console.log(student.getName()); // Expected Output: Ali Usman
// console.log(student.getMarks()); // undefined

//! The concept illustrates above is the downside of using 'this' keyword in arrow functions

//* Now let's see benifits of using 'this' keyword in arrow functions

student.getInfo1 =  function() {
    setTimeout( () => {
        // console.log(this); // Expected Output: student object
    }, 2000);
}

student.getInfo2 =  function() {
    setTimeout( function() {
        // console.log(this); //Expected Output: windows object
    }, 2000);
}
// student.getInfo1();
// student.getInfo2();



