//declaraion methods
const myName = "Ali Usman"
// console.log(myName);
const regNum = new String("L1S22BSSE0074@UCP.EDU.PK")
// console.log(regNum);

//prefered method to output
// console.log(`Hello, my name is ${myName} and my registration number is ${regNum}.`)

//string methods
// 1) anchor(): creates a string that embeds this string in an <a> element with a name
// console.log(myName.anchor("ali"));

// 2) charAt(): return character located at the position specified by integer passed as an argument
// console.log(myName.charAt(2)); //expected value: i

// 3) big(): creates a string that embeds this string in a <big> element (<big>str</big>), which causes this string to be displayed in a big font.
// console.log(myName.big());

// 4) bold(): creates a string that embeds this string in a <b> element (<b>str</b>), which causes this string to be displayed as bold.
// console.log(myName.bold());

// 5) charCodeAt(): returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
// console.log(myName.charCodeAt(1)); //Expected: A->108

// 6) concat(): concatenates the string arguments to the calling string and returns a new string.
// const newStr = myName.concat(regNum)
// console.log(newStr);

// 7) endsWith(): determines whether a string ends with the characters of this string, returning true or false as appropriate
// console.log(myName.endsWith('n')); //Expected: true
// console.log(myName.endsWith('a')); //Expected: false

// 8) fontColor(): creates a string that embeds this string in a <font> element ( <font color="...">str</font> ), which causes this string to be displayed in the specified font color
// console.log(myName.fontcolor('red'));

// 9) includes(): performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate
// console.log(myName.includes('A')); //Expected: true
// console.log(myName.includes('a')); //Expected: true
// console.log(myName.includes('B')); //Expected: false

// 10) indexOf(): searches this string and returns the index of the first occurrence of the specified substring
// console.log(myName.indexOf('A')); //Expected: 0

// 11) lastindexOf(): searches this string and returns the index of the last occurrence of the specified substring
// console.log(myName.lastIndexOf('A')); //Expected: 0

// 12) link(): screates a string that embeds this string in an <a> element ( <a href="...">str</a> ), to be used as a hypertext link to another URL.
// console.log(myName.link()); //with undefined href attribute
// console.log(myName.link('www.google.com')); //with href attribute having value as 'www.google.com'

// 13) match():  retrieves the result of matching this string against a regular expression.
// const paragraph = 'Hi, My name is Ali Usman & I love coding';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);
// console.log(found); // Expected output: Array ["H", "M", "A", "U"]

// 13) matchAll():  returns an iterator of all results matching this string against a regular expression, including capturing groups.
// const paragraph = 'Hi, My name is Ali Usman & I love coding';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);
// console.log(found); // Expected output: Array ["H", "M", "A", "U"]

// 14) padEnd(): pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string
// console.log(myName.padEnd(20,'*')); //Expected: 'Ali Usman***********'
// console.log(myName.padEnd(12)); //Expected: 'Ali Usman   '

// 15) padStart(): pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the start of this string
// console.log(myName.padStart(20,'*')); //Expected: '***********Ali Usman'
// console.log(myName.padStart(12)); //Expected: '   Ali Usman'

// 16) repeat(): constructs and returns a new string which contains the specified number of copies of this string, concatenated together.
// const mood = 'Happy! ';
// console.log(`I feel ${mood.repeat(3)}`); // Expected output: "I feel Happy! Happy! Happy! "

// 17) replace(): returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.
// const paragraph = "I think Ruth's dog is cuter than your dog!";
// const newParagraph = paragraph.replace("Ruth's", 'my');
// console.log(newParagraph); // Expected output: "I think my dog is cuter than your dog!"

// const paragraph = "I think Ruth's dog is cuter than your dog!";
// const newParagraph = paragraph.replace("dog", 'monkey');
// console.log(newParagraph); // Expected output: "I think my monkey is cuter than your dog!"

// 18) replaceAll(): returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged

// const paragraph = "I think Ruth's dog is cuter than your dog!";
// const newParagraph = paragraph.replaceAll("dog", 'monkey');
// console.log(newParagraph); // Expected output: "I think my monkey is cuter than your monkey!"

// 19) search(): executes a search for a match between a regular expression and this string, returning the index of the first match in the string
// const str = 'Banana'
// console.log(str.search('n')); //Expected: 2

// 20) slice():  extracts a section of this string and returns it as a new string, without modifying the original string.
// const str = `Hello, my name is ${myName} and my registration # is ${regNum}`
// let slicedRegNum = str.slice(53)
// console.log(slicedRegNum); //Expected: L1S22BSSE0074@UCP.EDU.PK
// let slicedMyName = str.slice(18, 27);
// console.log(slicedMyName); //Expected: Ali Usman
// let negSlicedMyName = str.slice(-59, -49);
// console.log(negSlicedMyName); //Expected: Ali Usman
// let negSlicedRegNum = str.slice(-24);
// console.log(negSlicedRegNum); //Expected: L1S22BSSE0074@UCP.EDU.PK


// 21) split(): takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array
// const str = `Hello, my name is ${myName} and my registration # is ${regNum}`;

// const words = str.split(' ');
// console.log(words); // Array of words
// console.log(words[3]); // Expected output: "name"

// const chars = str.split('');
// console.log(chars); // Array of characters
// console.log(chars[8]); // Expected output: "y"

// const strCopy = str.split();
// console.log(strCopy); // Expected output: Array ["Hello, my name is Ali Usman and my registration # is L1S22BSSE0074@UCP.EDU.PK"]

// 22): determines whether this string begins with the characters of a specified string, returning true or false as appropriate
// console.log(myName.startsWith('A')); //Expected: true
// console.log(myName.startsWith('a')); //Expected: false


// 23) substr()/substring(): returns a portion of this string, starting at the specified index and extending for a given number of characters afterwards
// console.log(myName.substring(0, 3)); //Expected: Ali
// console.log(myName.substr(4)); //Expected: Usman


// 23) toLowerCase(): returns this string converted to lower case, according to any locale-specific case mappings
// console.log(myName.toLowerCase()); //Expected: ali usman


// 24) toUpperCase(): returns this string converted to lower case, according to any locale-specific case mappings
// console.log(myName.toUpperCase()); //Expected: ALI USMAN

// 25) toString(): converts string object/number etc into string
// console.log(typeof regNum); //object
// console.log(typeof regNum.toString()); // string
// let number = 11
// console.log(typeof number); // number
// console.log(typeof number.toString()); // string

// 26) trim(): removes whitespace from both ends of this string and returns a new string, without modifying the original string
// let str = '    Ali Usman    '
// console.log(str); //Expected: '    Ali Usman    '
// console.log(str.trim()); //Expected: 'Ali Usman'


// 27) valueOf(): returns this string value
console.log(regNum.valueOf());








