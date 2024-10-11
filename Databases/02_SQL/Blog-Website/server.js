const express = require('express');
const ejs = require('ejs');
const _ = require('lodash/string');
const mySql = require('mysql2');
const initialContent = require(__dirname + '/initial-content');

const aboutContent = initialContent.aboutContent;
const contactContent = initialContent.contactContent;

//create connection
const connection = mySql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'blog_website',
	password: 'newpassword',
});

const posts = [];

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	const q = 'SELECT * FROM posts';

	try {
		connection.query(q, (error, result) => {
			if (error) throw error;
			res.render('home', { posts: result });
		});
	} catch (error) {
		console.log(error);
	}
});

app.get('/about', (req, res) => {
	res.render('about', { aboutContent });
});

app.get('/contact', (req, res) => {
	res.render('contact', { contactContent });
});

app.get('/compose', (req, res) => {
	res.render('compose');
});

app.get('/posts/:title', (req, res) => {
	// view by title
	const requestPostTitle = _.lowerCase(req.params.title);

	try {
		let q = 'SELECT * FROM posts';
		connection.query(q, (error, result) => {
			if (error) throw error;
			result.forEach((post) => {
				const validTitle = _.lowerCase(post.title);
				if (validTitle === requestPostTitle) {
					res.render('post', {
						title: post.title,
						content: post.content,
					});
				}
			});
		});
	} catch (error) {
		console.log(error);
	}

	//view by id
	// const requestPostID = req.params.postID;
	// const q = 'SELECT * FROM posts WHERE post_id = ?';
	// try {
	// 	connection.query(q, requestPostID, (error, result) => {
	// 		if (error) throw error;
	// 		result = result[0];
	// 		res.render('post', { post: result });
	// 	});
	// } catch (error) {
	// 	console.log(error);
	// }
});

app.post('/compose', (req, res) => {
	const q = 'INSERT INTO posts (title, content, author) VALUES (?, ?, ?)';

	const post = [req.body.postTitle, req.body.postContent, req.body.postAuthor];

	try {
		connection.query(q, post, (error, result) => {
			if (error) throw error;
			res.redirect('/');
		});
	} catch (error) {
		console.log(error);
	}
});

const port = 8080;
app.listen(port, () => {
	console.log(`Server is up & listening on port ${port}`);
});
