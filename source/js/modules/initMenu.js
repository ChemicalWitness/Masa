import {Accordions} from './accordions';
// import { accordions, initAccordions } from "./init-accordion";

const header = document.querySelector('.header');
const headerNav = document.querySelector('.header__nav');
const headerWrapper = document.querySelector('.header__wrapper');
const headerMainNav = document.querySelector('.header__nav-list');
const headerToggle = document.querySelector('.header__button-toggle');
const headerToggleIcon = document.querySelector('.header__button-toggle-icon');
const headerNavList = document.querySelectorAll('.header__accordion-list');
const body = document.querySelector('body');
const headerNavContent = document.querySelector('.header__nav-inner-wrapper');
const headerNavElements = document.querySelectorAll('.header__nav-element');


const openMenu = () => {
  const accordions = new Accordions();
  headerNavContent.classList.remove('header__nav-inner-wrapper--closed');
  header.classList.add('header--overlay');
  headerNav.classList.add('header__nav--active');
  headerToggle.classList.add('header__button-toggle--active');
  headerToggleIcon.classList.add('header__button-toggle-icon--active');
  headerNavList.forEach((i) => {
    i.classList.add('header__accordion-list--active');
  });
  setTimeout(() => {
    accordions.openAccordion(headerNav);
  }, 30);
  body.classList.add('scroll-lock');
};

const closeMenu = () => {
  const accordions = new Accordions();
  header.classList.remove('header--overlay');
  headerNav.classList.remove('header__nav--active');
  headerToggle.classList.remove('header__button-toggle--active');
  headerToggleIcon.classList.remove('header__button-toggle-icon--active');
  headerNavList.forEach((i) => {
    i.classList.remove('header__accordion-list--active');
  });
  headerNavContent.classList.add('header__nav-inner-wrapper--closed');
  setTimeout(() => {
    accordions.closeAccordion(headerNav);
    accordions.closeAllAccordion(headerWrapper);
    accordions.closeAllAccordion(headerMainNav);
  }, 30);
  body.classList.remove('scroll-lock');
};

const onToggleClick = () => {
  if (headerNav.classList.contains('header__nav--active')) {
    closeMenu();
  } else {
    openMenu();
  }
};

const onOverlayClick = (event) => {
  const accordions = new Accordions();
  if (!event.target.closest('.header__nav')) {
    accordions.closeAccordion(headerNav);
    accordions.closeAllAccordion(headerWrapper);
    closeMenu();
  }
};

const initMenuLinks = () => {
  headerNavElements.forEach((item) => {
    item.addEventListener('click', () => {
      const accordions = new Accordions();
      if (item.classList.contains('is-active')) {
        setTimeout(() => {
          accordions.closeAccordion(item);
        });
      } else {
        setTimeout(() => {
          accordions.openAccordion(item);
        }, 30);
      }
    });
  });
};

const initMenu = () => {
  if (headerToggle) {
    headerNav.classList.remove('header__nav--nojs');
    headerToggle.addEventListener('click', onToggleClick);
    header.addEventListener('click', onOverlayClick);
  }
  initMenuLinks();
};

// const initMenu = () => {
//   headerNav.classList.remove('header__nav--nojs');
//   headerNav.classList.add('header__nav--closed');
//   initAccordions();

//   headerToggle.addEventListener('click', () => {
//     if (headerNav.classList.contains('header__nav--closed')) {
//       accordions.openAccordion(headerMainNav);
//       headerNav.classList.remove('header__nav--closed');
//       headerOverlay.classList.add('header__overlay--active');
//       headerNav.classList.add('header__nav--active');
//       headerToggle.classList.add('header__button-toggle--active');
//       headerToggleIcon.classList.add('header__button-toggle-icon--active');
//       headerNavList.forEach((i) => {
//         i.classList.add('header__accordion-list--active');
//       });
//       document.addEventListener('click', onOverlayClick);
//     } else {
//       closeMenu();
//       headerNav.classList.add('header__nav--closed');
//       document.removeEventListener('click', onOverlayClick);
//     }
//   });

//   const closeMenu = () => {
//     accordions.closeAccordion(headerNav);
//     accordions.closeAllAccordion(headerMainNav);
//     headerOverlay.classList.remove('header__overlay--active');
//     headerNav.classList.remove('header__nav--active');
//     headerToggle.classList.remove('header__button-toggle--active');
//     headerToggleIcon.classList.remove('header__button-toggle-icon--active');
//     headerNavList.forEach((i) => {
//       i.classList.remove('header__accordion-list--active');
//     });
//   };

//   const onOverlayClick = (evt) => {
//     if (evt.target === headerOverlay) {
//       closeMenu();
//     }
//   };

// };

export {initMenu};
