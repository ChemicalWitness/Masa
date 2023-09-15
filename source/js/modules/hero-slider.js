const Swiper = window.Swiper;
const slider = document.querySelector('.hero__wrapper');

const heroSlider = () =>
  slider &&
  new Swiper('.hero__wrapper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.hero__slide-pagination',
      clickable: true,
    },
    simulateTouch: false,
    autoplay: {
      delay: 3000,
    },
  });

export {heroSlider};
