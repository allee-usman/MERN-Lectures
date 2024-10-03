// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//    console.log(`Value of i is ${index}`);
    
// }

//? ++++++++++++++++ Understanding break keyword using example ++++++++++++++++
//* Write a JS code to print numbers upto 30 except those which are divisible by 2. Hint: continue statement

let limit = 30
for (let i = 1; i <= 30; i++) {
    if(i % 2 === 0) {
        continue
    }
    // console.log(i); 
}

//* Write a JS code which checks if given array has any number divisible by 7. If yes, return true otherwise false. Hint: break statement

let numberArray = [12, 23, 45, 56, 7, 89]
let result = false

const check = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if(i % 7 == 0) {
            result = true
            break;
        }
    }
}
check(numberArray)
// console.log(result);


