const wrapper = document.querySelector('.news__category-list');
let currentCategoryLink = wrapper.querySelector('.news__category-link--current');

export const onChangeCategory = () => {
  wrapper.addEventListener('click', (event) => {
    if (event.target.matches('.news__category-link')) {
      currentCategoryLink.classList.remove('news__category-link--current');
      event.target.classList.add('news__category-link--current');
      currentCategoryLink = event.target;
    }
  });
};
