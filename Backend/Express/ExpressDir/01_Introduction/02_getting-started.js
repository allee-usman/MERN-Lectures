const express = require('express');
const app = express(); //returns an object
// console.dir(app);

const port = 8080;
// Ports are logical endpoints of a network connection that is used to exchange information b/w a web server & web client.


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
