//? Use case of this loop usually consist of iteration over objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {

    //*'key' holds the keys of the object
    // console.log(key); //Expected: js, cpp, rb, swift
    //* access values of the object
    // console.log(`${myObject[key]}`); //Expected: javascript, C++, ruby, swift by apple
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); //Expected: 0, 1, 2, 3, 4
    //console.log(programming[key]); //Expected: js, rb, py, java, cpp
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key); //Expected: no effect, hence for-in loop can't be used with Map
}