/*
Before we learn inserting data, let us understand this:
-- The model we created in the previous file namely (Blog) is actually a class. And class have object as instance. So we have to make an object(instance) of the class "User" which will act as a document for DB.

* Model represents "collection"
* Object of a Model represents "a document"

-- Example:
const blog1 = new Blog({data}); // blog1: document && Blog: Collection
*/

//-- step 1: make connection
const mongoose = require('mongoose');

async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/testDB');

	// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main()
	.then((res) => {
		console.log('Connection established!');
	})
	.catch((err) => {
		console.log(err);
	});

//-- step 2: define schema
const blogSchema = new mongoose.Schema({
	title: String, // String is shorthand for {type: String}
	author: String,
	body: String,
	comments: [{ body: String, date: Date }],
	date: { type: Date, default: Date.now },
	hidden: Boolean,
	meta: {
		votes: Number,
		favs: Number,
	},
});

//-- step 3: Create it
const Blog = mongoose.model('Blog', blogSchema);

//-- step 3: insert data

//# Inserting One:

const blog1 = new Blog({
	title: 'Learning JavaScript for Web Development',
	author: 'Ali Usman',
	body: 'JavaScript is essential for building interactive web pages. This blog dives into basic concepts and how to apply them in projects.',
	comments: [
		{
			body: 'Great post! Helped me understand JS better.',
			date: new Date('2024-09-10'),
		},
		{
			body: 'What other resources do you recommend for learning JavaScript?',
			date: new Date('2024-09-11'),
		},
	],
	date: new Date('2024-09-01'),
	hidden: false,
	meta: {
		votes: 10,
		favs: 5,
	},
});

//So far blog1 is not saved in our database, it is saved in our memory. To check go to node REPL and run the following command: .load fileName.js, then clear the shell using Ctrl/Cmd+k and then run "blog1". You will an object having all the data you specified will be printed.

// Save blog1 to the database
// blog1.save(); // it is also an async function, so handle it correctly
blog1
	.save()
	.then((result) => {
		console.log('Record saved successfully!!');
	})
	.catch((err) => {
		console.log(err.message);
	});

//close the connection
await mongoose.connection.close();
