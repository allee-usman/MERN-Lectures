//* +++++++++++++ Synchronous Programming +++++++++++++++
// JavaScript is synchronous by default: every line of code is executed one after the other, and each task must wait for the previous one to be completed before moving to the next. i.e
console.log('One');
console.log('Two');
console.log('Three');
//Expected Output: One, Two, Three
//Note: The point to note here is "Two" cannot be printed before "One" and so on


//* +++++++++++++ Asynchronous Programming +++++++++++++++
// Asynchronous JavaScript programming is one of the key components of the language because it controls how we carry out tasks that require a lot of time. Basically, asynchronous programming is programming that allows multiple events to occur simultaneously. This means that one operation may take place while another is still being processed.
console.log('One');
setTimeout(() => console.log('Two'), 100);
console.log('Three');
//Expected Output: 'One', 'Three', 'Two'

//? How "Three" is printed before "Two"?
//To answer this, let us understand EVENT LOOP

//* +++++++++++++++++++ EVENT LOOP +++++++++++++++++++
//The event loop continuously checks the event queue for tasks. If the main execution context is empty and the event queue has tasks waiting to be executed, the event loop will dequeue the tasks one by one and execute their callback functions. If you’re unfamiliar with these terms, don’t worry; I’ll explain them shortly.

//? Asynchronous operations are scheduled to be executed later and are placed in the event queue once they are completed. Each operation in the queue contains a callback function to be executed when the operation is finished.