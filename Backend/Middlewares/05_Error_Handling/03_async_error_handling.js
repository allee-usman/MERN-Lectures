const express = require('express');
const customError = require('./ExpressError');
const app = express();

app.get('/user/:id', async (req, res, next) => {
	let { id } = req.params;
	if (id > 0) {
		res.send('Data');
	} else {
		// throw new customError(401, 'Bad Request'); //!server will get crash

		// reason is simple: when we are custom handling errors, and throw an error, express by default make call to 'next()' but in case of async function, it does not invoke the next() which causes inappropriate error-handling and hence server get crashed.
		//-- Solution:
		next(new customError(401, 'Bad Request')); // explicit call to next()
	}
});

//TIP: Always use try-catch block when working with async function. What it does, catch the error thrown by third party(i.e Mongo) and executes it.

//Improved version of '/user/:id' route
app.get('/user/:id', async (req, res, next) => {
	let { id } = req.params;
	try {
		if (id > 0) {
			res.send('Data');
		} else {
			next(new customError(401, 'Bad Request')); // explicit call to next()
		}
	} catch (err) {
		next(err);
	}
});
app.listen(8080, () => {
	console.log('Server is up and listening on port: 8080');
});
