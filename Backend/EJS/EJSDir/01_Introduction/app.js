/*
$ EJS (Embedded JavaScript Template) is a simple templataing language that lets you generate HTML markup with plain JavaScript.
Main role of EJS is to make our html pages dynamically depending upon the requests
*/

const express = require('express');
const path = require('path');
//no need to require EJS, as EXPRESS automatically requires it internally
const app = express();

const port = 8080;

//* "view engine" always expects a "views" directory in working directory which will have all the rendering .ejs files
app.set('view engine', 'ejs'); // tell the app to use "ejs" for templating

app.get('/', (req, res) => {
	res.render('home.ejs'); //ejs did not send a response, it renders some files/pages
});

app.listen(port, () => {
	console.log('Express listening on port: ', port);
});
