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
        <div class="poster aspect-[2/3] rounded-xl overflow-hidden relative flex items-center justify-center">
          <img data-src="${CONFIG.LARGE_POSTER_URL}${this.src}" src="./logo/nontonn.svg" alt="${this.title} poster" class="h-full lazyload"/>
          <rate-bar value="${this.rate}" class="absolute rate-progress w-[27%] top-0 right-0 translate-x-[-20%] translate-y-[20%] bg-gray-700/50 backdrop-blur before:bg-gray-800 text-[10px] text-sky-50"></rate-bar>
        </div>
      </a>
      <a href="#/detail/${this.type}/${this.id}">
        <h2 class="ml-[2px] mt-1 mb-[2px] text-base font-medium">${this.title}</h2>
      </a>
      <p class="ml-[2px] text-xs font-normal">${this.department}</p>
    `;
  }
}

customElements.define('person-item', PersonItem);
export default PersonItem;
