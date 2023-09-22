const Swiper = window.Swiper;
const slider = document.querySelector('.news__slider');

export const initNewsSlider = () =>
  slider &&
  new Swiper('.news__slider', {
    navigation: {
      prevEl: '.news__slider-button--prev',
      nextEl: '.news__slider-button--next',
    },
    pagination: {
      el: '.news__slider-pagination',
      clickable: true,
    },
    simulateTouch: false,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });
