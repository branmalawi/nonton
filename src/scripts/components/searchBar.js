class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
}

customElements.define('search-bar', SearchBar);
export default SearchBar;
