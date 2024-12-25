//$: module.export is a special object which contains all the information which a file wants to send/export to other files requireing it.

console.log(module); //output: object

// const sum = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const g = 9.8;
// const PI = 3.1415;

// module.exports = "Ali Usman";
//Note: If no export statement, then empty object ( {} ) is returned.

//* Method-1:
module.exports.sum = (a, b) => a + b;
module.exports.subtract = (a, b) => a - b;
module.exports.g = 9.8;
module.exports.PI = 3.1415;

//Note: removing module. should also works perfectly i.e insted of module.exports.PI, use exports.PI

//* Method-2:
// let exportModule = {
//     sum: sum,
//     subtract: subtract,
//     g: g,
//     PI: PI
// }
// module.exports = exportModule;

//* Method-3:
// module.exports = {
// 	sum: sum,
// 	subtract: subtract,
// 	g: g,
// 	PI: PI,
// };
