//$ filter creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//* our task here is to filter out the array on the basis of some condition, here is how:
const newArr = [] //create an empty array
numbers.forEach((number) => {
  if (number > 5) {
    newArr.push(number)
  }
})
// NOTE: return statement with forEach loop does not work
// console.log(newArr); //Expected output: [ 6, 7, 8, 9, 10 ]

// INFO: We have compact and efficient alternative to this, that is:
const newArray = numbers.filter((number) => number > 5)
// console.log(newArray) //Expected output: [ 6, 7, 8, 9, 10 ]

//* Print titles of books having genre as fiction and publised after 1995
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1997, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
]

const fictionBooks = books.filter( (book) => book.genre === 'Fiction' && book.publish > 1995) //filter-out books
fictionBooks.forEach( (book) => console.log(book.title)) //iterate through array of books object and print title of each
