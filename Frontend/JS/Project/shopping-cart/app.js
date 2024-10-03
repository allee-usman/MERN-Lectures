/* total item count */
function updateTotalItem() {
	let totalItems = document.querySelectorAll('.cart-items').length;
	let totalItemCountElements = document.querySelectorAll('.total-item-count');
	let count = 0;

	// Update the content for all elements
	totalItemCountElements.forEach((element) => {
		element.textContent =
			count++ === 0 ? `${totalItems} Items in cart` : `${totalItems} items`;
	});
}

updateTotalItem();

/* item quantity code */
const itemCountBox = document.querySelectorAll('.item-count-box');

itemCountBox.forEach((box) => {
	const minusBtn = box.querySelector('.decrease-quantity');
	const addBtn = box.querySelector('.increase-quantity');
	const itemCount = box.querySelector('#item-count');

	minusBtn.addEventListener('click', () => {
		let currentValue = parseInt(itemCount.textContent);
		if (currentValue == 1) {
		}
		itemCount.textContent = --currentValue;
	});

	addBtn.addEventListener('click', () => {
		let currentValue = parseInt(itemCount.textContent);
		itemCount.textContent = ++currentValue;
	});
});

/* remove item */
const cartItems = document.querySelectorAll('.cart-items');

cartItems.forEach((item) => {
	const deleteBtn = item.querySelector('.remove-item-box');
	deleteBtn.addEventListener('click', () => {
		const cartItemContainer = document.querySelector('.cart-left-body');
		cartItemContainer.removeChild(item);
		updateTotalItem();
	});
});

/* clear cart code */
const clearCartBtn = document.querySelector('.clear-cart-btn');
clearCartBtn.addEventListener('click', () => {
	// const cartItemContainer = document.querySelector('.cart-left-body');
	// cartItemContainer.innerHTML = '';
	// updateTotalAmount();
	// updateTotalItem();
	let cartLeft = document.querySelector('#cart-left');
	let cartRight = document.querySelector('#cart-right');
	cartLeft.innerHTML = '';
	cartRight.innerHTML = '';
});

/* grand total code */
function updateTotalAmount() {
	const priceElements = document.querySelectorAll('.item-price');
	const grandTotalElement = document.querySelector('#grand-total');
	const deliveryCharges = document.querySelector('.delivery-charges');
	const discountPrice = document.querySelector('#discount-price');

	// //if cart is empty
	// if (priceElements.length === 0) {
	// 	grandTotalElement.textContent = '0.00';
	// 	deliveryCharges.textContent = '0.00';
	// 	discountPrice.textContent = '0.00';
	// 	return;
	// }

	let grandTotal = 0.0;
	priceElements.forEach((element) => {
		let price = element.textContent.slice(1);
		grandTotal += parseFloat(price);
	});

	let deliveryAmount = deliveryCharges.textContent.slice(1);
	grandTotal += parseFloat(deliveryAmount);

	let discountAmount = discountPrice.textContent.slice(1);
	grandTotal -= parseFloat(discountAmount);
	grandTotalElement.textContent = '$' + grandTotal.toFixed(2);
}
updateTotalAmount();
