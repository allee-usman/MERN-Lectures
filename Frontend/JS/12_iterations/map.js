//$ map() creates a new array populated with the results of calling a provided function on every element in the calling array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//* our task here is to find square of each element of the array
const newArray = numbers.map((number) => number**2)
// console.log(newArray) //Expected output: [ 1, 4, 9, 16, 25.... ]

//? +++++++++++++++ Chaning through example ++++++++++++++++

//* You are given salaries of employees in an array, company want to increase the employees salaries by 10%. Your task is to print the employees having salaries more than 50k after 10% increase.
let salaries = [10000, 12000, 72000, 45000, 43000, 32000, 44000, 49000]

//$ function to update salary
const updateSalary = (salary) => {
    return (salary += salary * 0.1)
}

//$ function to find more than 50k salary holding employees
const findEmployees = (salary) => {
    return (salary >= 50000)
}
//Note: filter().map() is called chaning
console.log(salaries.map(updateSalary).filter(findEmployees)) //Expected output: [ 79200, 53900 ]

