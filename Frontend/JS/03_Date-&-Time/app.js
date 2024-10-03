let currentDate = new Date()
// console.log(currentDate);
// console.log(typeof currentDate); //Expected: object

// let customDate = new Date(2024, 0, 19) //with default time(12:00 AM)
let customDate = new Date("06-08-2024") //with custom formate i.e MM-DD-YY
// let customDate = new Date(2024, 0, 19, 5, 4) //with custom time

// console.log(customDate);
// console.log(customDate.toString());
// console.log(customDate.toDateString()); //Expected: Fri Jan 19 2024
// console.log(customDate.toISOString()); //Expected: 2024-01-19
// console.log(customDate.toLocaleDateString()); //Expected: 1/19/2024
// console.log(customDate.toLocaleString()); //Expected: 1/19/2024, 12:00:00 AM
// console.log(customDate.toUTCString()); //Expected: Fri, 19 Jan 2024 00:00:00 GMT

// ++++++++++++++ TimeStamp ++++++++++++++
let timeStamp = Date.now()
// console.log(timeStamp); //returns date in milliseconds from 1970
// console.log(customDate.getTime()); //returns time in milliseconds

//covert date in seconds
console.log(Math.floor(Date.now()/1000));


