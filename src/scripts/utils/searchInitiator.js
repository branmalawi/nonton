/* eslint-disable no-param-reassign */
/* eslint-disable object-curly-newline */

const SearchInitiator = {
  init({ body, searchContainer, searchForm, searchbar, navbar, btnOpenSearch, btnSubmitandClose }) {
    searchbar.addEventListener('focus', () => {
      this.searchActived(body, searchContainer, navbar);
    });

    searchbar.addEventListener('blur', () => {
      console.log('ok');
      this.searchbarBlur(searchContainer, navbar, body);
    });

    btnOpenSearch.addEventListener('click', () => {
      searchbar.dispatchEvent(new Event('focus'));
      // this.searchActived(body, searchContainer, navbar);
    });

    btnSubmitandClose.addEventListener('click', () => {
      this.searchUnactiveOrSubmit(body, searchContainer, navbar, searchForm);
    });
  },

  searchActived(body, searchContainer, navbar) {
    searchContainer.classList.add('search-actived');
    body.classList.add('overflow-hidden');
    navbar.classList.remove('p-2');
    if (window.innerWidth < 640) {
      navbar.classList.remove('translate-y-[-100%]');
    }
  },

  searchbarBlur(searchContainer, body) {
    if (window.innerWidth > 640) {
      searchContainer.classList.remove('search-actived');
      body.classList.remove('overflow-hidden');
    }
  },

  searchUnactiveOrSubmit(body, searchContainer, navbar, searchForm) {
    if (window.innerWidth < 640) {
      searchContainer.classList.remove('search-actived');
      body.classList.remove('overflow-hidden');
      navbar.classList.add('p-2');
    } else {
      searchForm.dispatchEvent(new Event('submit'));
    }
  },
};
export default SearchInitiator;
