const express = require('express');
const mongoose = require('mongoose');
const Joi = require('joi');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.render('index1');
});

app.listen(8080, () => {
	console.log('Server is up and listening on port: 8080');
});
