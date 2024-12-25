/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//* +++++++++++ Javascript Runtime Environment ++++++++++++++ 
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

//$ A javascript runtime is an environment which provides all the necessary components in order to use and run a javascript program

/*
A javascript runtime in case of browser is consist of four components:
1 -> JS Engine
2 -> Web API
3 -> Callback Queue and Microtask Queue
4 -> Eevnt loop
*/

/*
//* 1) Javascript Engine:
The JavaScript Engine is a program whose responsibility is to execute JavaScript code. All modern browsers come with their own version of the JavaScript Engine but the most popular one is Google’s V8 Engine. Google’s V8 engine powers Google Chrome browsers, as well as, Node.js. Node.js is a JavaScript runtime that is used to build server-side applications outside of the browser.
Heart of JavaScript runtime. It is a computer program which executes JS code. Every browser has its own JS Engine i.e Google -> V8, Safari -> JavaScriptCore, Spider Monkey -> Firefox and Microsoft Edge -> Chakra

//? The JavaScript engine consists of two components:
i)  Memory Heap
ii) Call stack 

A JavaScript engine contains heap memory and a call stack. A call stack is where our code executes. Heap memory is an unstructured memory pool containing the objects that we need in our program.

*/

//* 2) Web API:
/*
It contains everything related to DOM, timer, fetch and other APIs even console.log() which we use all the time.
//Info: It provides extra functionality to the javascript engine which are not part of javascript language itself. JavaScript get access to these APIs through global window object i.e getElementById() is provided by web API(DOM API)

*/

//* 3) Call back queue and microtask queue:
/*
These are data structures that stores all the callback function from events/promises that are ready to executed
//Note: The only difference between callback queue and microtask queue is, in the microtask queue the callback functiona which are waiting to be executed has higher priority than the callback functions which are waiting in callback queue

*/

//* 4) Event loop:
/*
Once the main thread is empty, the job of event loop is to push the callback function from microtask queue and callback queue into main thread to beigin its execution.
//? Event loop perform two tasks:
//? continuously monitor when the main thread is empty
//? push callback functions from microtask queue and callback queue into main thread for its execution


*/
