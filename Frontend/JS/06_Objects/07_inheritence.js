/*

+++++++++++++++++++++++++++++++++++++
$ ++++++++++ Inheritance ++++++++++++
+++++++++++++++++++++++++++++++++++++

Inheritance lets one class (child class) acquire properties and methods from another class (parent class). This avoids code duplication and enables us to reuse functionality across multiple related classes.

*/

// Let's start with a Parent class, 'Vehicle', which will have properties and methods common to all vehicles.
class Vehicle {
	constructor(manufacturer, wheels) {
		this.manufacturer = manufacturer;
		this.wheels = wheels; // Number of wheels the vehicle has
	}

	start() {
		console.log(`${this.manufacturer} vehicle has started.`);
	}
}

//* Now let's create a Child class, 'Car', that inherits from the 'Vehicle' class.
// 'Car' will have all the properties and methods of 'Vehicle' and can also have its own unique properties and methods.

//? "extends" keyword is used to inherit from the from the parent class
class Car extends Vehicle {
	constructor(manufacturer, model, price) {
		//* Use 'super()' to call the constructor of the parent class (Vehicle) and inherit the common properties.
		super(manufacturer, 4);
		this.model = model; // 'Car' specific property
		this.price = price; // 'Car' specific property
	}

	// Unique method for Car
	honkHorn() {
		console.log('Beep beep! The car horn is honking!');
	}
}

class Motorcycle extends Vehicle {
	constructor(manufacturer, model, price) {
		super(manufacturer, 2);
		this.model = model;
		this.price = price;
	}

	// Unique method for Motorcycle
	revEngine() {
		console.log('Vroom vroom! The motorcycle engine is revving!');
	}
}

// create objects of both Car and Motorcycle
let myCar = new Car('Toyota', 'Corolla', '500k');
let myMotorcycle = new Motorcycle('Honda', 'CBR', '300k');

// Accessing shared methods and properties (inherited from Vehicle)
myCar.start(); // Output: Toyota vehicle has started.
myMotorcycle.start(); // Output: Honda vehicle has started.

// Accessing Car and Motorcycle specific methods
myCar.honkHorn(); // Output: Beep beep! The car horn is honking!
myMotorcycle.revEngine(); // Output: Vroom vroom! The motorcycle engine is revving!

// Both Car and Motorcycle have the 'wheels' property inherited from the Vehicle class.
console.log(myCar.wheels); // Output: 4
console.log(myMotorcycle.wheels); // Output: 2
