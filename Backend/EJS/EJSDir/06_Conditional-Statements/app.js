const express = require('express');
const path = require('path');

const app = express();

const port = 8080;
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '../views'));

app.get('/rolldice1', (req, res) => {
	let diceValue = Math.floor(Math.random() * 6) + 1;
	res.render('rolldice1', { diceValue });
});

app.listen(port, () => {
	console.log('Express listening on port: ', port);
});
