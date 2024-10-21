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

const Blog = mongoose.model('Blog', blogSchema);

/*
=> There are multiple ways to find data:

#1: Model_name.find(filter, projection, options):
where
-- filter: 
«Object|ObjectId» ,represents conditions to filter out result. If no conditions to be applied then passed "Empty object {}".
-- projection: 
optional, «Object|String|Array[String]» , to include/exclude fields(columns)
-- options: 
optional, «Object|>> to set some rules i.e readPrefrence, sort etc

-- Return type:
It returns the array of query object which can be thenable(.then() can be used)

=> Queries with ".then()"/without ".exec()":
Without .exec(), the query can still be executed using .then() or by passing a callback function, but .exec() gives more control and makes the code cleaner when using promises.
*/

//* retrieve everything
// Blog.find({})
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

//* filter out result
// Blog.find({ author: 'Ali Usman' })
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

//* Method 1 - retrieve sepcific fields
// Blog.find({ author: 'Ali Usman' }, { _id: 0, title: 1, author: 1, body: 1 })
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

//* Method 2 - retrieve sepcific fields
// Blog.find({ author: 'Jane Smith' }, 'author title body')
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

/*

INFO: The only difference b/w these 2 methods of returning specific fields, is Method 2 must include "_id" field in the result whether you specify it or not.

#2: Model_name.findByID(id, projection, options):
where 
-- id:
«Any», value of "_id"
-- projection: 
optional, «Object|String|Array[String]» , to include/exclude fields(columns)
-- options: 
optional, «Object|>> to set some rules i.e readPrefrence, sort etc

-- Return type:
It returns the query object which can be thenable(.then() can be used)
*/

let id = '6709695f50f46c050f2ebe6c';

// Blog.findById(id, 'author title body')
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

/*

Recommended: Use 'findById()' if you want to retrieve exactly one document/row. Secondly "findById()" returns "object" while "find()" returns array of objects if it is one object inside the array.


=> Queries with ".exec()":
Mongoose queries like Blog.findById(id) or Blog.find({}) return a "query object", not a promise by default. So, if you want to handle the result using async/await, you need to call ".exec()" on the query to execute it and return a promise. If you don't use .exec(), Mongoose will execute the query when a callback is provided, or you can chain ".then()" if a promise is expected.

? What .exec() Does?
    -- Executes the query: 
    Queries in Mongoose are "lazy"—meaning they do not execute  until .exec() is called (or until a callback or .then() is attached).
    -- Returns a promise: 
    .exec() returns a promise that resolves with the result of the query. This is particularly useful when you want to use async/await syntax.

-- See example code below:

*/

// async function fetchData() {
// 	try {
// 		const result = await Blog.find(
// 			{ author: 'Ali Usman' },
// 			'author title body'
// 		).exec();
// 		console.log(result);
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

// fetchData();

/*
? Why Use .exec()?
    -- Consistency with Promises:
    .exec() ensures you are explicitly working with promises, which is useful when using async/await or .then().
    --Flexibility: 
    You can chain more complex query logic, like filtering, sorting, or field selection, and ensure the query runs only when ".exec()" is called.

TIP: .exec() is not required if you directly use .then() or callbacks, but it’s a good practice when working with async/await to ensure you're handling promises correctly.


#3: Model_name.findOne(filter, projection, options):
It limits the result to one document
where 
-- filter:
«Object», ,represents conditions to filter out result. If no conditions to be applied then passed "Empty object {}".
-- projection: 
optional, «Object|String|Array[String]» , to include/exclude fields(columns)
-- options: 
optional, «Object|>> to set some rules i.e readPrefrence, sort etc

-- Return type:
It returns the query object which can be thenable(.then() can be used)
*/
async function fetchData() {
	try {
		const result = await Blog.findOne(
			{ author: 'Ali Usman' },
			'author title body'
		).exec();
		console.log(result);

		//close the connection
		await mongoose.connection.close();
	} catch (err) {
		console.log(err);
	}
}

fetchData();
