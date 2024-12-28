/*
$ Middleware are intermediary/functions that come into play after server recieves the request and before the response is sent to client. i.e:

Request ----------> Middleware -----------> Response

Info: Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

-- Examples:
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "/public")))

Note: app.use() is used to execute middlewares.

-- What do middlewares do?
1) Execute any code.
2) Make changes to req and res objects.
3) End the req-res cycle.
4) Call the next middleware function in stack(chaining).

-- Types of middleware:
#1: Application-level middleware
#2: Router-level middleware
#3: Error-Handling middleware
#4: Third-party middleware
*/

const express = require('express');
const app = express();

// app.use(() => { //middleware
// 	console.log('Hi, I am middleware.');
// });

app.get('/', (req, res) => {
	console.log('Hi, I am index route');
	res.send('Hi'); //no response will be sent, as our midddleware has not define what to do next? part.
});

//Info: wheter you call root route or '/random' route, response will be "Middleware finished" everytime. Because epxress execute middleware for every incoming request. See the example below:

// app.use((req, res) => {
// 	console.log('Hi, I am middleware.');
// 	res.send('Middleware finished');
// });

// app.get('/', (req, res) => {
// 	console.log('Hi, I am index route');
// 	res.send('Hi');
// });
// app.get('/random', (req, res) => {
// 	console.log('Hi, I am a random page');
// 	res.send('Hi');
// });

//Note: If the current middleware function does not end the req-res cycle, it then must call the next() to pass the control to next middleware. Otherwise, the request will be left hanging.

//? What is next()?
// It represent the next middleware function and is usually denoted by variable named 'next'. i.e"

// app.use((req, res, next) => {
// 	console.log('Hi, I am 1st middleware');
// 	next(); //explicitly call the next middleware.
// });
// app.use((req, res, next) => {
// 	console.log('Hi, I am 2nd middleware');
// 	next();
// console.log("After next() code"); //still executes but very bad approach so avoid it

// a way to avoid code execution after next() is:
// return next()
// console.log("Code after return next()");

// });

// app.get('/', (req, res) => {
// 	console.log('Hi, I am index route');
// 	res.send('Hi');
// });
// app.get('/random', (req, res) => {
// 	console.log('Hi, I am a random page');
// 	res.send('Hi');
// });

app.listen(8080, () => {
	console.log('Server is up and listening on port: 8080');
});

/*
-- app.use(path, callback):
where
--path:
represent a specific route/path. Optional, if not specified then it will work for every route and vice versa
--callback:
It can be a middleware function, 
array of middleware function,
series of functions separated by comma,
mix of all above
*/

/*
Note: Middleware should be written before route handling, else they will not work. see example below:
*/

app.get('/user', (req, res) => {
	console.log("I am '/user' route.");
	res.send('Hi');
});
app.use('/user', (req, res, next) => {
	console.log("I am middleware only for '/user' route.");
	next();
});
