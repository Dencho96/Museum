var mySwiper = new Swiper('.swiper-container', {
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
});