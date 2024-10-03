//$ Includes are used to create sub-template

const express = require('express');
const path = require('path');

const app = express();

const port = 8080;
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '../views'));

app.get('/ig/:username', (req, res) => {
	//require the file
	const instaData = require('../data.json');
	//since we want the data of only ":username" so
	let username = req.params.username;
	let data = instaData[username];
	if (data) {
		res.render('includes', { data });
	} else {
		res.render('error');
	}
});

app.listen(port, () => {
	console.log('Express listening on port: ', port);
});
