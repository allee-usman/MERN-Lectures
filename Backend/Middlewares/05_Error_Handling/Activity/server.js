/*
To prevent errors, we can perfrom two type of validation:
#1: Client-side form validation
#2: Server-side validation
 
Validation done in the browser is called client-side validation, while validation done on the server is called server-side validation.

? We want to make filling out web forms as easy as possible. So why do we insist on validating our forms? There are three main reasons:

-> We want to get the right data, in the right format. Our applications won't work properly if our users' data is stored in the wrong format, is incorrect, or is omitted altogether.

-> We want to protect our users' data. Forcing our users to enter secure passwords makes it easier to protect their account information.

-> We want to protect ourselves. There are many ways that malicious users can misuse unprotected forms to damage the application.

-- Client-side validation:
-> Perform using HTML attributes and javascript
-> Reduce delays by minimizing RTT(Round trip time) for correct data
-> Should not be considered an exhaustive security measure! Your apps should always perform validation, including security checks, on any form-submitted data on the server-side as well as the client-side, because client-side validation is too easy to bypass, so malicious users can still easily send bad data through to your server.

-- Some famous from-validation:
1: This field is required" (You can't leave this field blank).
2: "Please enter your phone number in the format xxx-xxxx" (A specific data format is required for it to be considered valid).
3: "Please enter a valid email address" (the data you entered is not in the right format).
4: "Your password needs to be between 8 and 30 characters long and contain one uppercase letter, one symbol, and a number." (A very specific data format is required for your data).

-- Different types of client-side validation:
There are two different types of client-side validation that you'll encounter on the web:
#1: HTML form validation:
HTML form attributes can define which form controls are required and which format the user-entered data must be in to be valid.

#2: JavaScript form validation:
JavaScript is generally included to enhance or customize HTML form validation.

Client side validation can be accomplished with little to no JavaScript. HTML validation is faster than JavaScript, but is less customizable than JavaScript validation. It is generally recommended to begin your forms using robust HTML features, then enhance the user experience with JavaScript as needed.

-- Using built-in form validation:
#1: required: 
Specifies whether a form field needs to be filled in before the form can be submitted.

#2: minlength and maxlength: 
Specifies the minimum and maximum length of textual data (strings).

#3: min, max, and step: 
Specifies the minimum and maximum values of numerical input types, and the increment, or step, for values, starting from the minimum.

#4: type: 
Specifies whether the data needs to be a number, an email address, or some other specific preset type.

#5: pattern: 
Specifies a regular expression that defines a pattern the entered data needs to follow.


*/

const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(8080, () => {
	console.log('Server is up and listening on port: 8080');
});
