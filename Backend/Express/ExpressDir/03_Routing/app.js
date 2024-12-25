/*
* Routing:
It is the process of selecting a path for traffic in a network/or between/across multiple networks.
To generate different responses for different routes/paths, app.get() is used.
See example:
*/

const express = require('express');
const app = express();

const port = 8080;

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});

//Syntax: app.get(path, callback)
app.get('/', (req, res) => {
	console.log('Request Recieved');
	res.send('You connected to home path.');
});
app.get('/contacts', (req, res) => {
	console.log('Request Recieved');
	res.send('You connected to contacts path.');
});
app.get('/about', (req, res) => {
	console.log('Request Recieved');
	res.send('You connected to about path.');
});

//* app.post(): used to listen POST requests
app.post('/', (req, res) => {
	res.send('You sent a POST request!!');
});

//Note: The response for one request/path must be one. Multiple responses for one request is not possible. Hence app.use() && app.get() cannot be used together.

//* handle invalid path:
app.use('*', (req, res) => {
	res.send('Invalid path');
});

//NOTE: If "*" path added before a valid path handler, then that path handler will be ignored.
