//$ JSON:

//++++++++++++++++++++++++++++++++++++++++++
//*++++++++++ Accessing JSON Data +++++++++++
//++++++++++++++++++++++++++++++++++++++++++

//? JSON data always returns as a string. Two methods to access JSON data:

//* 1): JSON.parse(): It takes JSON data in the form of a string and parse it into JS Objects. i.e
let jsonResponse =
	'{"fact":"When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.","length":97}';
// console.log(jsonResponse.fact); //undefined

let validData = JSON.parse(jsonResponse);
// console.log(validData.fact);
//Expected Output: When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.

//* 2): JSON.stringify(): It takes JS Objects and parse it into JSON data. It is exactly opposite of JSON.parse(). It is mostly used when we are creating our own APIs.
let studentData = {
	name: 'Ali Usman',
	smester: '6th',
	major: 'Sofware Engineering',
};
let myJsonData = JSON.stringify(studentData);
// console.log(myJsonData); // Expected Output: {"name":"Ali Usman","smester":"6th","major":"Sofware Engineering"}

//* if make an object with values as undefined, symbol or functions, they will get ignored during stringifying:

//creating symbol
let studentID = Symbol('123');

let newStudent = {
	name: 'Ali Usman',
	smester: '6th',
	major: 'Sofware Engineering',
	[studentID]: 12,
	grade: undefined,
	getName: function () {
		return this.name;
	},
};
let jsonData = JSON.stringify(newStudent);
// console.log(jsonData);
// Expected Output: {"name":"Ali Usman","smester":"6th","major":"Sofware Engineering"}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++
//* +++++++++++ Testing API requests Tools +++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++

//* Two famous tools:
// 1) Hoppscotch
// 2) Postman

//++++++++++++++++++++++++++++++++
//* +++++++++++ Ajax +++++++++++++
//++++++++++++++++++++++++++++++++

//$ Ajax: stands for Asynchronous Javascript and XML.

//? What's the meaning of Asynchronous in AJAX?
// Asynchronous means that the the Web Application could send and receive data from the Web Server without refreshing the page. This background process of sending and receiving data from the server along with updating different sections of a web page defines Asynchronous property/feature of AJAX.

//* HTTP Verbs:
// 1) GET
// 2) POST
// 3) DELETE

//* Status Codes:
// 200: "OK"
// 400: "Bad Request"
// 403: "Forbidden"
// 404: "Not Found"
// 500: "Internal Server Error"

/* 
* Add Information in URLs:
Four types of information is used in urls:
1. Endpoints
2. Routes/Paths (e.g joke api programming joke path)
3. Parameters (mapweatherapi allows us to customize url by adding searchByCity parameter etc)
4. Authentication (e.g mapwaether api uses appid for authentication)

* Example:
Url: http:www.google.com/search?q=mango
? Here (q -> query) & (mango -> value), it combines called query strings
Url: https://api.openweathermap.org/data/2.5/weather
? Here /weather is route/predefined path
Url: https://api.openweathermap.org/data/2.5/weather?q=Pattoki&&appid=3448348394
? Here appid=3448348394 is used for authentication

Note: A key-value pair which is not recognized by API will get ignored.
*/
//* HTTP Headers:
//HTTP Headers used to supply additional information to request and response

//+++++++++++++++++++++++++++++++++++
//* ++++++++++ API Request ++++++++++
//+++++++++++++++++++++++++++++++++++

//* using fetch(): This method returns a promise.
let url = 'https://catfact.ninja/fact';

// fetch(url)
// 	.then((response) => {
// 		console.log(response);
// 		return response.json(); //json() method converts response into JSON Data
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.log('Error: ' + err);
// 	});

//* Promise chaining will help us to implement the functionality of making another API request on the successful completion of first one:
// fetch(url)
// .then((response) => {
// 	return response.json();
// })
// .then((data) => {
// 	console.log("API Respone 1: ", data.fact);
//     return fetch(url);
// })
// .then((response) => {
// 	return response.json();
// })
// .then((data2) => {
// 	console.log("API Respone 1: ", data2.fact);
// })
// .catch((err) => {
// 	console.log('Error: ' + err);
// });

//Note: Please note that API calls executed asynchronously, meaning that JS will not wait for the result of these calls, instead it will execute synchronous code at that time.

