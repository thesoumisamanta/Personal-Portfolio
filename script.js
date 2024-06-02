//Intro animation
document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#element', {
        strings: ['Web Developer', 'Web Designer', 'Video Editor'],
        typeSpeed: 50,
        loop: true
    });
});



//Navbar Target
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetClass = this.getAttribute('href').substring(1);
        const targetElement = document.querySelector('.' + targetClass);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// Toggle Menu
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');


menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('show');

});
