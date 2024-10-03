// array declaration methods
let arr = [1, 2, 3, 4, 5] //litteral methods
let myArr = new Array(6,7,8,9,10) //using constructor
// It is not compulsory to add 'new', as both 'Array()' and 'new Array()' perform the same task.
let myArr1 = Array(11, 12, 13) //using constructor
// console.log(arr);
// console.log(myArr);
// console.log(myArr1);

// get length of array
// console.log(arr.length);

let myName = "Ali"
// console.log(Array.isArray(myName)); //Expected: false

//convert string into array
// console.log(Array.from(myName)); //Expected: ['A', 'l', 'i' ]

//convert object into array
// console.log(Array.from({name: "Ali Usman"})); //Expected: [] (failed to create due to key:value pairs)

// make array from multiple variables
let playerName = "Babbar Azam"
let odiAvg = 56.9
let jersyNumber = 56
let teamName = "Pakistan"

let playerInfo = Array.of(playerName, teamName, odiAvg, jersyNumber)
// console.log(playerInfo); //Expected: [ 'Babbar Azam', 'Pakistan', 56.9, 56 ]



//array methods

// 1) slice(): return sub-array of an array without manipulating orignal array
let subArray = arr.slice(1,4) // range(4) is not included
// console.log("Sliced sub-array",subArray);
// console.log("Orignal Array: ", arr);

// 2) splice(): returns sub-array of an array manipulating orignal array
// console.log("Orignal Array Before: ", arr);
// let subArray1 = arr.splice(1,4)
// console.log("Spliced sub-array",subArray1);
// console.log("Orignal Array After: ", arr);

// 3) with(): returns a new array by updating the element/index value with new value specified in arguments
// let withArray = arr.with(2,6) 
// console.log(withArray); //Expected: [1,2,6,4,5]

// 4) unshift(): adds the specified elements to the beginning of an array and returns the new length of the array

// console.log(arr.unshift(2));
// console.log(arr); //Expected: [ 2, 1, 2, 3, 4, 5 ]

// 5) shift(): emoves the first element from an array and returns that removed element

// console.log(arr.shift()); //Expected: 1
// console.log(arr); //Expected: [2, 3, 4, 5 ]

// 6) toString():  returns a string representing the specified array and its elements
// console.log(arr.toString()); //Expected: 1,2,3,4,5
// console.log(typeof arr.toString()); //Expected: string

// 7) toString():  returns a string representing the specified array and its elements
// console.log(arr.toString()); //Expected: 1,2,3,4,5
// console.log(typeof arr.toString()); //Expected: string

// 7) sort():  orts the elements of an array in place and returns the reference to the same array, now sorted
//default order is ascending order
let months = ["May", "Febrauary", "January", "March", "December", "June"]
let averageScores = [19.5, 23, 56, 53, 1, 88]
averageScores.sort()
months.sort()
// console.log(months); 
// console.log(averageScores);

// 8) some(): tests whether at least one element in the array passes the test implemented by the provided function
function checkEven(num) {
    return num % 2 === 0
}
let oddArray = [1,3,5,7]
// console.log(arr.some(checkEven)); //Expected: true
// console.log(oddArray.some(checkEven)); //Expected: false

// 9) reverse(): reverses an array in place and returns the reference to the same array
// console.log(oddArray.reverse()); //Expected: [ 7, 5, 3, 1 ]

// 10) push():  adds the specified elements to the end of an array and returns the new length of the array
oddArray.push(9) //push one element at once
// console.log(oddArray); //Expected: [ 1, 3, 5, 7, 9 ]

oddArray.push(11,13,15) //push more than one element at once
// console.log(oddArray); //Expected: [ 1, 3, 5, 7, 9, 11, 13, 15 ]

// 11) pop():  removes the last element from an array and returns that element. This method changes the length of the array
// console.log(oddArray.pop()) //Expected: 15
// console.log(oddArray); //Expected: [ 1, 3, 5, 7, 9, 11, 13 ]

// 12) lastIndexOf():  returns the last index at which a given element can be found in the array, or -1 if it is not present
// console.log(oddArray.lastIndexOf(11)) //Expected: 5
// console.log(oddArray.lastIndexOf(12)) //Expected: -1

// 13) keys():  returns a new array iterator object that contains the keys for each index in the array
const keysIterator = oddArray.keys()
for(const key of keysIterator) {
    // console.log(key);
}
// Expected output: 0
// Expected output: 1
// Expected output: 2
// Expected output: 3
// Expected output: 4
// Expected output: 5
// Expected output: 6
// Expected output: 7


