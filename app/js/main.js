var mySwiper = new Swiper('.hero__slider', {
    slidesPerView: 1,
    loop: 'true',
    navigation: {
        nextEl: '.hero__btn--next',
        prevEl: '.hero__btn--prev',
      },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    autoplay: {
      delay: 3000,
    },
});

var photogallery = new Swiper('.photogallery__slider', {
  slidesPerView: 'auto',
  loop: 'true',
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.photogallery__btn--next',
    prevEl: '.photogallery__btn--prev',
  },
});

var photogallery = new Swiper('.partners__slider', {
  slidesPerView: 5,
  loop: 'true',
  spaceBetween: 69,
  navigation: {
    nextEl: '.partners__btn--next',
    prevEl: '.partners__btn--prev',
  },
});