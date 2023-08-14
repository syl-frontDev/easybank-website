const btnhamburger = document.querySelector('#btn__hamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

btnhamburger.addEventListener('click', function () {
    console.log('click hamburger');

    if (header.classList.contains('open')) { // close hamburger menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElements.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });


    } else { // Open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElements.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });

    }


})