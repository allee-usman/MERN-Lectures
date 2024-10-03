/*
+++++++++++++++++++++++++++++++++++++++++++
$ ++++++++++ Using ES6 Classes ++++++++++++
+++++++++++++++++++++++++++++++++++++++++++

Classes in JavaScript are essentially syntactic sugar over constructor functions and prototypes. They provide a clearer, simpler and more organized way to write object-oriented code.

*/

// Defining a Car class
class Car {
	// The constructor method is a special method that is called when creating a new object (using the 'new' operator).
	constructor(manufacturer, model, price) {
		// Setting up the properties
		this.manufacturer = manufacturer;
		this.model = model;
		this.price = price;
	}

	//* Methods defined in a class automatically go to the prototype.
	// This means all instances of Car share the same method (memory efficient).
	applyBrake() {
		console.log(`Brake applied on ${this.manufacturer} ${this.model} car!`);
	}
}

//* Creating objects using the "new" operator
// Classes are still functions under the hood, so we use the "new" operator to create instances.
let car1 = new Car('Toyota', 'GLI', '700k');
let car2 = new Car('Honda', 'Civic', '550k');

// Calling methods and accessing properties
car1.applyBrake(); // Output: Brake applied on Toyota GLI car!
car2.applyBrake(); // Output: Brake applied on Honda Civic car!

// Checking if both objects share the same method (they do, thanks to prototypes).
console.log(car1.applyBrake === car2.applyBrake); // Output: true

//* The applyBrake method is stored only once in memory,
// and all instances of Car share this method, making it memory-efficient.
