const menuBtn = document.querySelector('.menu-btn');
const body = document.querySelector('body');
let menuOpen = false;
menuBtn.addEventListener('click', () =>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        body.classList.add('scroll');
        menuOpen = true;
        document.getElementById('menu-bar').style.setProperty('display', 'block');

    }
    else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        document.getElementById('menu-bar').style.setProperty('display', 'none');
        body.classList.remove('scroll');

    }
});

var slideIndex = 0;
var slides = document.querySelectorAll('#slideshow img');
slides[slideIndex].classList.add('active');

function showSlides() {
slideIndex++;
if (slideIndex >= slides.length) {
slideIndex = 0;
}

for (var i = 0; i < slides.length; i++) {
slides[i].classList.remove('active');
}

slides[slideIndex].classList.add('active');
}

setInterval(showSlides, 5000);