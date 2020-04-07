const menuToggle = document.querySelector('');
const mobileNavContainer = document.querySelector('');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('');
    mobileNavContainer.classList.toggle('');
}