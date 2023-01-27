/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
import CONFIG from '../globals/config';

const PreviousSearchResultData = {
  add(newValue) {
    const dataPreviousSearch = this.get();
    dataPreviousSearch ? this.update(dataPreviousSearch, newValue) : this.push(newValue);
  },

  push(newValue) {
    console.log(newValue);
    const value = new Array(newValue);
    return localStorage.setItem(CONFIG.LOCALSTORAGE_PREVIOUS_SEARCH_RESULT, JSON.stringify(value));
  },

  update(dataPreviousSearch, newValue) {
    if (dataPreviousSearch[0].name !== newValue.name) {
      dataPreviousSearch.unshift(newValue);
      if (dataPreviousSearch.length > 5) dataPreviousSearch.pop();
    }
    return localStorage.setItem(CONFIG.LOCALSTORAGE_PREVIOUS_SEARCH_RESULT, JSON.stringify(dataPreviousSearch));
  },

  get() {
    return JSON.parse(localStorage.getItem(CONFIG.LOCALSTORAGE_PREVIOUS_SEARCH_RESULT));
  },
};

export default PreviousSearchResultData;
