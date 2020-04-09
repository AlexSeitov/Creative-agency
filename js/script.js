// mobile menu

const menuToggle = document.querySelector('.header__mobile-icon');
const mobileNavContainer = document.querySelector('.header__menu');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('header__mobile-icon_active');
    mobileNavContainer.classList.toggle('header__menu_active');
}

// slider =======================================================

let slideIndex = 1,
    slides = document.querySelectorAll('.slider__item'),
    dotsWrap = document.querySelector('.testimonials__dots'),
    dots = document.querySelectorAll('.dots__item');

showSlides(slideIndex);

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');
    dots.forEach((item) => item.classList.remove('dots__item_active'));

    slides[slideIndex - 1].style.display = 'flex';
    dots[slideIndex - 1].classList.add('dots__item_active');
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

dotsWrap.addEventListener('click', function(event) {
    for (let i = 0; i <= dots.length; i++) {
        if (event.target.classList.contains('dots__item') && event.target == dots[i-1]) {
            currentSlide(i);
        }
    }
});