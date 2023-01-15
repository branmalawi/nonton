class BottomBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <a href="#/home" class="" tabindex="0">
      <img src="./icon/home.svg" class="h-7 mx-1" />
      <p class="hidden">HOME</p>
    </a>
    <a href="#/favorite" class="" tabindex="0">
      <img src="./icon/favorite.svg" class="h-7 mx-1" />
      <p class="hidden">LIKE</p>
    </a>
    <a href="#/list" class="" tabindex="0">
      <img src="./icon/watchlist.svg" class="h-7 mx-1" />
      <p class="hidden">LIST</p>
    </a>
    <button id="openSearchbar" class="">
      <img src="./icon/search.svg" class="h-7 mx-1" />
    </button>
    `;
  }
}

customElements.define('bottom-bar', BottomBar);
export default BottomBar;
