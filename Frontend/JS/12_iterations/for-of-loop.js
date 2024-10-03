// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num); //Expected: 1, 2, 3, 4, 5
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const key of map) {
    //* key here holds each kay:value pairs as array
    // console.log(key); //Expected: [ 'IN', 'India' ], [ 'USA', 'United States of America' ], [ 'Fr', 'France' ]
    //* in order to access values, we can simply do:
    // console.log(key[1]); //Expected: India, United States of America, France
    //! Above method is not recommended
}
//? Preferred method
 //* to access values of map
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    // console.log(key, ':-', value); //error, object through for-of loop is not iterable
}