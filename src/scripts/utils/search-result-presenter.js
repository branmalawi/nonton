/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/* eslint-disable object-curly-newline */
import SearchResult from '../data/search-result';
import PreviousSearchResultData from '../data/previousSearchResultData';
import { createResultSearchTemplate, createPreviousResultSearchTemplate } from '../views/templates/template-creator';

const SearchResultPresenter = {
  init({ searchContainer, searchForm, searchbar, searchResult }) {
    this.searchResultContainer = searchResult;
    searchbar.addEventListener('input', () => {
      // console.log(keyword);
      if (searchbar.value == '') {
        this.requestPreviuosSearchResult(searchbar.value);
      } else {
        this.requestSearchResultToTMDB(searchbar.value);
      }
    });

    searchbar.addEventListener('focus', () => {
      if (searchbar.value == '') {
        this.requestPreviuosSearchResult();
      }
    });

    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      PreviousSearchResultData.add(searchbar.value);
      this.searchResultContainer.innerHTML = '';
      searchContainer.classList.remove('search-actived');
      searchbar.value = '';
    });
  },

  async requestSearchResultToTMDB(keyword) {
    // ketika input
    const results = await SearchResult.search(keyword);
    console.log(results.length);
    if (results.length) {
      this.searchResultContainer.innerHTML = '';
      results.forEach((result) => {
        this.searchResultContainer.innerHTML += createResultSearchTemplate(result);
      });
    } else {
      this.searchResultContainer.innerHTML = '<p class="font-medium text-center my-2">Nothinng Found</p>';
    }
  },

  requestPreviuosSearchResult() {
    // ketika focus dan ketika input kosong
    const previousResults = PreviousSearchResultData.get();
    if (previousResults) {
      this.searchResultContainer.innerHTML = '';
      previousResults.forEach((previousResult) => {
        this.searchResultContainer.innerHTML += createPreviousResultSearchTemplate(previousResult);
      });
    } else {
      this.searchResultContainer.innerHTML = '';
    }
  },

  pushNewPreviousSearchResultData() {
    // ketika submit
  },

  renderSearchResult() {
    // ketika input
  },
};

export default SearchResultPresenter;
