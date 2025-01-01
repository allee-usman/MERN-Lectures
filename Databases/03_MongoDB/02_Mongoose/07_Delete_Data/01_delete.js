/*

=> Delete methods in Mongoose:
#1: Model.deleteOne(filter, options)
Deletes the first matching document in the collection
Return Value: Returns an object containing information about the operation, such as the number of documents matched and modified.
#2: Model.deleteMany(filter, options)
Deletes the first matching document in the collection
#3: Model.findOneAndDelete(filter, options)
Finds a single document and deletes it.
#4: Model.findByIdAndDelete(filter, deleteData, options)
Deletes the document by ID

*/

const mongoose = require('mongoose');

async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/testDB');
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
#1: Model.deleteOne(filter, delete, options)
Deletes only first matching document
where
-- filter:
is an «Object» to filter out result. In case of no filter, pass empty object "{}"
-- options:
optional parameter, to specify options
*/

// const filter = { author: 'Ali Usman' };

// Blog.deleteOne(filter)
// 	.then((result) => {
// 		console.log('Delete Result:', result);
// 	})
// 	.catch((err) => {
// 		console.error('Error:', err);
// 	});

/*
#2: Model.deleteMany(filter, delete, options)
where
-- filter:
is an «Object» to filter out result. In case of no filter, pass empty object "{}"
-- options:
optional parameter, to specify options

*/

/*
#3: Model.findOneAndDelete(filter, deleteData, options)
where
-- filter:
is an «Object» to filter out result. In case of no filter, pass empty object "{}"
-- options:
optional parameter, to specify options

*/
const filter = { title: 'Advanced Regular Expressions' };

Blog.findOneAndDelete(filter)
	.then((result) => {
		if (result === null) {
			console.log('No document found!');
			return;
		}
		console.log('Deleted Document:', result);
	})
	.catch((err) => {
		console.error('Error:', err);
	});

// mongoose.connection.close();
