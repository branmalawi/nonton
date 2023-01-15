/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
import CONFIG from '../globals/config';

const PreviousSearchResultData = {
  add(newValue) {
    const dataPreviousSearch = this.get();
    console.log(dataPreviousSearch);
    dataPreviousSearch ? this.update(dataPreviousSearch, newValue) : this.push(newValue);
  },

  push(newValue) {
    console.log(newValue);
    const value = new Array(newValue);
    return localStorage.setItem(CONFIG.LOCALSTORAGE_PREVIOUS_SEARCH_RESULT, JSON.stringify(value));
  },

  update(dataPreviousSearch, newValue) {
    dataPreviousSearch.unshift(newValue);
    if (dataPreviousSearch.length > 5) dataPreviousSearch.pop();
    return localStorage.setItem(CONFIG.LOCALSTORAGE_PREVIOUS_SEARCH_RESULT, JSON.stringify(dataPreviousSearch));
  },

  get() {
    return JSON.parse(localStorage.getItem(CONFIG.LOCALSTORAGE_PREVIOUS_SEARCH_RESULT));
  },
};

export default PreviousSearchResultData;
