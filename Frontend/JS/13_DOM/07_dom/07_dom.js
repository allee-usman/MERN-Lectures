// Note: If the button is present inside the form element, it act as a submit button. Every time it is clicked, it sends a new request to the server and hence reload the page.


function showValues(e) {

    //$ To prevent reloading the page, we can use preventDefault() method
    e.preventDefault();

    //* To read the values of any input field whether it's type is 'date', 'text' or any other, we can simply use 'value' property
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    // console.log(name, password, email);

    //*reading values from type=date
    let dob = document.querySelector('#dob').value
    // console.log(dob); //Expected output: 2024-08-15

    //* reading the values from 'textarea' is same as from input type element
    let textarea = document.querySelector('#bio').value
    // console.log(textarea);

    //* reading the values from drop down list is also similar to input type["text"] element
    let dropDown = document.querySelector('#job').value
    // console.log(dropDown);

    //* reading the values from radio button
    let age = document.querySelector("input[name='user_age']:checked").value //we are assuming all the radio buttons belongs to age field have same name i.e 'user_age'
    // console.log(age);

    //* reading the values from checkboxes
    let intrestList = document.getElementsByName('user_interest') //we are assuming all the checkboxes belongs to intrests field have same name i.e 'user_interest'

    let intrests = [] //array to store multiple intrests values

    intrestList.forEach( (intrest) => { //iterate over intrestList to store each value in intrests[]
        if(intrest.checked) {
            intrests.push(intrest.value)
        }
    })

    // intrests.forEach( (intrest) => {
    //     console.log(intrest);
        
    // })

    // console.log(intrests);
    
}
