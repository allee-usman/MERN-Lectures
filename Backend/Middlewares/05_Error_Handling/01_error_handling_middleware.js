/*
$ Error-handling middleware always takes four arguments. You must provide four arguments to identify it as an error-handling middleware function. Even if you don’t need to use the next object, you must specify it to maintain the signature. Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.

*/
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

// Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three, specifically with the signature (err, req, res, next):
app.get('/err', (req, res) => {
	abc = abcfd; //explicitly make error
});
app.use((err, req, res, next) => {
	console.error('--------ERROR 1 Middleware--------');
	next(err); // pass flow to next custom/default error-handling middleware
});
app.use((err, req, res, next) => {
	console.error('--------ERROR 2 Middleware--------');
	// res.status(501).send('Something broke!'); //send response to client
	next(err); //since no custom error-handling middleware, flow will be passed to default(express) middleware
});
app.get('/', (req, res) => {
	console.log('Hi, I am root route!');
	res.send('Hi');
});

//Note: Define error-handling middleware last, after other app.use() and routes calls; for example:

// app.use(bodyParser.urlencoded({
//   extended: true
// }))
// app.use(bodyParser.json())
// app.use(methodOverride())
// app.use((err, req, res, next) => {
//   // logic
// })

//Responses from within a middleware function can be in any format, such as an HTML error page, a simple message, or a JSON string.

//# For organizational (and higher-level framework) purposes, you can define several error-handling middleware functions, much as you would with regular middleware functions. For example, to define an error-handler for requests made by using XHR  and those without:

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(bodyParser.json());
app.use(methodOverride());
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

//In this example, the generic 'logErrors' might write request and error information to stderr, for example:
function logErrors(err, req, res, next) {
	console.error(err.stack);
	next(err);
}

//Also in this example, 'clientErrorHandler' is defined as follows; in this case, the error is explicitly passed along to the next one.

function clientErrorHandler(err, req, res, next) {
	if (req.xhr) {
		res.status(500).send({ error: 'Something failed!' });
	} else {
		next(err);
	}
}
//Note: When not calling “next” in an error-handling function, you are responsible for writing (and ending) the response. Otherwise, those requests will “hang” and will not be eligible for garbage collection.

// Implement the “catch-all” errorHandler function as follows (for example):

function errorHandler(err, req, res, next) {
	res.status(500);
	res.render('error', { error: err });
}

app.listen(8080, () => {
	console.log('Server is up and listening on port: 8080');
});
