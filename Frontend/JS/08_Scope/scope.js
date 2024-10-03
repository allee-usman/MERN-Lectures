//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Ali Usman"

    function two(){
        const website = "www.example.com"
        console.log(username);
    }
    // console.log(website); //! will throw error, out of scope
     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5) //!will throw error, since addTwo here is expression and acting as variable, so variable can't be accessed before declaration, hence error expected    
const addTwo = function(num){
    return num + 2
}