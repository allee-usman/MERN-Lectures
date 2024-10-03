/*
$ Nodemon is a special package that provides the facility to automatically restart the server when changes.
*/

const express = require('express');
const app = express();

const port = 8080;

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});

app.get('/', (req, res) => {
	console.log('Request Recieved');
	res.send('Hello, I am root path!');
});
