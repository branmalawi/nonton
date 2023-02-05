import NontonIndexeddb from '../data/nontonIndexeddb';
import { createButtonWatchListDetailTemplate, createButtonWatchedListDetailTemplate } from '../views/templates/template-creator';

const ButtonWatchlistManager = {
  async init({ buttonWatchlistContainer, itemData }) {
    this.container = buttonWatchlistContainer;
    this.data = itemData;
    await this.renderButton();
  },

  async renderButton() {
    // eslint-disable-next-line no-unused-expressions, no-unneeded-ternary
    await this.data.btn_watchlist ? this.renderWatchedlistButton() : this.renderWatchlistButton();
  },

  renderWatchlistButton() {
    this.container.innerHTML = createButtonWatchListDetailTemplate();
    const addToListButton = document.querySelector('#button-list');
    addToListButton.addEventListener('click', async (event) => {
      event.preventDefault();
      this.data.btn_watchlist = true;
      await NontonIndexeddb.putData(this.data);
      this.renderWatchedlistButton();
    });
  },

  renderWatchedlistButton() {
    this.container.innerHTML = createButtonWatchedListDetailTemplate();
    const addToListButton = document.querySelector('#button-list');
    addToListButton.addEventListener('click', async (event) => {
      event.preventDefault();
      this.data.btn_watchlist = false;
      await NontonIndexeddb.putData(this.data);
      this.renderWatchlistButton();
    });
  },
};

export default ButtonWatchlistManager;
