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

//Pop up modal
const modalContainer = document.querySelector('.modal-container');
const modalClose = document.querySelector('.button-x');

if(modalContainer){
    //Remove modal when user clicks x
    modalClose.addEventListener('click', () =>{
        modalContainer.classList.remove('modal-container-active');
    });

    //Initiate pop up window after 1s of screen time
    window.addEventListener('load', ()=>{
        setTimeout(()=>{
            modalContainer.classList.add('modal-container-active');
        }, 1000)
    });
}