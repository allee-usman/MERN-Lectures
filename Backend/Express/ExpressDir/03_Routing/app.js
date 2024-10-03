/*
* Routing:
It is the process of selecting a path for traffic in a network/or between/across multiple networks.
To generate different responses for different routes/paths, app.get() is used.
See example:
*/

//Syntax: app.get(path, callback)
app.get('/aliusman', (req, res) => {
	console.log('Request Recieved');
	res.send('You connected to aliusman path.');
});
app.get('/contacts', (req, res) => {
	console.log('Request Recieved');
	res.send('You connected to contact path.');
});
app.get('/about', (req, res) => {
	console.log('Request Recieved');
	res.send('You connected to about path.');
});

//* app.post():
app.post('/', (req, res) => {
	res.send('You sent a POST request!!');
});

//Note: The response for one request/path must be one. Multiple responses for one request is not possible. Hence app.use() && app.get() cannot be used together.

//* handle invalid path:
app.use('*', (req, res) => {
	res.send('Invalid path');
});
// If "*" path added before a valid path handler, then that path handler will be ignored.
