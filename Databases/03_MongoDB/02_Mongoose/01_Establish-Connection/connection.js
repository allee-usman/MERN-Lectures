/*
=> Mongoose is a library/pacakage/module which creates connection between MongoDB and Node.js JavaScript Runtime Environment. It is an ODM (object data modeling) library.

->  Mongoose can do every task that a Mongo Shell do.
->  It helps us to design schemas for DB.
->  Help us to run complex queries more efficiently.
->  We can also use Mongoose with plain JavaScript.
*/

// require it
const mongoose = require('mongoose');

// connect with MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/testDB');

//Note: mongoose.connect() is an asynchronous function, hence it returns a promise

// handle promise
// valid method to establish connection
async function connectDB() {
	await mongoose.connect('mongodb://127.0.0.1:27017/testDB');

	// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// as async function returns a promise, so we can utilize .then() and .catch() methods
connectDB()
	.then((res) => {
		console.log('Connection established!');
	})
	.catch((err) => {
		console.log(err);
	});
