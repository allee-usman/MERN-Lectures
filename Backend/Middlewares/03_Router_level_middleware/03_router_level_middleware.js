/*
$ Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().

*/
const express = require('express');
const app = express();
const router = express.Router();

// Load router-level middleware by using the router.use() and router.METHOD() functions.

//# The following example code replicates the middleware system shown in "02_application_level-middleware.js", by using router-level middleware:

// Set the view engine to EJS
app.set('view engine', 'ejs');
// mount the router on the app
app.use('/', router);

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
	console.log('Hi, I am middleware function for every type of request.');
	next();
});

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use(
	'/user/:id',
	(req, res, next) => {
		console.log('Request URL:', req.originalUrl);
		next();
	},
	(req, res, next) => {
		console.log('Request Type:', req.method);
		next();
	}
);

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get(
	'/user/:id',
	(req, res, next) => {
		//Info: To skip the rest of the router’s middleware functions, call next('router') to pass control back out of the router instance. i.e:
		// if the user ID is 0, skip to the next router
		if (req.params.id === '0') next('route');
		// otherwise pass control to the next middleware function in this stack
		else next();
	},
	(req, res, next) => {
		// render a regular page
		res.render('regular.ejs');
	}
);

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', (req, res, next) => {
	console.log(`I am special with id: ${req.params.id}`);
	res.render('special.ejs');
});

app.listen(8080, () => {
	console.log('Server is up and listening on port: 8080');
});
