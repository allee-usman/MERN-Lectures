//* Objects in JS are dynamiic in nature, meaning that we can add properties/methods to an existing object at runtime i.e.
const person =  {
    name: 'Ali Usman',
    age: 23,
    height: 5.5,
}
// console.log(person); //Expected output: { name: 'Ali', age: 23, height: 5.5 }

//now i want to add another property named 'color
person.color = 'fair'
// console.log(person); //Expected output: { name: 'Ali', age: 23, height: 5.5, color: 'fair' }

//* Behaviour of "assignment operator" with objects
const person2 = person;
// console.log(person2 === person); //Expected output: true

//now if we made changes in 'person', it will also reflect in 'person2'
person.name = 'Usman';
// console.log(person.name); //Expected output: Usman
// console.log(person2.name); //Expected output: Usman
//Info: This behaviou is because of the fact that, both 'person' and 'person2' are refrencing to the same memory address.

//? How to avoid this behaviour?
//$ To avoid this behaviour, we can use the concept of Object Clonning

//There are multiple ways to clone an object:

//* 1) Using Spread Operator: 
//Syntax: const/let/var destniation = {...src}
const person3 = {...person}
person.name = "Ali";
// console.log(person.name); //Expected output: 'Ali'
// console.log(person3.name); //Expected output: 'Usman'

//* 2) assign() method: 
//Syntax: destniation = Object.assign({}, src)
const person4 = Object.assign({}, person);
person.height = 6.2;
// console.log(person.height); //Expected output: 6.2
// console.log(person4.height); //Expected output: 5.5

const person5 = Object.assign({}, person);
person.height = 6.2
// console.log(person.height); //Expected output: 6.2
// console.log(person4.height); //Expected output: 5.5

//INFO: By this method, we can also clone multiple object into one object i.e
//Syntax: destniation = Object.assign({}, src1, src2....nth src)
const education = {
    institute: 'UCP',
    grade: 'A+'
}
const address = {
    city: 'Pattoki',
    country: 'Pakistan'
}
let personDetails = Object.assign({}, education, address)
// console.log(personDetails); //Expected output: { institute: 'UCP', grade: 'A+', city: 'Pattoki', country: 'Pakistan' }

//? What if two or more objects have common properties?
education.sameProp = 1
address.sameProp = 4

personDetails = Object.assign({}, education, address);
// console.log(personDetails.sameProp); //Expected output: 4
//it proves last src objects will overwrite the value of that common property

//* 4) iteration:
const newPerson = {
    name: {
        firstName: 'Ali',
        lastName: 'Usman'
    },
    age: 23,
    height: 5.5
}
const person6 = {}
for (const key in newPerson) {
    person6[key] = newPerson[key];
}
console.log(person6.name);
console.log(newPerson.name);

// console.log(person6 === newPerson); //Expected output:{ name: 'Ali', age: 23, height: 6.2, color: 'fair' }

//Note: You can only use the above three methods to make a shallow copy of an object while deeper objects are referenced. i.e
person6.name.firstName = 'Umer';
// console.log(newPerson.name.firstName); //Expected Output: 'Umer'
// console.log(person6.name.firstName);  //Expected Output: 'Umer'

//* 5th) Using JSON.parse() && JSON.stringify():
const person7 = JSON.parse(JSON.stringify(newPerson));

// console.log(person7); 
//Expected Output: {
//   name: { firstName: 'Umer', lastName: 'Usman' },
//   age: 23,
//   height: 5.5
// }

//Note: Although this method solve the problem of cloning deeper objects, but will not be the best option because it does not work with 'function' or 'symbol' properties.
person6.name.firstName = 'Ali';
// console.log(newPerson.name.firstName); //Expected Output: 'Ali'
// console.log(person7.name.firstName);  //Expected Output: 'Umer'