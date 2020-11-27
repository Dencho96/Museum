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
  loop: 'true',
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.photogallery__btn--next',
    prevEl: '.photogallery__btn--prev',
  },  
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 'auto'
    }
  }
});

var partners = new Swiper('.partners__slider', {
  loop: 'true',
  spaceBetween: 69,
  navigation: {
    nextEl: '.partners__btn--next',
    prevEl: '.partners__btn--prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 5
    }
  }
});

$(".header__btn").click(function(){
  $(".header__btn").toggleClass("is-active");
});

$('.header__btn').on('click', function() {
  $('.header__nav').slideToggle();
});