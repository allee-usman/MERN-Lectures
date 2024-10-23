// array declaration methods
let arr = [1, 2, 3, 4, 5]; //litteral methodsm

let myArr = new Array(6, 7, 8, 9, 10); //using constructor

//INFO: It is not compulsory to add 'new', as both 'Array()' and 'new Array()' do the same job.
let myArr1 = Array(11, 12, 13); //without "new" keyword

// console.log(arr); // output: [1,2,3,4,5]
// console.log(myArr); // output: [6, 7, 8, 9, 10]
// console.log(myArr1); // output: [11, 12, 13]

//* get length of array
// console.log(arr.length); // output: 5

//* check if given parameter is an array or not
let myName = 'Ali';
// console.log(Array.isArray(myName)); //output: false

//* convert string into array
// console.log(Array.from(myName)); //output: ['A', 'l', 'i' ]

//* convert object into array
// console.log(Array.from({name: "Ali Usman"})); //output: [] (failed to create due to key:value pairs)

//* make array from multiple variables
let playerName = 'Babbar Azam';
let odiAvg = 56.9;
let jersyNumber = 56;
let teamName = 'Pakistan';

let playerInfo = Array.of(playerName, teamName, odiAvg, jersyNumber);
// console.log(playerInfo); //output: [ 'Babbar Azam', 'Pakistan', 56.9, 56 ]

// => Array methods

//#1 - slice(): It return sub-array of an array without manipulating orignal array
// let subArray = arr.slice(1, 4);
// console.log("Orignal Array: ", arr); // output: Orignal Array: [1, 2, 3, 4, 5]
// console.log('Sliced sub-array: ', subArray); //output: Sliced sub-array: [2, 3, 4]

//#2 - splice(): it returns sub-array of an array manipulating orignal array
// console.log("Orignal Array Before: ", arr);
// let subArray1 = arr.splice(1,4)
// console.log("Spliced sub-array",subArray1);
// console.log("Orignal Array After: ", arr);

//Note: Slice() returns a new array while splice() modifies and then returns orignal array

//#3 - with(): returns a new array by updating the element/index value with new value specified in arguments
// let withArray = arr.with(2,6) // 2 is index and 6 is new value
// console.log(withArray); //output: [1,2,6,4,5]

//#4 - unshift(): adds the specified elements to the beginning of an array and returns the new length of the array
// console.log(arr.unshift(12));
// console.log(arr); //output: [ 12, 1, 2, 3, 4, 5 ]

//#5 - shift(): removes the first element from an array and returns that removed element
// console.log(arr.shift()); //output: 1
// console.log(arr); //output: [2, 3, 4, 5 ]

//#6 - toString():  returns a string representing the specified array and its elements
// console.log(arr.toString()); //output: 1,2,3,4,5
// console.log(typeof arr.toString()); //output: string

//#7 - sort():  sorts the elements of an array in place and returns the reference to the same array, now sorted. Default order is ascending order

let months = ['May', 'Febrauary', 'January', 'March', 'December', 'June'];
let averageScores = [19.5, 23, 56, 53, 1, 88];

averageScores.sort();
months.sort();

// console.log(months); // output: [ 'December', 'Febrauary', 'January', 'June', 'March', 'May' ]
// console.log(averageScores); // output: [ 1, 19.5, 23, 53, 56, 88 ]

//#9 - some(): tests whether at least one element in the array passes the test implemented by the provided function
function checkEven(num) {
	return num % 2 === 0;
}
let oddArray = [1, 3, 5, 7];
// console.log(arr.some(checkEven)); //output: true
// console.log(oddArray.some(checkEven)); //output: false

//#9 - reverse(): reverses an array in place and returns the reference to the same array
// console.log(oddArray.reverse()); //output: [ 7, 5, 3, 1 ]

//#10 - push():  adds the specified elements to the end of an array andreturns the reference to the same array
oddArray.push(9); //push one element at once
// console.log(oddArray); //output: [ 1, 3, 5, 7, 9 ]

oddArray.push(11, 13, 15); //push more than one element at once
// console.log(oddArray); //output: [ 1, 3, 5, 7, 9, 11, 13, 15 ]

//#11 - pop():  removes the last element from an array and returns that element.
// console.log(oddArray.pop()) //output: 15
// console.log(oddArray); //output: [ 1, 3, 5, 7, 9, 11, 13 ]

//#12 - lastIndexOf():  returns the last index at which a given element can be found in the array, or -1 if it is not present
// console.log(oddArray.lastIndexOf(11)) //output: 5
// console.log(oddArray.lastIndexOf(12)) //output: -1

