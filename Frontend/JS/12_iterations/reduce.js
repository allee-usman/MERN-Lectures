//$ executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

const productPrices = [1250, 3200, 2345, 1299, 76, 345]

const deliveryCharges = 250
const subTotal = productPrices.reduce((accumulator, price) => accumulator + price, deliveryCharges)
// console.log(subTotal); //Expected output: 8765

//Note: if initialValue is not assigned, then value at 0-th index of the array will be used as the initial value and iteration starts from the next element (index 1 instead of index 0).
const grandTotal = productPrices.reduce((accumulator, price) => accumulator + price)
console.log(grandTotal); //Expected output: 8515
