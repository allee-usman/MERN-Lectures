
//* Four type of selectors

//$ 1) getElementById: it will only select and return first element which matches the 'id', return type is element itself

let subHeadings = document.getElementById('sub-heading');
// console.log(subHeadings); //Expected output: <h2 id="sub-heading">

//$ 2) getElementsByClassName: it will select and return all the element matches the 'class', it will always returns 'HTMLCollection' whether if it is only one element having the that 'class' 

let listItems = document.getElementsByClassName('list-item');
// console.log(listItems); //Expected output: HTMLCollection
//NOTE: We can't run forEach loop on HTMLCollection

//? What if we want to change the color of all the elements, for that first of all we need to convert HTMLCollection into an array i.e
listItems = Array.from(listItems)
// console.log(listItems); //Expected output: array

//? Now run forEach loop to change the color of all the elements
listItems.forEach((listItem) => {
  listItem.style.color = "green"
});

//$ 3) getElementsByTagName: it will select all the element that matches the 'tagName', and returns 'HTMLCollection' 
let paragraph1 = document.getElementsByTagName('p')
// console.log(paragraph1); //Expected output: HTMLCollection

//$ 4) getElementsByName: selects and returns live 'NodeList' of all elements in the document with a specified name attribute. This method is particularly useful when working with form elements, such as radio buttons, checkboxes, or any other input fields that share the same name attribute. 
let genders = document.getElementsByName('gender')
// console.log(genders); //Expected output: NodeList[]

//Note: We can directly run forEach loop on NodeList i.e
genders.forEach( (gender) => {
  // console.log(gender.value); //Expected output: male, female, other
})

//$ 5) querySelector(): select and return the first element which matches the selector. arguments types: '.className', '#id', 'tagName'
let firstParagraph = document.querySelector('p')
firstParagraph.textContent = "This is the first paragraph"


//$ 6) querySelectorAll(): select and returns all the elements which matches the selector. arguments types: '.className', '#id', 'tagName'. Its return type is NodeList
let allParagraphs = document.querySelectorAll('p') 
// console.log(allParagraphs); // Expected Output: returns NodeList
allParagraphs.forEach( (eachParagraph) => {
  eachParagraph.style.cssText = "background-color: orange; color: red; font-size: 20px; padding: 15px 10px;"
} )