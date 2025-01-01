/*
-- Using built-in (HTML) form validation:

#1: required: 
Specifies whether a form field needs to be filled in before the form can be submitted.

#2: minlength and maxlength: 
Specifies the minimum and maximum length of textual data (strings).

#3: min, max, and step: 
Specifies the minimum and maximum values of numerical input types, and the increment, or step, for values, starting from the minimum.

#4: type: 
Specifies whether the data needs to be a number, an email address, or some other specific preset type.

#5: pattern: 
Specifies a regular expression that defines a pattern the entered data needs to follow.


*/

const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(8080, () => {
	console.log('Server is up and listening on port: 8080');
});
