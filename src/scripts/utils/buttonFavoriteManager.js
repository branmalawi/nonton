import NontonIndexeddb from '../data/nontonIndexeddb';
import { createButtonLikeDetailTemplate, createButtonLikedDetailTemplate } from '../views/templates/template-creator';

const ButtonFavoriteManager = {
  async init({ buttonFavoriteContainer, itemData }) {
    this.container = buttonFavoriteContainer;
    this.data = itemData;
    await this.renderButton();
  },

  async renderButton() {
    // eslint-disable-next-line no-unused-expressions, no-unneeded-ternary
    await this.data.btn_like ? this.renderLikedButton() : this.renderLikeButton();
  },

  renderLikeButton() {
    this.container.innerHTML = createButtonLikeDetailTemplate();
    const likeButton = document.querySelector('#button-like');
    likeButton.addEventListener('click', async (event) => {
      event.preventDefault();
      this.data.btn_like = true;
      await NontonIndexeddb.putData(this.data);
      this.renderLikedButton();
    });
  },

  renderLikedButton() {
    this.container.innerHTML = createButtonLikedDetailTemplate();
    const likeButton = document.querySelector('#button-like');
    likeButton.addEventListener('click', async (event) => {
      event.preventDefault();
      this.data.btn_like = false;
      await NontonIndexeddb.putData(this.data);
      this.renderLikeButton();
    });
  },
};

export default ButtonFavoriteManager;