// console.log('I am learning API Request using fetch().'); // will get printed first and then api calls result will be printed

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//* ++++++++++ Usinf fetch() with await & async ++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// async function getFacts() {
// 	let response = fetch(url);
// 	console.log(response); //Expected output: Promise { <pending> } / undefined
// //* reason to this behavior is, fetch() is executed asynchronously, hence JS will not wait for the result, and prints "response", at that time there is no response/call is pending.
// }

// getFacts();

//* to handle this problem:

// async function getFacts() {
// 	let response = await fetch(url); //JS will wait for the result
//     let validData = await response.json(); //as json() is also asynchronous function
// 	console.log(validData.fact);
// }
// getFacts();

//* to handle invalid response & multiple requests:

// async function getFacts(url) {
// 	try {
// 		let response = await fetch(url);
// 		if (!response.ok) {
// 			throw new Error(`HTTP error! status: ${response.status}`);
// 		}
// 		let validData = await response.json();
// 		console.log(validData.fact);

// 		let response1 = await fetch(url);
// 		if (!response1.ok) {
// 			throw new Error(`HTTP error! status: ${response.status}`);
// 		}
// 		let validData1 = await response1.json();
// 		console.log(validData1.fact);
// 	} catch (e) {
// 		console.log('Error:', e.message);
// 	}
// }

// getFacts('https://cat/fact.ninja/facsqst');
// getFacts(url);

//++++++++++++++++++++++++++++++++++++
//* +++++++++++++ Axios ++++++++++++++
//++++++++++++++++++++++++++++++++++++

/*
//$ Axios is a library to make HTTP requests. So far we have used fetch() to make API calls, although axios() also uses fetch() to make API calls, but it is more efficient than fetch().

//? Why we need axios() when we already have fetch()?
When we make API calls using fetch() we get a readable stream in response instead of exact JSON data. So we then have to perform an additional step by parsing the data to json() method. Thanfully, axios() solve this problem. It returns us exact JSON data in response.

*/
//Note: We need to install the axios library or add cdn link.
// async function getFacts(url) {
// 	try {
// 		let response = await axios.get(url);

// 		console.log(response.data); // prints JSON data
// 		console.log(response.data.fact); // prints JSON data
// 	} catch (e) {
// 		console.log('Error:', e.message);
// 	}
// }
// getFacts(url);

let btn = document.querySelector('#fact-btn');
btn.addEventListener('click', async () => {
	let fact = await getrandomFacts(url); //getrandomFacts() returns a promise, so we need to make our callbacks asynchronous and await the promise to be resolved
	let para = document.querySelector('#result');
	para.textContent = fact;
});

async function getrandomFacts(url) {
	try {
		let response = await axios.get(url);
		return response.data.fact;
	} catch (err) {
		console.log('Error:', err.message);
		return 'No fact found!';
	}
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//* +++++++++++++ Sending Headers With API ++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

const jokeUrl = 'https://icanhazdadjoke.com/';

// async function getJokes() {
// 	try {
// 		let res = await axios.get(jokeUrl);
// 		console.log(res.data); // Prints data in HTML format
// 	} catch (err) {
// 		console.log('Error: ', err.message);
// 	}
// }
// getJokes();

//* To get data in JSON format, we can pass headers to axios.get():

// async function getJokes() {
// 	try {
// 		let res = await axios.get(jokeUrl, {
// 			headers: {
// 				Accept: 'application/json'
// 			}
// 		});
// 		console.log(res.data); //JSON Data
// 	} catch (err) {
// 		console.log("Error: ", err.message);
// 	}
// }
// getJokes();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//* +++++++++++++ Updating JQuery Strings +++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

let univerityUrl = 'http://universities.hipolabs.com/search?name=';

document.querySelector('#country-btn').addEventListener('click', async () => {
	let country = document.querySelector('input').value;
	let result = await getUniversities(country);
	let list = document.querySelector('#list');
	list.innerHTML = '';
	result.forEach((element) => {
		let newItem = document.createElement('li');
		newItem.innerHTML = element.name;
		list.appendChild(newItem);
	});
});

async function getUniversities(country) {
	try {
		let res = await axios.get(univerityUrl + country);
		return res.data;
	} catch (err) {
		console.log('Error: ', err.message);
		return [];
	}
}

// getUniversities();
