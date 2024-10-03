const express = require('express');
const https = require('https');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));

const port = 3000;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
	const city = req.body.cityName;
	const unit = 'metric';
	const appID = '4581ab537a1a022ca927828f7a69ad7e';
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appID}&units=${unit}`;

	//Note: The request url must contain "https://" in the start else the url won't works

	https.get(url, (response) => {
		// console.log(response); //output: object
		// console.log(response.statusCode); //output: 100-599
		// console.log(response.statusMessage); //output: ok

		//* response.on('data', ...) listens for chunks of data as they are received.
		response.on('data', (data) => {
			// console.log(data); //output: hexadecimal codes of JSON data

			//* convert hexadecimal into JS object
			const weatherData = JSON.parse(data);
			// console.log(weatherData); // output: object

			let temp = weatherData.main.temp;
			let weatherIcon = weatherData.weather[0].icon;
			const imgUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
			res.write(`<h1>Temprature in ${city} is ${temp} degree celcius.</h1>`);
			res.write(
				`<img src="${imgUrl}" alt= "weather icon" style="height:200px;">`
			);
			res.send();
		});
	});
});
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
