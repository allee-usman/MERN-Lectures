const mongoose = require('mongoose');

async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/testDB');
}

main()
	.then(() => {
		console.log('Connection established!!');
	})
	.catch((err) => {
		console.log(err.message);
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

//create model
const Blog = mongoose.model('Blog', blogSchema);

Blog.insertMany([
	{
		title: 'Advanced MongoDB Techniques',
		author: 'Jane Smith',
		body: 'Once you’re comfortable with MongoDB basics, it’s time to explore advanced queries, indexing, and aggregation pipelines.',
		comments: [
			{
				body: 'The indexing section was super helpful!',
				date: new Date('2024-07-15'),
			},
			{
				body: 'Could you elaborate more on aggregation?',
				date: new Date('2024-07-17'),
			},
		],
		date: new Date('2024-07-01'),
		hidden: false,
		meta: {
			votes: 30,
			favs: 20,
		},
	},
	{
		title: 'Understanding Mongoose in Full-Stack Development',
		author: 'Ali Usman',
		body: 'Mongoose is an excellent library for MongoDB. This post covers how to integrate Mongoose in a MERN stack project.',
		comments: [
			{ body: 'Very informative post!', date: new Date('2024-10-01') },
			{
				body: 'Could you cover validation in Mongoose next?',
				date: new Date('2024-10-02'),
			},
		],
		date: new Date('2024-09-25'),
		hidden: true,
		meta: {
			votes: 8,
			favs: 3,
		},
	},
]).then((response) => {
	console.log(response);
});

//Note: Mongoose uses "Operation Buffering" meaning that it lets you start using your model immediately, without waiting for mongoose to establish connection to MongoDB
