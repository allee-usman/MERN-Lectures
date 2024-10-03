/*
 * req.query holds all the query parameters passed to the server with http request
 */

const express = require('express');
const app = express();

const port = 8080;

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});

app.get('/search', (req, res) => {
	// console.log(req.query); //output: { q: [apple, mango]}
	let query = req.query.q;

	if (!query) {
		res.send(`Nothing searched!`);
	} else {
		res.send(`Search results for query: ${query}`);
	}
});
