//* ======================================
//* ++++++++++++++ Promise +++++++++++++++
//* ======================================

//$ A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. In terms of our analogy: this is the “subscription list”. The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.

//* A “producing code” is a code that does something and takes time. For instance, some code that loads the data over a network.

//* A “consuming code” that wants the result of the “producing code” once it’s ready. Many functions may need that result.

//? The constructor syntax for a promise object is:
// let promise = new Promise(function (resolve, reject) {
// 	// executor (the producing code, "singer")
// });

//* its arguments 'resolve' and 'reject' are callbacks provided by JavaScript itself. Our code is only inside the executor.

// When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:
//? resolve(value) — if the job is finished successfully, with result value.
//? reject(error) — if an error has occurred, error is the error object.

//Note: The promise object returned by the new Promise constructor has these internal properties:
//* 1) state:—
// initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
//* 2) result:—
// initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.

//* Example code with state: fullfilled and result: "done"

// let successfullPromise = new Promise(function (resolve, reject) {

// 	// the function is executed automatically when the promise is constructed

// 	// after 1 second signal that the job is done with the result "done"
// 	setTimeout(() => resolve('done'), 1000);

// });

//* And now an example of the executor rejecting the promise with an error:
// let rejectedPromise = new Promise(function (resolve, reject) {
// 	// after 1 second signal that the job is finished with an error
// 	setTimeout(() => reject(new Error('Whoops!')), 1000);
// });

//Note: There can be only a single result or an error.The executor should call only one resolve or one reject. Any state change is final. All further calls of resolve and reject are ignored: i.e
// let promise = new Promise(function (resolve, reject) {
// 	resolve('done');

// 	reject(new Error('…')); // ignored
// 	setTimeout(() => resolve('…')); // ignored
// });

//* ========================================
//* ================ then ==================
//* ========================================

/*
The syntax is:
promise.then(
  function(result) { //handle a successful result  },
  function(error) { //handle an error  }
);
*/

//* The first argument of .then is a function that runs when the promise is resolved and receives the result.

//* The second argument of .then is a function that runs when the promise is rejected and receives the error.

// let myPromise = new Promise((resolve, reject) => {
//     let result = true; // also run by assiging true
//     if(result) {
//         resolve("Promise fullfilled");
//     } else {
//         reject("Promise rejected");
//     }
// })

// myPromise.then( function (result) {
//     console.log("The promise has been fulfilled and first function has been called");
// }, function (err) {
//     console.log("The promise has been rejected and second function has been called");
// })

//* another way
// myPromise.then(function (message) {
//     console.log("The promise has been fulfilled and then() has been invoked");
// }).catch(function (message) {
//     console.log("The promise has been rejected and catch() has been invoked");

// });

//* If we’re interested only in successful completions, then we can provide only one function argument to .then:
// myPromise.then( function (result) {
//     console.log("The promise has been fulfilled and result is:", result);
// })

//* +++++++++++++++++++++++++
//* +++++++++ catch +++++++++
//* +++++++++++++++++++++++++

//? If we’re interested only in errors, then we can use null as the first argument: .then(null, errorHandlingFunction). Or we can use .catch(errorHandlingFunction), which is exactly the same:

//* null as first argument using .then
// myPromise.then(null, function (error) {
//     console.log("The promise has been rejected: " + error);
// })

//* using .catch
// myPromise.catch(function (error) {
//     console.log("The promise has been rejected: ", error);
// })

//Note: .catch(f) is the same as promise.then(null, f)

//+++++++++++++++++++++++++++++++++++++
//* ++++++++ Promise Chaining ++++++++++
//+++++++++++++++++++++++++++++++++++++

//* we can use multiple .then()  i.e

// myPromise
// 	.then(function (value) {
// 		console.log('First .then() called');
// 	})
// 	.then(function (value) {
// 		console.log('second .then() called');
// 	})
// 	.then(function (value) {
// 		console.log('third .then() called');
// 	});

//Note: multiple .catch() will not be called. only the first .catch() will be called
// myPromise
// 	.catch(function (err) {
// 		console.log('First .catch() called');
// 	})
// 	.catch(function (err) { //ignored
// 		console.log('second .catch() called');
// 	});

