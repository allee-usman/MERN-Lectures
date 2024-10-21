/*
$ Model in mongoose is a class with which we construct a document.

-- Syntax:
const modelName = mongoose.Model("collection_name", schema)
Recommended: By convention "modelName" and "collectionName" prefer to keep same and keep it singular.

-- Example: 
const Blog = mongoose.model("Blog", blogSchema);

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

//Info: The "collection_name (Blog)" will be automatically converted into "blogs" in DB.
