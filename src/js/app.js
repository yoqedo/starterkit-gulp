

const menu = document.querySelector('.menu');
const slide = document.querySelector('.slide-menu');
const blur = document.querySelector('header');
const close = document.querySelector('.close');

menu.addEventListener('click', function () {
    slide.classList.add('slidein');
    blur.classList.add('blur');
});

close.addEventListener('click', function () {
    slide.classList.remove('slidein');
    blur.classList.remove('blur');
});

