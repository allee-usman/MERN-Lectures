/*
* Method - 1: app.use(callback):
It listen requests of every type i.e GET, POST etc
*/

const express = require('express');
const app = express();

const port = 8080;

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});

//-- all https requests will be text based. Express convert them into objects. This process is called parsing.

// app.use((req, res) => {
//     console.log("Request received!");
//     // console.log(req); // output: Object
// });

//The "req" object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.

//The "res" object represents the HTTP response that an Express app sends when it gets an HTTP request.

/*
* Sending Response:
# "res.send()" is used to send responses of any type i.e string, boolean, number, html, json, object etc
See example:
*/
app.use((req, res) => {
	console.log('Request received!');
	// res.send(Buffer.from('whoop'));
	// res.send({ some: 'json' });
	// res.send('<h1>some html</h1>');
	// res.status(404).send('Sorry, we cannot find that!');
	// res.status(500).send({ error: 'something blew up' });
});

//Note: Response sent by app.use() will be same for multiple route i.e localhost:8080/help OR localhost:8080/home
