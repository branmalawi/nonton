/* eslint-disable no-empty-function */
// import RestaurantSource from '../../data/restaurant-source';
// import SweetAlert from '../../utils/swal-initiator';
// import { createCatalogueRestoItemTemplate } from '../templates/template-creator';
import SearchResultPresenter from '../../utils/search-result-presenter';

const Search = {
  async render() {
    return `
    <h1>this is Search page</h1>
   `;
  },

  async afterRender() {
    SearchResultPresenter.pushNewPreviousSearchResultData();
  },
};

export default Search;
