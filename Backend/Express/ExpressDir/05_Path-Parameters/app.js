/*
To handle millions of path/route i.e instagram accounts of million users, we can send pathname as parameter i.e:

*/

const express = require('express');
const app = express();

const port = 8080;

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});

app.get('/:username', (req, res) => {
	//information of parameters is saved in req.params which is an object
	// console.log(req.params);
	console.log('Request with parameters received.');
	res.send(`Hello, ${req.params.username}`);
});

// multiple parameters can also be passed with request
// app.get('/:username/:id/:name', (req, res) => {
// 	console.log('Request with multiple parameters received.');

// 	//store important parameters in variables
// 	let { username, name } = req.params;

// 	res.send(`Hello, ${name}`);
// });