// ++++++++++++++++++++++++++++++++++
//* ++++++++++ finally() ++++++++++++
// ++++++++++++++++++++++++++++++++++

//$ The call .finally(f) is similar to .then(f, f) in the sense that f runs always, when the promise is settled: be it resolve or reject. The idea of finally is to set up a handler for performing cleanup/finalizing after the previous operations are complete. E.g. stopping loading indicators, closing no longer needed connections, etc.

//* A finally handler has no arguments. In finally we don’t know whether the promise is successful or not. That’s all right, as our task is usually to perform “general” finalizing procedures. i.e

// myPromise.finally(function () { //it doesn't take any arguments
//     console.log('finally called');
// });

//Note: Think of it as a party finisher. No matter was a party good or bad, how many friends were in it, we still need (or at least should) do a cleanup after it. Hence finally() will be called no matter promise was resolved or rejected.

//* A finally handler “passes through” the result or error to the next suitable handler.
// let newPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("value"), 2000);
// })
// newPromise.finally(() => console.log("Promise ready")) // triggers first
// newPromise.then(result => console.log(result)); // <-- .then shows "value"

//* A finally handler also shouldn’t return anything. If it does, the returned value is silently ignored. The only exception is when finally throws an error, then the execution goes to the nearest error handler.

//++++++++++++++++++++++++++++++++++++++
//* +++++++++++ all() ++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++

// The Promise.all() static method takes an iterable(array) of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// Expected output: Array [3, 42, "foo"]

//* Let's understand the whole concept with an example. Suppose we want to save some data in DB, recursively. i.e

// function saveToDB(data, success, failure) {
// 	let internetSpeed = Math.floor(Math.random() * 10) + 1;
// 	if (internetSpeed >= 4) {
// 		success();
// 	} else {
// 		failure();
// 	}
// }
//* the idea is we want to save some more data on the successfull save of data1, similarly after saving data2, we want to save some more data to be saved.

// saveToDB(
// 	'Some data',
// 	() => {
// 		console.log('Data1 was saved successfully!');
// 		saveToDB(
// 			'Some data 2',
// 			() => {
// 				console.log('Data2 was saved successfully!');
// 				saveToDB(
// 					'Some more data',
// 					() => {
// 						console.log('Data3 was saved successfully!');
// 					},
// 					() => {
// 						console.log('Poor internet connection!: Data3 was not saved!');
// 					}
// 				);
// 			},
// 			() => {
// 				console.log('Poor internet connection!: Data2 was not saved!');
// 			}
// 		);
// 	},
// 	() => {
// 		console.log('Poor internet connection!: Data1 was not saved!');
// 	}
// );

//* you can clearly see the complexity of above code due to callback hell. Promise make our life much easier by simplyfying the code.

//$ let's refactor the code:

function saveToDB(data) {
	return new Promise((resolve, reject) => {
		let internetSpeed = Math.floor(Math.random() * 10) + 1;
		if (internetSpeed >= 4) {
			resolve('data was saved successfully!!');
		} else {
			reject('Poor internet connection!!');
		}
	});
}

let request = saveToDB('some data');

// request.then((response) => {
//   console.log('Data1 was saved successfully!');
//   let newRequest = saveToDB("some data");
//   newRequest.then((response) => {
//     console.log('Data2 was saved successfully!');
//   });
// }).catch((err) => {
//   console.log("Failed to save data!");
// })

//* if you notice the above code, it also looks like callback hell. This is where promise chaining comes in handy.

request
	.then((response) => {
    console.log('Data 1: ', response);
		console.log('Data1 was saved successfully!');
		return saveToDB('some data'); //as soon as, this state is executed, the flow of code will then be transferred to next then().
	})
	.then((response) => {
    console.log('Data 2: ', response);
		console.log('Data2 was saved successfully!');
    return saveToDB('some data');
	})
	.then((response) => {
    console.log('Data 3: ', response);
		console.log('Data3 was saved successfully!');
	})
	.catch((err) => { // one catch() is enough to catch the error for multiple promises
    console.log("Error: ", err);
		console.log('Failed to save data!');
	});

//* Now we will use all the concepts of promises, and simply the color change code.

