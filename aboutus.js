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

var swiper = new Swiper(".team-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
  
      200: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      750: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 1.5,
        spaceBetween: 30
      },
      1100: {
        slidesPerView: 2,
        spaceBetween: 30
      },
    }
  });