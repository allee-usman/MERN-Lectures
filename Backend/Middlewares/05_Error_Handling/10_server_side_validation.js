/*
$ Server-side validation is the process of verifying and ensuring the correctness, completeness, and security of data on the server after it has been sent from the client (e.g., a web browser or mobile app). 

-> Done in the backend code before processing or storing the data in a database.

? Why is Server-Side Validation Important?
-> Client-side validation (e.g., JavaScript on the browser) can be bypassed by malicious users using tools like developer tools (Postman/Hoppscoth) or intercepting requests.

-> : You cannot trust the data coming from the client without validating it. For example:
    A user might try to inject harmful code into form fields.
    Data could be manipulated to exploit vulnerabilities in your system.

-> Some browsers or devices might not support or enforce client-side validation, so the server acts as a final line of defense.

-- Popular Libraries for Server-Side Validation:
#1: Joi:
- A powerful schema description language and data validator for JavaScript.
- Flexible and feature-rich, widely used in Express.js applications.

#2: express-validator:
-  Integrated directly into Express, making it a popular choice for middleware-based validation.

-- Best Practices for Server-Side Validation
-> Always validate user input, even if client-side validation is used.

-> Use well-established libraries or frameworks for validation (e.g., Joi, express-validator).

-> Combine validation with data sanitization to remove malicious input.

-> Avoid trusting client data, especially when interacting with databases or sensitive systems.


*/
