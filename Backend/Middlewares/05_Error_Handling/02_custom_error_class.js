const express = require('express');
const customError = require('./ExpressError');
const app = express();

const checkToken =
	('/api',
	(req, res, next) => {
		let { token } = req.query;
		if (token === 'giveaccess') next();

		throw new customError(401, 'Access Denied!');
	});

app.get('/api', checkToken, (req, res) => {
	res.send('Data');
});
app.use((err, req, res, next) => {
	// res.send(err);
	let { statusCode, message } = err;
	res.status(statusCode).send(message);
});
app.listen(8080, () => {
	console.log('Server is up and listening on port: 8080');
});
