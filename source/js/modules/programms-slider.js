const Swiper = window.Swiper;
const programmsSlider = document.querySelector('.programms__slider');


export const initProgrammsSlider = () =>
  programmsSlider &&
  new Swiper('.programms__slider', {
    navigation: {
      nextEl: '.programms__button--next',
      prevEl: '.programms__button--prev',
    },
    scrollbar: {
      el: '.programms__scroll',
      draggable: true,
    },
    simulateTouch: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });
