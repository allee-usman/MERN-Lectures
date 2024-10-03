/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//* ++++++++++ Execution Context  +++++++++++++ 
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

//$  JavaScript execution context is an environment that allows JavaScript code to be executed.

/*
When a function is called, a new execution context is created for that function, where the function code is executed. The execution context of the current executing function is always put on top of the calling function  execution context.

//Note: All the global variables and functions are stored in the global execution context. 

// Info: As JS is single threaded language, so there is only one global execution context. 

// Execution context has two components:
//* i) Memory component is also known as a variable environment which contains variables and functions as the key-value pairs.

//* ii) Code component is also known as a thread of execution where JavaScript code is executed one line at a time

//$ How is Execution Context created and how is the program run?
When JavaScript code runs Global Execution Context (GEC) is created. Execution of code is happening in two phases:
//? Phase 1: Creation phase:
In this phase, JS Engine has called a function but its execution has not started yet. In creation phase, JS Engine does three things:
i)   Create a variable object
ii)  Determine the scope chain
iii) Determine value of 'this' keyword

//* Lets's understand this with an example:
//? code:
var a = 20;
let b = 30;
const c = 40;
function add(num1,num2) {
  var result = num1+ num2;
  return result;
}
var sum1 = add(20,50);
var sum2 = add(100,150);

//$ Creation phase:

//* ++++++++++++++++ Step 1 +++++++++++++++++
//* +++++++++ Variable Environment ++++++++++
//* +++++++++++++++++++++++++++++++++++++++++

//? Call Stack:
JavaScript has its own Call stack. It behaves like a normal stack where we have Global Execution Context stored at a bottom of the stack whenever a JavaScript program is run.

There are two kinds of Execution Context in JavaScript:

    Global Execution Context (GEC)
    Function Execution Context (FEC)

//* Global Execution Context:
        variableObject {
            a: undefined ,
            b: <unintialized> ,
            c: <unintialized>.
            add: f(){},
            sum1: undefined, 
            sum2: undefined
        },
        scope: null, //as this is global execution context, it will not have anu outer scope
        this: window
//* add (Function Execution Context):
        variableObject {
            arguments: {
                0: num1,
                1: num2,
                length: 2
            },
            num1: 20 ,
            num2: 50,
            result: undefined
        },
        scope: []
        this: value

// Note: If we declare a variable using "var" keyword, it will be initialized as "undefined", on the other hand if we declare a variable using "let/const" keyword, it will be then initialized as <unintialized>

//TIP: Copy the example code and go to "https://ui.dev/javascript-visualizer", past the code and viuslize behind the scene of the JS Engine
*/