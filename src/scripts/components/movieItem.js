/* eslint-disable quote-props */
import CONFIG from '../globals/config';

class MovieItem extends HTMLElement {
  connectedCallback() {
    this.id = parseInt(this.getAttribute('id'), 10);
    this.type = this.getAttribute('data-type');
    this.src = this.getAttribute('data-src');
    this.title = this.getAttribute('data-title');
    this.date = this.getAttribute('data-date').split('-');
    this.rate = Math.ceil(parseFloat(this.getAttribute('data-rate')) * 10);
    this.mountName = {
      '01': 'Jan',
      '02': 'Feb',
      '03': 'Mar',
      '04': 'Apr',
      '05': 'May',
      '06': 'Jun',
      '07': 'Jul',
      '08': 'Aug',
      '09': 'Sep',
      '10': 'Oct',
      '11': 'Nov',
      '12': 'Dec',
    };
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#/detail/${this.type}/${this.id}">
        <div class="poster aspect-[2/3] rounded-xl overflow-hidden relative">
        <picture class="h-full flex items-center justify-center">
          <source media="(min-width:700px)" srcset="${CONFIG.MID_POSTER_URL}${this.src}" class="lazyload"/>
          <img data-src="${CONFIG.SMALL_POSTER_URL}${this.src}" src="./logo/nonton.svg" alt="${this.title} poster" class="lazyload"/>
        </picture>
          
          <rate-bar value="${this.rate}" class="absolute rate-progress w-[27%] top-0 right-0 translate-x-[-20%] translate-y-[20%] bg-gray-700/50 backdrop-blur before:bg-gray-800 text-[10px] text-sky-50"></rate-bar>
        </div>
      </a>
      <a href="#/detail/${this.type}/${this.id}">
        <h2 class="ml-[2px] mt-1 mb-[2px] text-base font-medium">${this.title}</h2>
      </a>
      <p class="ml-[2px] text-xs font-normal">${this.date[2]} ${this.mountName[this.date[1]]}, ${this.date[0]}</p>
    `;

    const img = this.querySelector('img');
    if (!this.src) {
      img.setAttribute('data-src', './logo/nonton.svg');
      console.log(null);
    }
  }
}

customElements.define('movie-item', MovieItem);
export default MovieItem;
