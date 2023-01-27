class BottomBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <a href="#/home" class="" tabindex="0">
      <img src="./icon/home.svg" class="h-7 mx-1 brightness-[20%] dark:brightness-100" />
      <p class="hidden">HOME</p>
    </a>
    <a href="#/favorite" class="" tabindex="0">
      <img src="./icon/favorite.svg" class="h-7 mx-1 brightness-[20%] dark:brightness-100" />
      <p class="hidden">LIKE</p>
    </a>
    <a href="#/watchlist" class="" tabindex="0">
      <img src="./icon/watchlist.svg" class="h-7 mx-1 brightness-[20%] dark:brightness-100" />
      <p class="hidden">LIST</p>
    </a>
    <button class="buttonDrawer">
      <img src="./icon/more.svg" class="h-7 mx-1 brightness-[20%] dark:brightness-100" />
    </button>
    `;
  }
}

customElements.define('bottom-bar', BottomBar);
export default BottomBar;
