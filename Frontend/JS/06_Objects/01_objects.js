//$ Declarations: Two Methods

//* 1st method: objects literals aka non-singleton object

const jersyNumber = Symbol("98") //will be used to create symbol inside object

const playerInfo = {
    playerName: "Babbar Azam",
    [jersyNumber]: 56, //data type: symbol
    "teamName": "Pakistan", //this represent 'key' always treated as string, so no harm done if you explicitly declare it
    "team role": "batsman", //if key is declared as explicit string and contain space between words, it cannot be then, accessed by .(dot) operator
    odiAvg: 59.87,
    t20iAvg: 47.25,
    testAvg: 53
} //non-singleton object

//* how to access object's data
// console.log(playerInfo.odiAvg);
// console.log(playerInfo["teamName"]);
// console.log(playerInfo.teamName);
// console.log(playerInfo.team role); //syntax error
// console.log(playerInfo["team role"]); //Expected: batsman

// console.log(playerInfo.jersyNumber); //Expected: undefined (so this method to access 'symbol' datatype is not valid)
//*valid method
// console.log(playerInfo[jersyNumber]); //Expected: 56

//changing values of objects
playerInfo.t20iAvg = 44.4
// console.log(playerInfo.t20iAvg);

//* freeze an objects to avoid changing object's data
// Object.freeze(playerInfo) 
//Note: once an object has been frozen, there is no way to unfreeze it.
//now try to change data
playerInfo.odiAvg = 99
// console.log(playerInfo.odiAvg); //Expected: 59.87 (same as old)

//* check if object is frozen or not
// console.log(Object.isFrozen()) //Expected: true

playerInfo.greeting = function() {
    console.log(`Hi, ${playerInfo.playerName}`);
}

// playerInfo.greeting();

//* 2nd method: Using Object constructor. By this method singleton object is being created

const darazUser = new Object() //singleton object
// console.log(darazUser); //Expected output: {}

darazUser.userName = "Ali Usman"
darazUser.id = "123weq"
darazUser.email = "abc@example.com"

// console.log(darazUser);

//* nested objects
const amazonUser = {
    email: "abc@example.com",
    fullName: {
        firstName: "Ali",
        lastName: "Usman"
    },
    address: {
        city: "Pattoki",
        province: "Punjab",
        phoneNumber: {
            countryCode: "+92",
            number: 3122123231
        }
    }
}

//* fetching nested keys
// console.log(`User: ${amazonUser.fullName.firstName} ${amazonUser.fullName.lastName} having address: ${amazonUser.address.city} ${amazonUser.address.province}`);

//* concatenating objects
const sourceObj1 = {1: 'a', 2: 'b'}
const sourceObj2 = {3: 'c', 4: 'd'}

//! invalid method
// const targetObj = {sourceObj1, sourceObj2}
// console.log(targetObj); //Expected: { sourceObj1: { '1': 'a', '2': 'b' }, sourceObj2: { '3': 'c', '4': 'd' } }

//* valid method

/*
Syntax: 
Object.assign(target)
Object.assign(target, source1, source2,...., sourceN)

*/
const targetObj1 = Object.assign(sourceObj1, sourceObj2) //by doing this, 'sourceObj1' and 'sourceObj2' will also be concatenated into 'sourceObj1', here is the proof
// console.log(sourceObj1 === targetObj1); //Expected: true
//we can also verify by printing them
// console.log(targetObj1); //Expected: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(sourceObj1); //Expected: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


//to avoid this behavior of copying the result in 1st argument, we can use '{}' as the 1st argument
const targetObj2 = Object.assign({}, sourceObj1, sourceObj2) //preffered method
// console.log(targetObj2); //Expected: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(sourceObj2 === targetObj2); //Expected: false

//if two or more objects have same keys, then during assign(), the key which comes at the end will overwrite all previous values of the same key e.g:
const obj1 = { 1: 'a', 2: 'b'}
const obj2 = { 2: 'c', 3: 'd'}
const obj3 = Object.assign({}, obj1, obj2)
//notice value of '2' is 'c'
// console.log(obj3); //Expected: { '1': 'a', '2': 'c', '3': 'd' }

//now notice the value of '2' when we change the order of parameters
const obj4 = Object.assign({}, obj2, obj1)
// console.log(obj4); //Expected: { '1': 'a', '2': 'b', '3': 'd' }


//Alternative to assign(), easy and simple way: using spread operator
const obj5 = {...obj1, ...obj2}
// console.log(obj5); //Expected: { '1': 'a', '2': 'c', '3': 'd' }

// console.log(Object.keys(amazonUser)); //Array of keys: [ 'email', 'fullName', 'address' ]
// console.log(Object.values(amazonUser)); //Array of values
// console.log(Object.entries(amazonUser)); //Array in array, each array consists of key:value pairs

// console.log(amazonUser.hasOwnProperty('email')); //true
// console.log(amazonUser.hasOwnProperty('isLoggedIn')); //false

//? Object de-structure & JSON API intro
//* Object de-structure
const courseType = {
    courseName: 'DSA',
    courseCode: 'DSASE22',
    courseInstructor: 'Dr. Nabeel Sabir',
}

// const {courseName, courseInstructor} = courseType
// console.log(courseName, courseInstructor);
const {courseName: name, courseInstructor: instructor} = courseType //another way to give alias to key
// console.log(name, instructor);

//* JSON API intro
/*
{ //JSON Objects
    "name": "OOPS",
    "price": 999
}
*/


