const express = require('express');
const path = require('path');

const app = express();

const port = 8080;
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '../views'));

app.get('/ig/:uername', (req, res) => {
	let followers = ['ali', 'usman', 'tauqir', 'faseh'];
	let username = req.params.uername;
	res.render('instagram', { username, followers });
});

app.listen(port, () => {
	console.log('Express listening on port: ', port);
});
