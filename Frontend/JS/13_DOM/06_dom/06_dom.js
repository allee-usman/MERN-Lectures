//INFO: JavaScript is an event driven language, that is, in JS we write a program that is purposed to respond to events


/*
Event listeing is three step process:
//* Event -> Event Listner -> Event Handler

Three ways to handle events
//* 1) Inline event handler:
//* 2) Event handler Proprties
//* 1) addEventListener() method
*/

let mainContent = document.querySelector('.main-content')
let codeSection = document.querySelector('.code-section')
let aboutSection = document.querySelector('.about-section')
let servicesSection = document.querySelector('.services-section')
let contactSection = document.querySelector('.contact-section')

//$ 1) Inline event handler: Add an attribute to HTML elements on which you want to listen an event i.e onclick/onmouseout etc. Then assign the expression you want to execute: see example

function renderSelectedSection(selectedTab) {
    mainContent.innerHTML = ''

    switch(selectedTab) {
        case 'code-tab':
            // mainContent.innerHTML = codeSection.outerHTML
            //alternateviely
            mainContent.appendChild(codeSection)
            break;
        case 'about-tab':
            // mainContent.innerHTML = aboutSection.outerHTML
            //alternateviely
            mainContent.appendChild(aboutSection)
            break;
        case 'services-tab':
            // mainContent.innerHTML = servicesSection.outerHTML
            //alternateviely 
            mainContent.appendChild(servicesSection)
            break;
        case 'contact-tab':
            mainContent.appendChild(contactSection)
            break;    
    }
}
renderSelectedSection('code-tab') //For the first time when page load we have to explicitly select call the renderSelectedSection() method to avoid showing all the content on HTML page

//$ 2) Event handler Proprties: First select the DOM event property which you want to listen and then assign any javascript expression to it

let eventListnerPropertyBtn = document.querySelector('.event-listner-property');
eventListnerPropertyBtn.onclick = function () {
    // definition
    alert("This alert box is appeared using Event handler Proprties Method")
}

//$ 3) addEventListener() method: Firstly select the element on which you want to listen an event and then use this addEventListner() property to listen
let btn = document.querySelector('.addEventListner-method')
btn.addEventListener('click', () => {
    alert("This alert box is appeared using addEventListener() method")
})

// Note: We cannot use addEventListener() method when we are working with dynamically generated DOM elements. For instance, we are generating code, services, about and contact section dynamically, here this method will not work
