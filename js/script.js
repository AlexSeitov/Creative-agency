const menuToggle = document.querySelector('.header__mobile-icon');
const mobileNavContainer = document.querySelector('.header__menu');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('header__mobile-icon_active');
    mobileNavContainer.classList.toggle('header__menu_active');
}