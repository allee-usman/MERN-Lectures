//$ //* Now we will use all the concepts of promises, and simply the color change code.

let h1 = document.querySelector('h1');

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            h1.style.color = color;
            resolve("Color was changed successfully!!")
        }, delay);
    })
}

let request = changeColor("red", 1000);

request
	.then((result) => {
		console.log(result);
		return changeColor('orange', 6000);
	})
	.then((result) => {
		console.log(result);
		return changeColor('yellow', 1000);
	})
	.then((result) => {
		console.log(result);
		return changeColor('pink', 1000);
	}).catch( (err) => {
        console.log("Failed to change color!!");
        
    })
	
//Note: We will further optimize this code by using "async & await" keywords.