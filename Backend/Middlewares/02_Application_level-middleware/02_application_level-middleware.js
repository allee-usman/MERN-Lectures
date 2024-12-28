/*
Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase(i.e: app.get() etc).

*/

const express = require('express');
const app = express();

//# This example shows a middleware function with no mount path. The function is executed every time the app receives a request.

// app.use((req, res, next) => {
// 	console.log('Time:', Date.now());
// 	next();
// });

// app.get('/', (req, res) => {
// 	console.log('Hi, I am index route');
// 	res.send('Hi');
// });
// app.get('/random', (req, res) => {
// 	console.log('Hi, I am a random page');
// 	res.send('Hi');
// });

//# This example shows a middleware function mounted on the /user/:id path. The function is executed for any type of HTTP request on the /user/:id path.

// app.use('/user/:id', (req, res, next) => {
// 	console.log('Request Type:', req.method);
// 	next();
// });
// app.get('/', (req, res) => {
// 	console.log('Hi, I am index route');
// 	res.send('Hi');
// });
// app.get('/user/:id', (req, res) => {
// 	console.log('Hi, I am /user/:id route of GET type!');
// 	res.send('Hi, I am /user/:id route GET type!');
// });
// app.post('/user/:id', (req, res) => {
// 	console.log('Hi, I am /user/:id route of POST type!');
// 	res.send('Hi, I am /user/:id route POST type!');
// });
// app.put('/user/:id', (req, res) => {
// 	console.log('Hi, I am /user/:id route of PUT type!');
// 	res.send('Hi, I am /user/:id route PUT type!');
// });

//#

app.listen(8080, () => {
	console.log('Server is up and listening on port: 8080');
});
