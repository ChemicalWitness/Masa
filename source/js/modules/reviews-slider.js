const Swiper = window.Swiper;
const reviewsSlider = document.querySelector('.reviews__slider');


export const initReviewsSlider = () =>
  reviewsSlider &&
  new Swiper('.reviews__slider', {
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
    scrollbar: {
      el: '.reviews__scroll',
      draggable: true,
    },
    simulateTouch: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
  });
