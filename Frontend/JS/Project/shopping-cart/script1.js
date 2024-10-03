// Select all the 'counter' divs
const counters = document.querySelectorAll('.counter');

// Loop through each 'counter' div
counters.forEach((counter) => {
	// Select the plus, minus buttons, and the p tag inside the current counter
	const plusBtn = counter.querySelector('.plus-btn');
	const minusBtn = counter.querySelector('.minus-btn');
	const counterValue = counter.querySelector('.counter-value');

	// Add event listener to the plus button to increment the number
	plusBtn.addEventListener('click', () => {
		let currentValue = parseInt(counterValue.textContent);
		counterValue.textContent = currentValue + 1;
	});

	// Add event listener to the minus button to decrement the number
	minusBtn.addEventListener('click', () => {
		let currentValue = parseInt(counterValue.textContent);
		counterValue.textContent = currentValue - 1;
	});
});
