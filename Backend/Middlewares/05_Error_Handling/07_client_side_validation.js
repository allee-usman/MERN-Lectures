/*

-- Client-side validation:
-> Perform using HTML attributes and javascript
-> Reduce delays by minimizing RTT(Round trip time) for correct data
-> Should not be considered an exhaustive security measure! Your apps should always perform validation, including security checks, on any form-submitted data on the server-side as well as the client-side, because client-side validation is too easy to bypass, so malicious users can still easily send bad data through to your server.


-- Types of client-side validation:
There are two different types of client-side validation that you'll encounter on the web:
#1: HTML form validation:
HTML form attributes can define which form controls are required and which format the user-entered data must be in to be valid.

#2: JavaScript form validation:
JavaScript is generally included to enhance or customize HTML form validation.

Client side validation can be accomplished with little to no JavaScript. HTML validation is faster than JavaScript, but is less customizable than JavaScript validation. It is generally recommended to begin your forms using robust HTML features, then enhance the user experience with JavaScript as needed.

-- Some famous from-validation:
1: This field is required" (You can't leave this field blank).

2: "Please enter your phone number in the format xxx-xxxx" (A specific data format is required for it to be considered valid).

3: "Please enter a valid email address" (the data you entered is not in the right format).

4: "Your password needs to be between 8 and 30 characters long and contain one uppercase letter, one symbol, and a number." (A very specific data format is required for your data).

*/
