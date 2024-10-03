/*

//$ Event bubbling in JavaScript can be defined as the method by which an event which got triggered within a nested set of HTML elements gets captured by the innermost element and travels up the DOM tree hierarchy to its outermost element. Hence, as the event bubbles up through the various outer elements, the event listeners attached with them also get invoked in that same order.

It is of 2 types:
-> Event bubbling
-> Event capturing or trickling

//? -> Event bubbling
Syntax:
source.addEventListener(event, callback, useCapture); 
//Note: The third argument ‘useCapture’ is a boolean value, which determines the type of event propagation. Omitting the third argument by default will assume the browser to perform event bubbling or we can explicitly specify it as false to perform event bubbling.

*/

// document.querySelector('header').addEventListener('click', function() {
//     alert('header Clicked')
// }, false)

// document.querySelector('.header-logo').addEventListener('click', function() {
//     alert('header-logo Clicked')
// })

// document.querySelector('.header-login').addEventListener('click', function() {
//     alert('Header-login Clicked')
// })

// document.querySelector('.login-btn').addEventListener('click', function() {
//     alert('login-btn Clicked')
// })

//* The process of event bubbling starts with the element that triggers it and then bubbles up/propogates to the containg element in the hierarchy

//? Now comment down the event listener on the 'login-btn' and see the behaviour. You will notice although we are not listening any event on login-btn, but as soon as you click on login btn, "alert('Header-login Clicked')" will be displayed

// Problem: On clicking on the 'login-btn' button, we don't want event bubbling to happen, that is when 'login-btn' is clicked we only want to handle the events happening on 'login-btn'. Here is how:
//$ Stopping Propagation

// document.querySelector('.login-btn').addEventListener('click', function(event) {
//     event.stopPropagation();
//     alert('login-btn Clicked')
// })

/*

//? -> Event capturing or trickling:
This process is also called event trickling and is the exact opposite of event bubbling in which an event which got triggered within a nested set of HTML elements gets captured by the outermost element and travels down the DOM tree hierarchy to its innermost element. Hence, as the event trickles down through the various inner elements, the event listeners attached with them also get invoked in that same order. 

// Note: For event capturing, the third argument useCapture in the syntax of addEventListener should be set to true.

*/
document.querySelector('header').addEventListener('click', function() {
    alert('header Clicked')
}, true)

document.querySelector('.header-logo').addEventListener('click', function() {
    alert('header-logo Clicked')
}, true)

document.querySelector('.header-login').addEventListener('click', function() {
    alert('Header-login Clicked')
}, true)

document.querySelector('.login-btn').addEventListener('click', function() {
    alert('login-btn Clicked')
}, true)


// Note: During event bubbling the order of event propagation starts from the target element and bubbles up through various outer elements via the body tag, html tag, document and ends up at the global window object.

// Note: During event capturing the order of event propagation starts from the window object and trickles down via the document, html tag, body tag, inner elements and ends up at the innermost element.



/*

While event bubbling, assume for a single click event there are multiple (say three) event listeners registered for the same element. Next, assume for one of the event listeners (say second), we have written a stopPropagation method.

Now, the problem with the above scenario is that when the click event happens, all the three listeners get invoked even after specifying the stopPropagation method.
*/

// let mainHeading = document.querySelector('#main-heading')
// mainHeading.addEventListener('click', function(event) {
//     mainHeading.textContent = "Event Listner 1"
// })
// mainHeading.addEventListener('click', function(event) {
//     event.stopPropagation()
//     mainHeading.textContent = "Event Listner 2"
// })
// mainHeading.addEventListener('click', function() {
//     mainHeading.textContent = "Event Listner 3"
// })

//* see the main heading will now become "Event Listner 3"

//$ Stopping Immediate Propagation
/*

Hence, we can use another method called stopImmediatePropagation() to immediately stop the propagation of the event and prevent the following events from invoking the same element again.

*/

let mainHeading = document.querySelector('#main-heading')
mainHeading.addEventListener('click', function(event) {
    mainHeading.textContent = "Event Listner 1"
})
mainHeading.addEventListener('click', function(event) {
    event.stopImmediatePropagation()
    mainHeading.textContent = "Event Listner 2"
})
mainHeading.addEventListener('click', function() {
    mainHeading.textContent = "Event Listner 3"
})
//* now the main heading will be "Event Listner 2"
