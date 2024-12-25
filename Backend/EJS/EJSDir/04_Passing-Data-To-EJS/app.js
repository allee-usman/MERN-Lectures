const express = require('express');
const path = require('path'); //used to set path for views directory

const app = express();

const port = 8080;
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '../views'));

//* To send data to ejs file, we can add second argument to "res.render()" which is an object i.e

// app.get('/rolldice', (req, res) => {
// 	let diceValue = Math.floor(Math.random() * 6) + 1;
// 	res.render('rolldice', { value: diceValue });
// });
//Note: Change the "diceValue" name to "value" to test the above code

//* having same key:value names is also fine i.e
// app.get('/rolldice', (req, res) => {
// 	let diceValue = Math.floor(Math.random() * 6) + 1;
// 	res.render('rolldice', { diceValue: diceValue });
// });

//* having same key:value names is equivalent to having only one name
app.get('/rolldice', (req, res) => {
	let diceValue = Math.floor(Math.random() * 6) + 1;
	res.render('rolldice', { diceValue });
});

app.listen(port, () => {
	console.log('Express listening on port: ', port);
});
