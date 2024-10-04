const express = require('express');
const ejs = require('ejs');
const _ = require('lodash/string');
const initContent = require(__dirname + '/initialContent.js');

const homeContent = initContent.homeContent;
const aboutContent = initContent.aboutContent;
const contactContent = initContent.contactContent;
const posts = [];

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.render('home', { homeContent, posts });
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
	const requestPostTitle = _.lowerCase(req.params.title);

	posts.forEach((post) => {
		const validTitle = _.lowerCase(post.postTitle);

		if (validTitle === requestPostTitle) {
			res.render('post', { title: post.postTitle, content: post.postContent });
		}
	});
});

app.post('/compose', (req, res) => {
	const post = {
		postTitle: req.body.postTitle,
		postContent: req.body.postContent,
	};
	posts.push(post);
	res.redirect('/');
});

const port = 8080;
app.listen(port, () => {
	console.log(`Server is up & listening on port ${port}`);
});
