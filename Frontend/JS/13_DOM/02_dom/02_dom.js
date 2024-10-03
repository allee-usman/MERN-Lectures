//* manipulating the html element & styling

//? manipulate html element

//$ 1) Dealing with content inside the element i.e innerHTML, textContent & innerText properties
let paragraph = document.querySelector('#details')
//
//INFO: 'innerHTML' property return all the content inside an element including HTML tag etc
// console.log(paragraph.innerHTML) //Expected Output: Lorem ipsum dolor sit amet. <span style="display: none;">Hidden text(hidden using css)</span>

//INFO: 'textContent' property return all the actual content inside an element whether some of the text may be hidden using CSS. It also consider spaces and new line character
// console.log(paragraph.textContent) 
/* 
//Expected Output: Lorem ipsum dolor sit amet.
    new line startd
    another new line                text after spacing Hidden text(hidden using css)
*/

//INFO: 'innerText' property return the actual content visible on the web page. it does not include new line character and spaces
// console.log(paragraph.innerText) //Expected Output: Lorem ipsum dolor sit amet. new line startd another new line text after spacing


//$ 2) Changing the styles

//INFO: style can be changed by 2 methods: individually & collectively

let mainHeading = document.querySelector("h1"); //NOTE: it will return first h1 element
mainHeading.textContent = "This is main heading updated in JS"

//? individual styling
mainHeading.style.color = "orange";
mainHeading.style.fontWeight = "bold"; 
mainHeading.style.fontSize = "40px"; 

//? collective styling:
// mainHeading.style = "font-weight: bold; background-color: green; font-size:32px; padding: 20px";
//Recommended: 
mainHeading.style.cssText = "font-weight: bold; background-color: green; font-size:32px; padding: 20px"; 

//TIP: Write all new CSS properties collectively i.e
// mainHeading.style = "color: black; font-weight: bold; background-color: green; font-size:32px; padding: 20px";

//* Getting and Setting attributes
let myLink = document.querySelector(".my-link")

//? getting attributes
let srcAttr = myLink.getAttribute("href")
// console.log(srcAttr); // Expected output: 'www.google.com'

//? setting attributes
myLink.setAttribute("href", "https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute") //now the link will redirect to mdn website

myLink.setAttribute("class", "orange-bg")
// console.log(myLink.getAttribute("class")); // Expected output: 'orange-bg'

//NOTE: The above line shows if you update "class" attribute, it will overwrite the previous value. To avoid this:
myLink.setAttribute("class", "my-link orange-bg")
// Tip: To avoid re-assigning the old class again, you can use "classList.add()" property

//* addClassList property
// Recommended: 
myLink.classList.add("bdr") 
console.log(myLink.getAttribute("class")); // Expected output: 'my-link orange-bg bdr

//? remove a class from the classList
// myLink.classList.remove("bdr") 

