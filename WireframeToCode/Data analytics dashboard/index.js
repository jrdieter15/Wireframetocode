
const menuBtn = document.querySelector('.menu-btn')
    backBtn = document.querySelector('.bac-btn')
    menu = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(0)';
})


menuBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(100)';
})