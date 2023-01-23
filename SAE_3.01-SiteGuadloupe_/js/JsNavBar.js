
// NavBar
const burgerButton = document.querySelector('.menu-burger');
const NavBarLinks = document.querySelector('.nav-links');
const NavBar = document.querySelector('nav');

burgerButton.addEventListener('click', ()=>{
    NavBarLinks.classList.toggle('apparitionNavMobile');
});

window.addEventListener('scroll' , ()=> {
    if ( window.scrollY > 140){
        NavBar.classList.add('disparitionNav');
    }
    else{
        NavBar.classList.remove('disparitionNav');
    }
})
