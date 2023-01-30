/* eslint-disable no-multi-assign */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable object-curly-newline */
import UrlParser from '../routes/url-parser';

const SearchInitiator = {
  init({ body, searchContainer, searchForm, searchbar, navbar, btnOpenSearch, btnSubmitandClose }) {
    searchbar.addEventListener('focus', () => {
      this.searchActived(body, searchContainer, navbar);
    });

    window.addEventListener('click', (e) => {
      if (e.target.id !== 'searchInput' && !e.target.classList.contains('searchResult')) {
        this.searchbarBlur(searchContainer, navbar, body);
      }
    });

    btnOpenSearch.addEventListener('click', () => {
      searchbar.dispatchEvent(new Event('focus'));
    });

    btnSubmitandClose.addEventListener('click', () => {
      this.searchUnactiveOrSubmit(body, searchContainer, navbar, searchForm);
    });

    window.onload = window.onhashchange = () => {
      navbar.classList.add('p-2');
      const path = UrlParser.parseActiveUrlWithoutCombiner().resource;
      path == 'detail' ? navbar.classList.add('hidden') : navbar.classList.remove('hidden');
    };
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
