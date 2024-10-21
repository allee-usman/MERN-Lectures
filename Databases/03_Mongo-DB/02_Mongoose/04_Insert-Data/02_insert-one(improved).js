/*
+++++++++++++++++++++++++++++
$ +++++++ Optimized Code ++++++
+++++++++++++++++++++++++++++
Below is the optimized version of above code:
*/

const mongoose = require('mongoose');

async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/testDB');
}

main()
	.then(() => {
		console.log('Connected to Database');
		insertData();
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

async function insertData() {
	const blog2 = new Blog({
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
	});

	try {
		const result = await blog2.save();
		console.log('Blog saved successfully:', result);

		//close the connection
		await mongoose.connection.close();
	} catch (error) {
		console.log(error);
	}
}
