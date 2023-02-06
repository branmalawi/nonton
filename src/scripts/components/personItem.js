/* eslint-disable quote-props */
import CONFIG from '../globals/config';

class PersonItem extends HTMLElement {
  connectedCallback() {
    this.id = parseInt(this.getAttribute('id'), 10);
    this.type = this.getAttribute('data-type');
    this.src = this.getAttribute('data-src');
    this.title = this.getAttribute('data-title');
    this.department = this.getAttribute('data-department');
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#/about/${this.type}/${this.id}">
        <div class="poster aspect-[3/4] rounded-xl overflow-hidden relative flex items-start justify-center bg-[url('../public/icon/person-bg.svg')] bg-center bg-cover">
          <img data-src="${CONFIG.LARGE_POSTER_URL}${this.src}" src="./logo/test2.png" alt="${this.title} poster" class="w-full lazyload"/>
        </div>
      </a>
      <a href="#/detail/${this.type}/${this.id}">
        <h2 class="ml-[2px] mt-0.5 text-sm font-medium">${this.title}</h2>
      </a>
      <p class="ml-[2px] text-xs font-normal">${this.department}</p>
    `;

    if (!this.src) {
      this.querySelector('img').remove();
    }
  }
}

customElements.define('person-item', PersonItem);
export default PersonItem;
