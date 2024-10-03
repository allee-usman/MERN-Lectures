const coding = ['js', 'ruby', 'java', 'python', 'cpp']

//* with regular function as callback function
coding.forEach(function (val) {
  // console.log(val); //Expected: js, ruby, java, python, cpp
})

//* with arrow function as callback function
coding.forEach((item) => {
  // console.log(item); //Expected: js, ruby, java, python, cpp
})

function printMe(item) {
  console.log(item)
}

// coding.forEach(printMe) //Expected: js, ruby, java, python, cpp

//* forEach function can take upto 3 arguments as callback function, current index/key and array itself
coding.forEach((item, index, arr) => {
  // console.log(item, index, arr);
})

const myCoding = [
  {
    language: 'javascript',
    fileName: 'js',
  },
  {
    language: 'java',
    fileName: 'java',
  },
]

myCoding.forEach((item) => {
//   console.log(item) //Expected: { language: 'javascript', fileName: 'js' }, { language: 'java', fileName: 'java' }
  console.log(item.language); //Expected: javascript, java, python
})
