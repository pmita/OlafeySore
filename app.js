//Grab Nav related elements
const burgerButton = document.querySelector('.burger');
const navItems = document.querySelector('.nav-links');

function animateBurger(){
    burgerButton.addEventListener('click', ()=>{
        //Toggle the nav-active class on every click
        navItems.classList.toggle('nav-active');
    });
}

animateBurger();