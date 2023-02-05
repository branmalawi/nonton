/* eslint-disable import/named */
/* eslint-disable class-methods-use-this */
/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
import { GenreData } from '../data/basicData';
import CONFIG from '../globals/config';

class RecommendedList extends HTMLElement {
  connectedCallback() {
    this.id = this.getAttribute('id');
    this.src = this.getAttribute('data-src') || null;
    this.type = this.getAttribute('data-type') || null;
    this.title = this.getAttribute('data-title') || null;
    this.rate = parseInt(this.getAttribute('data-rate')) || null;
    this.genres = this.getAttribute('data-genres').split(',') || null;
    this.solidStar = '<i class="fa-solid fa-star text-yellow-300"></i>';
    this.halfStar = '<i class="fa-regular fa-star-half-stroke text-yellow-300"></i>';
    this.lightStar = '<i class="fa-light fa-star text-yellow-300"></i>';

    this.render();
  }

  // ! PERBAIKI LARGE_BACKDROP_URL

  render() {
    this.innerHTML = `
      <a href="#/detail/${this.type}/${this.id}">
        <div class="item-image relative rounded-xl overflow-hidden aspect-video flex items-center justify-center bg-slate-300 dark:bg-gray-600">
        <picture class="brightness-90 ">
          <source media="(min-width:500px)" srcset="${CONFIG.LARGE_BACKDROP_URL}${this.src}" class="lazyload"/>
          <img data-src="${CONFIG.MID_BACKDROP_URL}${this.src}" src="./logo/nonton.svg"  class="lazyload"/>
        </picture>
        
          <div class="item-rate absolute bottom-[10px] right-[10px] flex h-fit justify-between items-center px-2 text-base md:text-lg">${this.generateRating(this.rate)}</div>
        </div>
      </a>
      <a href="#/detail/${this.type}/${this.id}">
        <h2 class="font-semibold ml-1 p-1 text-[17px] font-opensns text-black/80 dark:text-sky-50 w-full truncate">${this.title}</h2>
      </a>
      <div class="flex flex-wrap">${this.generateGenre(this.genres)}</div>
    `;

    const img = this.querySelector('img');
    if (!this.src) {
      img.setAttribute('data-src', './logo/nonton.svg');
      console.log(null);
    }
  }

  generateRating(rate) {
    const star = Math.floor(rate / 2);
    const remainder = rate % 2;
    let generated = '';
    for (let i = 1; i <= 5; i++) {
      generated += i <= star ? this.solidStar : i <= (star + remainder) ? this.halfStar : this.lightStar;
    }
    return generated;
  }

  generateGenre(idGenres) {
    const listGenres = GenreData;
    let result = '';
    for (const _idGenre of idGenres) {
      const nameGenre = listGenres.filter((listGenre) => parseInt(_idGenre) == listGenre.id);
      result += `
        <a href="#/genre/${this.type}/${_idGenre}" class="m-[3px] px-4 py-0 rounded-full block bg-gradient-to-r from-fuchsia-400 to-violet-400 text-white text-[15px] leading-7 font-medium">${nameGenre[0].name}</a>
      `;
    }
    return result;
  }
}

customElements.define('recommended-list', RecommendedList);
export default RecommendedList;
