/*
* We would create following  RESTful APIs:
1. GET     /posts        -> to get data of all posts
2. POST    /posts        -> to add a new post
3. GET     /posts/:id    -> to get one post (using ID)
4. PATCH   /posts/:id    -> to update specific post
5. DELETE  /posts/:id    -> to remove specific post

INFO: DELETE operation by convention is called destroy route.
*/

const express = require('express');
const ejs = require('ejs');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');
const initialContent = require(__dirname + '/initialContent.js');
const posts = initialContent.posts;

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

// ROOT Route
app.get('/posts', (req, res) => {
	res.render('home', { posts });
});

// new post route
app.get('/posts/new', function (req, res) {
	res.render('new');
});
app.post('/', (req, res) => {
	const newPost = {
		postID: uuidv4(),
		username: req.body.username,
		postBody: req.body.postContent,
	};
	posts.push(newPost);
	res.redirect('/posts');
});

// view post route
app.get('/posts/:id', function (req, res) {
	let requestedPost = req.params.id;
	const post = posts.find((p) => p.postID === requestedPost);
	res.render('view', { post });
});

// edit route
app.get('/posts/edit/:id', function (req, res) {
	const requestedID = req.params.id;
	const post = posts.find((p) => p.postID === requestedID);
	res.render('edit', { post });
});

// HTML form can send only two types of requests that is: GET or POST. Since we are editing thr post partially, we need PATH request, which is not possible directly from html form.
//? Solution: 'method-override' is a npm package which lets you override the request methods i.e POST to DELETE etc
app.patch('/posts/edit/:id', function (req, res) {
	const requestedID = req.params.id;
	const post = posts.find((p) => p.postID === requestedID);
	post.postBody = req.body.postContent;
	res.redirect('/posts');
});

// DESTROY route
app.delete('/posts/delete/:id', function (req, res) {
	const requestedID = req.params.id;
	//method 1 -:
	// posts = posts.filter((p) => p.postID !== requestedPost);

	//method 2 -:

	const postIndex = posts.findIndex((p) => p.postID === requestedID);
	console.log(postIndex);
	if (postIndex !== -1) {
		posts.splice(postIndex, 1);
	}
	res.redirect('/posts');
});

//listen to requests
const port = 8080;
app.listen(port, () => {
	console.log(`Server is up & listening on ${port}`);
});
