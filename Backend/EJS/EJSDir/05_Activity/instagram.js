const express = require('express');
const path = require('path'); //used to set path for views directory

const app = express();

const port = 8080;
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));

app.get('/ig/:username', (req, res) => {
	let username = req.params.username;

	res.render('instagram', { username });
});

app.listen(port, () => {
	console.log('Express listening on port: ', port);
});