//#13 - keys():  returns a new array iterator object that contains the keys for each index in the array
const keysIterator = oddArray.keys();
for (const key of keysIterator) {
	// console.log(key); // output: 0 1 2 3 4 5 6 7
}

//#14 -  join(): creates and returns a new string by concatenating all of the elements in the specified array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator
const elements = ['Fire', 'Air', 'Water'];
const names = ['Ali Usman'];

// console.log(elements.join()); // output: "Fire,Air,Water"

// console.log(elements.join('')); // output: "FireAirWater"

// console.log(elements.join('-')) // output: "Fire-Air-Water"

// console.log(elements.join('_')); // output: "Fire_Air_Water"

// console.log(names.join('_')); // output: "Ali Usman"

//#15 - indexOf():  returns the first index at which a given element can be found in the array, or -1 if it is not present
oddArray.push(11); //duplicate the element for better understanding, now '11' has two presence, first at 5th index and second at 8th
// console.log(oddArray.indexOf(11)) //output: 5
// console.log(oddArray.indexOf(12)) //output: -1

// 16) includes(): determines whether an array includes a certain value among its entries, returning true or false as appropriate
// console.log(oddArray.includes(11)); //output: true
// console.log(oddArray.includes(12)); //output: false

// 16) forEach(): executes a provided function once for each array element
// oddArray.forEach((element) => console.log(element));

// 17) findIndex(): eturns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned

const isLargeNumber = (element) => element > 10;

// console.log(oddArray.findIndex(isLargeNumber)); //output: 5 (as at 5th index the value(11) is larger than 10)

// 18) find(): returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// console.log(oddArray.find(isLargeNumber)); //output: 11 (as at 5th index the value(11) is larger than 10)

// 19) filter(): creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const numbers = oddArray.filter(isLargeNumber);
const result = words.filter((word) => word.length > 6);

// console.log(result); // output output: Array ["exuberant", "destruction", "present"]
// console.log(numbers); // output output: Array [ 11, 13, 15 , 11 ]

// 20) fill(): changes all elements within a range of indices in an array to a static value. It returns the modified array

// arr.fill(1, 3) //it will changes arr[ 1, 2, 3, 4, 5 ] to arr[ 1, 2, 3, 1, 1 ]
// console.log(arr);

// arr.fill(9, 1, 4) //it will changes arr[ 1, 2, 3, 1, 1 ] to arr[ 1, 9, 9, 9, 1 ]
// console.log(arr);

// arr.fill(6) //it will changes arr[ 1, 2, 3, 1, 1 ] to arr[ 6, 6, 6, 6, 6 ]
// console.log(arr);

// 21) every(): tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value
const isOddNumber = (number) => number % 2 !== 0;
// console.log(oddArray.every(isOddNumber)); //output: true

// 22) copyWithin(): shallow copies part of this array to another location in the same array and returns this array without modifying its length
let newOddArray = oddArray.copyWithin();
// console.log("Orignal Array: ", oddArray); //output: [ 1, 3, 5, 7, 9, 11, 13, 15, 11 ]
// console.log("Copied Array: ", newOddArray);
//changing orignal array
oddArray.pop();
oddArray.pop();
oddArray.pop();

// console.log("3x pop() called, now orignal array is: ", oddArray); //output: [ 1, 3, 5, 7, 9, 11 ]
// console.log("Copied Array: ", newOddArray); //output: [ 1, 3, 5, 7, 9, 11 ]

// 23) concat(): instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array

let evenArray = [0, 2, 4, 6, 8];
let mixArrayUsingConcat = evenArray.concat(oddArray);
// console.log(mixArrayUsingConcat); //output: mixArray[ 0, 2, 4, 6, 8, 1, 3, 5, 7, 9, 11 ]

// Alternative to concat() --> spread operator
let mixArrayUsingSpread = [...evenArray, ...oddArray];
// console.log(mixArrayUsingSpread); //output: mixArray[ 0, 2, 4, 6, 8, 1, 3, 5, 7, 9, 11 ]

// 24) flat():  creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
let unflattedArray = [1, 2, [23, 5, 6], 2, [1, [5, 3, 9]], 19];
// console.log(unflattedArray.flat(Infinity));  //it will flat the array upto n-th level
/* 
output Output:
[
    1, 2, 23, 5, 6,
    2, 1,  5, 3, 9,
    19
] 
*/
// console.log(unflattedArray.flat(1));  //output: [ 1, 2, 23, 5, 6, 2, 1, [ 5, 3, 9 ], 19 ]

// console.log(unflattedArray.flat(0));  //no effect
