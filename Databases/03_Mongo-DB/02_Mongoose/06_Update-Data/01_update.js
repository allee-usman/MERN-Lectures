/*

=> Update methods in Mongoose:
#1: Model.updateOne(filter, updateData, options)
Updates the first matching document in the collection
Return Value: Returns an object containing information about the operation, such as the number of documents matched and modified.
#2: Model.updateMany(filter, updateData, options)
Updates the first matching document in the collection
#3: Model.findOneAndUpdate(filter, updateData, options)
Finds a single document and updates it.
Return Value: Returns the original document (or the updated document if you use the new: true option).
#4: Model.findByIdAndUpdate(filter, updateData, options)
Updates the document by ID


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
#1: Model.updateOne(filter, update, options)
Updates only first matching document
where
-- filter:
is an «Object» to filter out result. In case of no filter, pass empty object "{}"
-- update:
is an «Object|Array» If array, this update will be treated as an update pipeline and not casted.
-- options:
optional parameter, to specify options i.e
[options.upsert=false] «Boolean» if true, and no documents found, insert a new document
*/

//-- We want to change the name of author for the blog with id = 67096d8f58dcf6a609c396af
// Blog.updateOne({ _id: '67096d8f58dcf6a609c396af' }, { author: 'Tauqir Hayat' })
// 	.then((res) => {
// 		// console.log(res);
// 		console.log(res.matchedCount); // Number of documents matched
// 		console.log(res.modifiedCount); // Number of documents modified
// 		console.log(res.acknowledged); // Boolean indicating the MongoDB server received the operation. This may be false if Mongoose did not send an update to the server because the update was empty.
// 		console.log(res.upsertedId); // null or an id containing a document that had to be upserted.
// 		console.log(res.upsertedCount); // Number indicating how many documents had to be upserted. Will either be 0 or 1.
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

/*
#2: Model.updateMany(filter, update, options)
where
-- filter:
is an «Object» to filter out result. In case of no filter, pass empty object "{}"
-- update:
is an «Object|Array» If array, this update will be treated as an update pipeline and not casted.
-- options:
optional parameter, to specify options

*/
// Blog.updateMany({ author: 'John Doe' }, { author: 'Ali Usman' })
// 	.then((res) => {
// 		// console.log(res);
// 		console.log(res.matchedCount); // Number of documents matched
// 		console.log(res.modifiedCount); // Number of documents modified
// 		console.log(res.acknowledged); // Boolean indicating the MongoDB server received the operation. This may be false if Mongoose did not send an update to the server because the update was empty.
// 		console.log(res.upsertedId); // null or an id containing a document that had to be upserted.
// 		console.log(res.upsertedCount); // Number indicating how many documents had to be upserted. Will either be 0 or 1.
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

/*
#3: Model.findOneAndUpdate(filter, updateData, options)
where
-- filter:
is an «Object» to filter out result. In case of no filter, pass empty object "{}"
-- update:
is an «Object|Array» If array, this update will be treated as an update pipeline and not casted.
-- options:
optional parameter, to specify options i.e

=> [options.returnDocument='before'] «String» Has two possible values, 'before' and 'after'. By default, it will return the document before the update was applied.

=> [options.new=false] «Boolean» if true, return the modified document rather than the original

=> [options.sort] «Object|String» if multiple docs are found by the conditions, sets the sort order to choose which doc to update.

*/
const filter = { title: 'Advanced Regular Expressions' };
const updateData = { $set: { 'meta.votes': 14 } }; // you can also use MogoDB update operators here
const options = { new: true }; // new: true == returnDocument: after

Blog.findOneAndUpdate(filter, updateData, options)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});

//Info: Use case of findOneAndUpdate() is it Useful when you need to update a document and immediately use the document's data, while updateOne() is Useful when you only need to know the result of the update operation and do not need the document's data.
