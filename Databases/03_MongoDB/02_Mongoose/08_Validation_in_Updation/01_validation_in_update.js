const { toLower, lowerCase, min } = require('lodash');
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/testDB';

const connectDB = async () => {
	await mongoose.connect(url);
};

connectDB()
	.then((res) => {
		console.log('Connected to MongoDB');
	})
	.catch((err) => {
		console.log('Failed to connect to MongoDB', err);
	});

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		lowerCase: true,
		trim: true,
	},
	price: {
		type: Number,
		required: true,
		min: 0,
	},
});

const Book = mongoose.model('Book', bookSchema);

const book = new Book({
	title: 'DSA in C++',
	price: 10,
});

book
	.save()
	.then((res) => {
		console.log('Record saved successfully');
		console.log(res);
	})
	.catch((err) => {
		console.log('Failed to save record');
		console.log(err);
	});

// now update the record with invalid data i.e price = -100
// Book.findOneAndUpdate({ title: 'DSA in C++' }, { price: -100 }, { new: true })
// 	.then((res) => {
// 		console.log('Record updated successfully');
// 		console.log(res.price); // -100
// 	})
// 	.catch((err) => {
// 		console.log('Failed to update record');
// 		console.log(err);
// 	});

//notice despite the fact we have set the min value to 0 in schema, the record is updated with price = -100. This is because the validation is not triggered in update operation. To trigger the validation in update operation, we need to set "runValidators" to true in options. i.e
Book.findOneAndUpdate(
	{ title: 'DSA in C++' },
	{ price: -500 },
	{ new: true, runValidators: true }
)
	.then((res) => {
		console.log('Record updated successfully');
		console.log(res.price);
	})
	.catch((err) => {
		console.log('Failed to update record');
		console.log(err);
		// Failed to update record. Error: Validation failed: price: Path `price` (-500) is less than minimum allowed value (0).
	});