//  14) join(): creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator
const elements = ['Fire', 'Air', 'Water'];
const names = ['Ali Usman'];

// console.log(elements.join()); // Expected output: "Fire,Air,Water"

// console.log(elements.join('')); // Expected output: "FireAirWater"

// console.log(elements.join('-')) // Expected output: "Fire-Air-Water"

// console.log(elements.join('_')); // Expected output: "Fire_Air_Water"

// console.log(names.join('_')); // Expected output: "Ali Usman"


// 15) indexOf():  returns the first index at which a given element can be found in the array, or -1 if it is not present
oddArray.push(11) //duplicate the elemen for better understanding, now '5' has two presence, first at 5th index and second at 8th
// console.log(oddArray.indexOf(11)) //Expected: 5 (first presence only)
// console.log(oddArray.indexOf(12)) //Expected: -1

// 16) includes(): determines whether an array includes a certain value among its entries, returning true or false as appropriate
// console.log(oddArray.includes(11)); //Expected: true
// console.log(oddArray.includes(12)); //Expected: false

// 16) forEach(): executes a provided function once for each array element
// oddArray.forEach((element) => console.log(element));

// 17) findIndex(): eturns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned

const isLargeNumber = (element) => element > 10

// console.log(oddArray.findIndex(isLargeNumber)); //Expected: 5 (as at 5th index the value(11) is larger than 10)

// 18) find(): returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// console.log(oddArray.find(isLargeNumber)); //Expected: 11 (as at 5th index the value(11) is larger than 10)

// 19) filter(): creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const numbers = oddArray.filter(isLargeNumber)
const result = words.filter((word) => word.length > 6);

// console.log(result); // Expected output: Array ["exuberant", "destruction", "present"]
// console.log(numbers); // Expected output: Array [ 11, 13, 15, 11 ]

// 20) fill(): changes all elements within a range of indices in an array to a static value. It returns the modified array

// arr.fill(1, 3) //it will changes arr[ 1, 2, 3, 4, 5 ] to arr[ 1, 2, 3, 1, 1 ]
// console.log(arr);

// arr.fill(9, 1, 4) //it will changes arr[ 1, 2, 3, 1, 1 ] to arr[ 1, 9, 9, 9, 1 ]
// console.log(arr);

// arr.fill(6) //it will changes arr[ 1, 2, 3, 1, 1 ] to arr[ 6, 6, 6, 6, 6 ]
// console.log(arr);

// 21) every(): tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value
const isOddNumber = (number) => number % 2 !== 0
// console.log(oddArray.every(isOddNumber)); //Expected: true


// 22) copyWithin(): shallow copies part of this array to another location in the same array and returns this array without modifying its length
let newOddArray = oddArray.copyWithin()
// console.log("Orignal Array: ", oddArray); //Expected: [ 1, 3, 5, 7, 9, 11, 13, 15, 11 ]
// console.log("Copied Array: ", newOddArray);
//changing orignal array
oddArray.pop()
oddArray.pop()
oddArray.pop()

// console.log("3x pop() called, now orignal array is: ", oddArray); //Expected: [ 1, 3, 5, 7, 9, 11 ]
// console.log("Copied Array: ", newOddArray); //Expected: [ 1, 3, 5, 7, 9, 11 ]

// 23) concat(): instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array

let evenArray = [0, 2, 4, 6, 8]
let mixArrayUsingConcat = evenArray.concat(oddArray)
// console.log(mixArrayUsingConcat); //Expected: mixArray[ 0, 2, 4, 6, 8, 1, 3, 5, 7, 9, 11 ]

// Alternative to concat() --> spread operator
let mixArrayUsingSpread = [...evenArray, ...oddArray]
// console.log(mixArrayUsingSpread); //Expected: mixArray[ 0, 2, 4, 6, 8, 1, 3, 5, 7, 9, 11 ]


// 24) flat():  creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
let unflattedArray = [1, 2, [23, 5, 6], 2, [1, [5, 3, 9]], 19]
// console.log(unflattedArray.flat(Infinity));  //it will flat the array upto n-th level
/* 
Expected Output:
[
    1, 2, 23, 5, 6,
    2, 1,  5, 3, 9,
    19
] 
*/
// console.log(unflattedArray.flat(1));  //Expected: [ 1, 2, 23, 5, 6, 2, 1, [ 5, 3, 9 ], 19 ]

// console.log(unflattedArray.flat(0));  //no effect

