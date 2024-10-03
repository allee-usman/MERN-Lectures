/*
$ GET Request: Used to retrieve data from the server. It is primarily used when you want to access a webpage or get information from a server without modifying any data.

* Examples:
1. Accessing a webpage (e.g., visiting a form or homepage).
2. Fetching data from an API (e.g., getting a list of products).

*   Characteristics:
1.  Data is sent via the URL (query parameters or URL segments), which is visible in the browser.
2.  Does not have a request body.
3.  Often cacheable since it doesn’t modify data on the server.
*/
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	// console.log(req.query);
	res.sendFile(__dirname + '/getRequest.html');
	// console.log(req.params);
});
app.get('/process', (req, res) => {
	let { name } = req.query;
	res.send(`Hi, ${name} Welcome!`);
});

app.listen(8080, () => {
	console.log('Server is up & listening on port 8080');
});
