/*
So far wa have learned to handle following types of error:
1) Normal Error (occurs in Sync Functions)
2) async errors
3) third party errors(using try-catch block)

But when handling multiple erorrs, try-caatch becomes bulky/messy due to repetition of same statements. To improve this we can use wrapAsync

$ wrapAsync is basically a function used to wrap async function, and it returns a new function. It takes a function (fn) as a parameter. The returned function is responsible to execute the "fn" function.
*/
const express = require('express');
const customError = require('./ExpressError');
const app = express();

app.get(
	'/user/:id',
	asyncWrap(async (req, res, next) => {
		let { id } = req.params;
		if (id > 0) {
			res.send('Data');
		} else {
			next(new customError(401, 'Bad Request'));
		}
	})
);

function asyncWrap(fn) {
	return function (req, res, next) {
		fn(req, res, next).catch((err) => next(err));
	};
}
app.listen(8080, () => {
	console.log('Server is up and listening on port: 8080');
});
