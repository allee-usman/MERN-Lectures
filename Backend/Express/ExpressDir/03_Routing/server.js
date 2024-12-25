const express = require('express');
const booksData = require('./booksData');
const app = express();

const port = 8080;

app.get('/', (req, res) => {
	res.send(booksData);
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
