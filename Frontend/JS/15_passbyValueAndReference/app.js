/*++++++++++++++++++++++++++++++++++++++++____+++++
//* ++++++++++ Pass by Valye & Reference ++++++++++ 
/*++++++++++++++++++++++++++++++++++++++++++++++++*/

//$ Two types of data members in JS
//* 1 -> Primitive 
//* 2 -> Non-Primitive 

/* 
//? Primitive:
i)    numbers
ii)   string
iii)  symbol
iv)   boolean
v)    undefined
vi)   null
vii)  BigInt
*/

/* 
//? Non-Primitive:
i)    objects
ii)   array
iii)  functions

//Note:  It is important to remember that any data type that is not a primitive data type, is of 'Object' type in javascript.
*/

//Info: In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.

//$ Assign operator dealing with primitive types: 
let x = 3; //created a variable x and assigned it a value of “3”

/*
n the background, the “=” (assign operator) allocates some space in the memory, stores the value “3” and returns the location of the allocated memory space. Therefore, the variable x in the above code points to the location of the memory space instead of pointing to the value 2 directly.
*/

// Note: Assign operator behaves differently when dealing with primitive and non-primitive data types.

var y = 234; // y points to some location in the memory space which stores the value "234"
var z = y; // the value of y is assigned to z, the assign operator takes the value of y (234) and allocates a new space in the memory and returns the address.

// console.log("Before changing the value of y: ");
// console.log("y: ", y); // Expected Output: "234"
// console.log("z: ", z); // Expected Output: "234"

//* so if we change the value of y, it will not reflect in z
y = 112
// console.log("After changing the value of y: ");
// console.log("y: ", y); // Expected Output: "112"
// console.log("z: ", z); // Expected Output: "234"

//? From the above example, we can see that primitive data types when passed to another variable, are passed by value. Instead of just assigning the same address to another variable, the value is passed and new space of memory is created.

//$ Assign operator dealing with non-primitive types: 
var obj = { name: "Osama", surname: "Mujahid" }; //new memory allocated and assigned to "obj"
var obj2 = obj; // '= operatoe' assigned the same address to "obj2" pointed by "obj"

// console.log("obj: ", obj.name, obj.surname ); //Expected output: obj:  Osama Mujahid
// console.log("obj2: ", obj2.name, obj2.surname ); //Expected output: obj1:  Osama Mujahid

// console.log("Changing the name of obj2....");
obj2.name = "Ali"
obj2.surname = "Usman"
// console.log("obj: ", obj.name, obj.surname ); //Expected output: obj:  Ali Usman
// console.log("obj2: ", obj2.name, obj2.surname ); //Expected output: obj1:  Ali Usman

//Info: The above code proves data non-primitive types are passed by reference, so changes in one will reflect in others.


let flightNumber = "PK-047"

let passenger = {
    name: "Ali Usman",
    passport: 12345
}

function checkIn(flight, passenger) {

    flight = "PK-657"
    passenger.name = "Mr. " + passenger.name;

    if(passenger.passport === 12345) {
        console.log(`Hello ${passenger.name}, you are checked for flight number ${flight}.`);
    } else {
        console.log("Invalid Passport!!");
    }
}
// checkIn(flightNumber, passenger)

// console.log("Actual flight number: ", flightNumber); // "Pk-047" output shows that "flightNumber" was passed by value, no changes made in "flightNumber" inside the "checkIn" function does not reflected
// console.log("Passenger Details: ");
// console.log("Name: ", passenger.name, ",Passport: ", passenger.passport); passenger.name has been changed from "Ali Usman" to "Mr Ali Usman" showing that "passenger" has been passed by reference

