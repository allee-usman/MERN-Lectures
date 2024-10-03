//$ Navigating from paretn to child elements 
const carBrands = document.querySelector('.car-brands');

//* access all the children of an element
// console.log(carBrands.children); //Expected output: It will return HTMLCollection of children

//* access first children element
// console.log(carBrands.firstElementChild); //Expected output: <li class="list-item">Suzuki</li>

//* access last children element
// console.log(carBrands.lastElementChild); //Expected output: <li class="list-item">Honda</li>

//? Navigating from child to parent elements 
// console.log(document.querySelector(".list-item").parentElement); //Expected output: <ul class="car-brands">
// console.log(document.querySelector(".list-item").parentNode); //Expected output: <ul class="car-brands">

// Note: 'parentNode' can return any parent node, while 'parentElement' only returns the parent if it's an element (otherwise, it returns null). e.g:
// console.log(carBrands.parentElement.parentElement.parentElement); //Expected output: null
// console.log(carBrands.parentNode.parentNode.parentNode); //Expected output: HTMLDocument http://127.0.0.1:5500/JS/13_DOM/03_dom/03_dom.html


//? Navigating from one sibling to next/previous element 
// console.log(document.querySelector(".list-item2").nextElementSibling.textContent); //Expected output: Honda
// console.log(document.querySelector(".list-item2").previousElementSibling.textContent); //Expected output: Suzki


//* childNodes Property
// console.log(carBrands.childNodes); //Expected output: NodeList(7)
//INFO: Although we have 3 child nodes, but we are getting 7 because '\n' to move next line is also considered as a node called textNode
