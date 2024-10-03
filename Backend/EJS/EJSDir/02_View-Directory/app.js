const express = require('express');
const path = require('path'); //used to set path for views directory

const app = express();

const port = 8080;
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '../views')); //allows you to customize that location of "views" directory if needed.

app.get('/', (req, res) => {
	res.render('home'); // no need to add extension ".ejs"
});

app.listen(port, () => {
	console.log('Express listening on port: ', port);
});
