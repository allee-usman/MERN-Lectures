//$ Creating DOM Elements Dynamically


//? There are multiple ways to add elements to an existing DOM element

//* 1st method ->  The appendChild() method adds a node as the last child of a specified parent node.
let myDiv1 = document.querySelector('.myDiv1');
let newElement = document.createElement('p');
newElement.textContent = 'This is a paragraph.';
// myDiv1.appendChild(newElement);
// Note:  If the element being appended is already in the DOM, it will be removed from its current position and placed inside the specified parent node. See below example:
let child = document.getElementById('child');
let myDiv2 = document.querySelector('.myDiv2');
myDiv2.appendChild(child); //Expected output: now the 'child' will be removed from the 'myDiv1' and appended to the 'myDiv2' element

//* 2nd method ->   The append() method allows you to append multiple nodes or text strings as the last child of a parent element.
myDiv1.append('Some text before the element. ', newElement, ' Some text after the element.');
// Note:  Unlike appendChild(), append() can handle multiple nodes or strings and does not return the appended node.

//* 3rd method ->  The insertBefore() method inserts a node before a reference node as a child of a specified parent node.
newElement.textContent = 'This is a paragraph inserted using insertBefore().';
let referenceNode = document.getElementById('div2-para');
myDiv2.insertBefore(newElement, referenceNode);
// Note: The new element will be placed before the referenceNode. If the reference node is null, it works like appendChild(). See Example:
let newElement1 = document.createElement('p');
newElement1.textContent = 'This is a paragraph inserted using insertBefore() with referenceNode as Null';
myDiv2.insertBefore(newElement1, null); //Expected output: newElement1 will be inserted at last

//* 4th method -> The prepend() method inserts nodes or text strings as the first child of a parent element.
let newElement2 = document.createElement('p');
newElement2.textContent = 'This is a paragraph added by using prepend().';
myDiv1.prepend(newElement2);
// Note: This method is handy when you need to add content before any existing children. 

//* 5th method -> insertAdjacentElement() method inserts a new element at a specified position relative to an existing element.
/*
//? Syntax: element.insertAdjacentElement(position, element); 
where
position is a string that specifies the position where the new element will be inserted. The possible values are:
-> 'beforebegin': Before the element itself.
-> 'afterbegin': Just inside the element, before its first child.
-> 'beforeend': Just inside the element, after its last child.
-> 'afterend': After the element itself.
*/
const newChild = document.createElement('p');
newChild.textContent = 'This paragraph element is inserted by using insertAdjacentElement()';
myDiv1.insertAdjacentElement('beforebegin', newChild);
// Note: insertAdjacentElement() is not as widely supported as insertAdjacentHTML() in older browsers. Make sure to check the browser compatibility before using it in your project.



const carBrands = document.querySelector('.car-brands');
function addItem() {
    const newBrandName = prompt("Enter gname of new brand")
    const newElement = document.createElement('li')
    // newElement.textContent = newBrandName
    let textNode = document.createTextNode(newBrandName)
    newElement.appendChild(textNode)

    carBrands.appendChild(newElement)
}

function removeItem() {
    const brandName = prompt("Enter name you want to remove: ")
    let brands = Array.from(carBrands.children)
    brands.forEach( (carBrand) => {
        if(carBrand.textContent === brandName) {
           carBrands.removeChild(carBrand)
        }
    })
}
// IDEA: Try to implement addItem() functionality by avoiding duplicates