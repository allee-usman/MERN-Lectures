/*
There are multiple types of error in mongoose i.e:
-> Casting error (CastError)
-> Validation error(ValidationError) etc
To handle mongo specific error, we can do following:
*/

const express = require('express');
const mongoose = require('mongoose');
const customError = require('./ExpressError');
const { Schema } = mongoose;

const app = express();

app.use(express.json());

mongoose
	.connect('mongodb://localhost:27017/testDB')
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.error('Could not connect to MongoDB', err));

const productSchema = new Schema({
	name: {
		type: String,
		minlength: [3, 'Name should be at least 3 characters long'],
		maxlength: [50, 'Maximum character limit for name already reached'],
		required: true,
	},
	price: {
		type: Number,
		required: true,
		min: 0,
	},
});

const Product = mongoose.model('Product', productSchema);

app.post(
	'/product/new',
	asyncWrap(async (req, res, next) => {
		const { name, price } = req.body;
		const laptop = new Product({ name, price });
		await laptop.save();
		res.send('Record saved successfully!');
	})
);

function asyncWrap(fn) {
	return function (req, res, next) {
		fn(req, res, next).catch(next);
	};
}
function handleValidationErr(err) {
	console.log('This error was occured due to validation failure.');
	console.log(err);
}

app.use((err, req, res, next) => {
	console.log(err.name);
	if (err.name === 'ValidationError') {
		handleValidationErr(err);
	}
	next(err);
});
app.use((err, req, res, next) => {
	let { status = 500, message = 'Unknown error' } = err;
	res.status(status).send(message);
});

app.listen(8080, () => {
	console.log('Server is up and listening on port: 8080');
});
