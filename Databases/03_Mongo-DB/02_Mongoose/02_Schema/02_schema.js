/*

$ Schema Defines the overall structure/shape of the the document within that collection. which may be setting constraints, datatypes, etc.

* Making a document is three step process:
    1. Establish Connection
    2. Define Schema (using "mongoose.schema()")
    3. Construct document using "model" class.

Info: "mongoose.schema()" is used to define the schema in js.
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

//Note: Every data type is case sensitive and start with 'Uppercase' Letter.

/*
=> The permitted SchemaTypes are:
    String
    Number
    Date
    Buffer
    Boolean
    Mixed
    ObjectId
    Array
    Decimal128
    Map
    UUID
*/
