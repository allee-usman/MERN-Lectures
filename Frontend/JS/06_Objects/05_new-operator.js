/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++
$ ++++++++++ Prototypes &&  new Operator ++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++

Downside of factory functions is that each object has its own copy of methods like applyBrake(), which leads to higher memory usage because every object stores the same method separately.

* To solve this, we can use prototypes.
With prototypes, the method is shared between all objects created from the same template, reducing memory usage.

? Example 1: Using Constructor Functions with the new operator
* Constructor function: 
A special type of function meant to create objects. By convention, the name starts with a capital letter and it does not return anything.

*/

function Car(manufacturer, model, price) {
	// Setting up the properties
	this.manufacturer = manufacturer;
	this.model = model;
	this.price = price;
}

//* Now we move the method applyBrake to the prototype.
// This way, every car object will share a single copy of applyBrake, saving memory.

Car.prototype.applyBrake = function () {
	console.log(`Brake applied on ${this.manufacturer} ${this.model} car!`);
};

/*
* Creating objects using the "new" operator
The "new" operator does 3 things:
    1. Creates a new empty object in memory.
    2. Sets the prototype of that object to the constructor's prototype.
    3. Executes the constructor function with 'this' referring to the new object.
*/

let car1 = new Car('Toyota', 'GLI', '700k');
let car2 = new Car('Honda', 'Civic', '550k');

// Both car1 and car2 can use the applyBrake method, but they share the same function in memory.
console.log(car1.applyBrake === car2.applyBrake); // Output: true

car1.applyBrake(); // Output: Brake applied on Toyota GLI car!
car2.applyBrake(); // Output: Brake applied on Honda Civic car!

//* The advantage of this approach is that the applyBrake() method is now stored in the prototype, not in every object.
// This saves memory when creating many objects with the same methods.
