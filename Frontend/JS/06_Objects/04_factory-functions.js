/*
$ ++++++++++ Factory Functions ++++++++++++
Factory functions are regular functions that are designed to create and return objects. They help us avoid code duplication and follow the DRY (Don't Repeat Yourself) principle.

Imagine we want to create multiple car objects with the same properties and methods.
Here's how we might initially approach this without a factory function:
*/

let myCar1 = {
	manufacturer: 'Toyota',
	model: 'MarkX',
	price: '300k',
	applyBrake() {
		console.log('Brake has been applied!');
	},
};
let myCar2 = {
	manufacturer: 'Suzuki',
	model: 'Alto',
	price: '280k',
	applyBrake() {
		console.log('Brake has been applied!');
	},
};
let myCar3 = {
	manufacturer: 'KIA',
	model: 'Sportage',
	price: '800k',
	applyBrake() {
		console.log('Brake has been applied!');
	},
};

// Notice we're repeating the same code for each car object. This violates the DRY principle and makes our code harder to maintain.

//* How Factory Functions Can Help:
// We can use a factory function to create multiple car objects without repeating code.

function createCar(manufacturer, model, price) {
	return {
		manufacturer: manufacturer,
		model: model,
		price: price,
		applyBrake() {
			console.log(`Brake applied on ${this.manufacturer} ${this.model} car!`);
		},
	};
}

// Now we can easily create multiple car objects by calling the factory function:
let car1 = createCar('Toyota', 'GLI', '700k');
let car2 = createCar('Honda', 'Civic', '550k');

// car1 and car2 are both objects with the same structure but different values.
console.log(car1.applyBrake()); // Output: Brake applied on Toyota GLI car!
console.log(car2.model); // Output: Civic

//* Downside of Factory Functions:
// While factory functions are efficient, there is a downside in terms of memory usage. Each car object has its own copy of the applyBrake() function, which consumes memory for each instance.

console.log(car1.applyBrake === car2.applyBrake); // Output: false
// This shows that every car object has its own copy of the applyBrake() function, even though the function is identical.

//* Solution - Prototypes && new operator:
// We can solve this issue by using prototypes. Instead of having separate copies of applyBrake(), we can move the method to a shared prototype, ensuring all objects share the same method, saving memory.
