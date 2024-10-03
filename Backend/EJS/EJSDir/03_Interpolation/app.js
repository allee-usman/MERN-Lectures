//$ Interpolation refers to embedding expression into markup text just like template litteral

const express = require('express');
const path = require('path'); //used to set path for views directory

const app = express();

const port = 8080;
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '../views'));

app.get('/', (req, res) => {
	res.render('home');
});

app.listen(port, () => {
	console.log('Express listening on port: ', port);
});
