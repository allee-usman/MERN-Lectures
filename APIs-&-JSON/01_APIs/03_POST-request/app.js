/*
$ POST Request:  Used to send data to the server, usually for creating or updating resources. It is commonly used for submitting forms, uploading files, or sending large amounts of data.

* Examples:
1. Submitting a sign-up form.
2. Sending login credentials.
3. Posting a new article to a blog.

*   Characteristics:
1.  Data is sent in the request body, which is not visible in the URL.
2.  Typically used to create or modify data on the server.
3.  Often not cacheable because it modifies server-side data.
*/
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); //This middleware parses URL-encoded form data. When users submit a form, their input (e.g., firstName, lastName, email) is converted into a JavaScript object accessible via req.body.

app.use(express.json()); // this middleware parses json data. When users submit a form.

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});
app.post('/process', (req, res) => {
	console.log(req.body); //output: object

	let { name } = req.body;
	res.send(`Hi, ${name} Welcome!`);
});

app.listen(8080, () => {
	console.log('Server is up & listening on port 8080');
});
