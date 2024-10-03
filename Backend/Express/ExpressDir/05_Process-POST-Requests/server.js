//$ To get the data from the post request, we need to install a npm package called "body-parser"

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

//body-parser works with express
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	// console.log(__dirname); //output: current directory path
	res.sendFile(__dirname + '/index.html');
});

//? Why would we use body-parser?
// It allows to go into any routes and tap into "req.body" where "req.body" is the parsed version of the HTTP request. i.e:

app.post('/', (req, res) => {
	// res.send('Post request');
	// console.log(req.body); //output: { num1: 2, num2: 3 }

	let num1 = req.body.num1;
	let num2 = req.body.num2;
	//* num1 & num2 name of data is came from the name attribute of input field

	// res.send(`The result is ${num1 + num2}`); //output: The result is 23

	/*
    ? Why 2+3 = 23 instead of 5?
	The answer is by default the data received in post request is of string type. To verify:
    */

	// console.log(typeof num1); //output: string

	// //covert into number
	num1 = Number(num1);
	num2 = Number(num2);

	res.send(`The result is ${num1 + num2}`); //output: The result is 5
});

//* BMI Calculations
app.get('/bmiCalculator', (req, res) => {
	// console.log(__dirname); //output: current directory path
	res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmiCalculator', (req, res) => {
	let weight = Number(req.body.weight);
	let height = Number(req.body.height);

	// let bmiValue = weight / (Math.pow(height, 2));
	let bmiValue = weight / (height * height);

	// res.send(`Your BMI is ${bmiValue}`);

	//* if you want to write multiple lines in respsonse page, use res.write()
	res.write(`Your weight is ${weight} \n`);
	res.write(`Your height is ${height} \n`);
	res.write(`Your BMI is ${bmiValue.toFixed(2)}`);
	res.send();
});

app.listen(port, () => {
	console.log(`Requests are listening on port ${port}`);
});
