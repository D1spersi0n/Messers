var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });
  let burger = document.querySelector('.burger__menu')
  let burger2 = document.querySelector('.burger__menu__active')
let body__scroll = document.querySelector('body')
let header = document.querySelector('.header__nav')
let form = document.querySelector('form')
let form__btn = document.querySelector('.form__btn')
burger.addEventListener('click', function() {
    burger.classList.toggle('burger__menu__active')
    body__scroll.classList.toggle('body__active')
    header.classList.toggle('header__nav__active')
});
  if(document.documentElement.clientWidth < 1060) {
    form__btn.addEventListener('click', function(){
    location.href = 'contacts.html'
  })
  }
let enter = document.querySelector('.enter input')
let submit = document.querySelector('.submit')
submit.addEventListener('click', function(){
  submit.value = 'Отправлено';
  enter.classList.add('form__submited')
})