const mainContainer = document.querySelector('.main-container');
const openBtn = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');
const circle = document.querySelector('.circle');

openBtn.addEventListener('click', () => {
    mainContainer.classList.add('show-nav');
    circle.style.transform = 'rotate(-70deg)';
});
closeBtn.addEventListener('click', () => {
    mainContainer.classList.remove('show-nav');
    circle.style.transform = 'rotate(0)';
});