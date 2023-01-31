import CONFIG from '../globals/config';

class LatestItem extends HTMLElement {
  connectedCallback() {
    const filterSrc = this.getAttribute('data-src') || null;
    this.src = filterSrc ? `${CONFIG.LARGE_BACKDROP_URL}${filterSrc}` : './logo/nonton.svg';
    this.title = this.getAttribute('data-title');
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="image m-auto rounded-2xl relative overflow-hidden flex justify-center items-center bg-slate-500 aspect-video">
        <img data-src="${this.src}" src="./logo/nonton.svg"  class="lazyload"/>
        <div class="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 w-14 h-14 flex items-center justify-center bg-sky-50/40 0 backdrop-blur-sm rounded-full">
          <object data="./icon/play.svg" type=""></object>
        </div>
      </div>
      <p class="title-name hidden truncate w-[95%] tex">${this.title}</p>
    `;
  }
}

customElements.define('latest-item', LatestItem);
export default LatestItem;
