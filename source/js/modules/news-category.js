const wrapper = document.querySelector('.news__category-list');
const container = document.querySelector('.news__category-wrapper');

export const onChangeCategory = () => {
  if (!container) {
    return;
  }
  let currentCategoryLink = wrapper.querySelector('.news__category-link--current');
  wrapper.addEventListener('click', (event) => {
    if (event.target.matches('.news__category-link')) {
      currentCategoryLink.classList.remove('news__category-link--current');
      event.target.classList.add('news__category-link--current');
      currentCategoryLink = event.target;
    }
  });
};
