const express = require('express');

// "bodyParser" Middleware that parses the incoming request bodies and makes them available under req.body. It's necessary for handling form data sent in POST requests.
const bodyParser = require('body-parser');

// request: it's a module for making HTTP requests.
// const request = require('request');
// TODO:  (deprecated, use axios or native https instead)

const https = require('https');

const app = express(); //initialize express application

app.use(express.static('public')); //Serves static files (like CSS, JavaScript, images) from the public folder. For example, signup.html or any other files in this folder will be accessible.

app.use(bodyParser.urlencoded({ extended: true })); //This middleware parses URL-encoded form data. When users submit a form, their input (e.g., firstName, lastName, email) is converted into a JavaScript object accessible via req.body.

const port = 8080;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/signup.html'); //__dirname gives the absolute path to the directory where the script is located, ensuring the correct file is served regardless of the execution context.
});

app.post('/', (req, res) => {
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const email = req.body.email;

	const data = {
		members: [
			{
				email_address: email,
				status: 'subscribed',
				merge_fields: {
					FNAME: firstName,
					LNAME: lastName,
				},
			},
		],
	};

	const jsonData = JSON.stringify(data);

	const listID = '8e06b6ca2b';
	const url = `https://us11.api.mailchimp.com/3.0/lists/${listID}`;

	const options = {
		method: 'POST',
		auth: 'alleeu:9ff6897699f5145dd1ca7b53f84e2ab2-us11',
	};

	const request = https.request(url, options, (response) => {
		if (response.statusCode === 200) {
			res.sendFile(__dirname + '/success.html');
		} else {
			res.sendFile(__dirname + '/failure.html');
		}
	});
	request.write(jsonData);
	request.end();
});

//failure route
app.post('/failure', (req, res) => {
	res.redirect('/');
});

// listen the request
app.listen(process.env.PORT || port, (request, response) => {
	console.log('Server is running on port ' + port);
});
