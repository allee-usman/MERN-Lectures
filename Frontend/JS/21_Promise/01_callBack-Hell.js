let h1 = document.querySelector('h1');

//* We want to change the color of h1 multiple times with the delay of 1 second

// setTimeout(() => {
//     h1.style.color = 'orange';
// }, 1000);
// setTimeout(() => {
//     h1.style.color = 'red';
// }, 2000);
// setTimeout(() => {
//     h1.style.color = 'blue';
// }, 3000); //not a best practice

//to make it more efficient, make a function
// function changeColor(color, delay) {
//     setTimeout( () => {
//         h1.style.color = color;
//     }, delay);
// }

// changeColor("red", 1000);
// changeColor("green", 1000);
// changeColor("orange", 1000); //*the problem here is, since all three calls delaying for 1s, hence orange color will be shown to the screen as it will executed at last

//? let's modify code to avoid this problem
function changeColor(color, delay, nextColorChange) {
	setTimeout(() => {
		h1.style.color = color;
        if(nextColorChange){
            nextColorChange();
        }
	}, delay);
}
changeColor("red", 1000, () => {
    changeColor('green', 1000, () => {
			changeColor('orange', 1000, () => {
				changeColor('blue', 1000, () => {
					changeColor('pink', 1000);
				});
			});
		}); //nesting in callback
});

//? this callback nesting is called callback hell

//* you may think the above approach as stupid, because we can achieve the same with simpler code, but the fact is, in programming we sometimes deals this kind of situation i.e API call etc.

//$ Callback hell is a real problem in programming, to avoid this problem we can use Promises/ async & await keywords