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
    breakpoints: {
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 32,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 2,
        },
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
          rows: 2,
        },
      },
    },
    simulateTouch: false,
  });
