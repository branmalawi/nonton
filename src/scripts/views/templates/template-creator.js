/* eslint-disable object-curly-newline */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
// import CONFIG from '../../globals/config';
import { mountName } from '../../data/basicData';

const createRecommendedItemTemplate = (result) => `
  <recommended-list
    id="${result.id}"
    data-src="${result.backdrop_path}"
    data-type="${result.title ? 'movie' : 'tv'}"
    data-title="${result.title || result.name}"
    data-rate="${result.vote_average}"
    data-genres="${result.genre_ids.join(',')}"
    class="swiper-slide px-[6px] block h-fit">
  </recommended-list>
`;

const createMovieItemTemplate = (result) => `
  <movie-item
    id="${result.id}"
    data-src="${result.poster_path}"
    data-type="${result.title ? 'movie' : 'tv'}"
    data-title="${result.title || result.name}"
    data-date="${result.release_date || result.first_air_date}"
    data-rate="${result.vote_average}"
    class="image-item">
  </movie-item>
`;

const createTrendingTrailerItemTemplate = (result) => `
  <latest-item class="swiper-slide max-w-[95%] md:max-w-[36%] rounded-2xl"
    data-src="${result.backdrop_path || ''}"
    data-title="${result.title || result.name}">
  </latest-item>
`;
const createTempalateAboutTimeForDetail = ({ date, runtime }) => {
  let dataDate = '';
  date = date.split('-');
  dataDate += `<span>${date[2]} ${mountName[date[1]]}, ${date[0]}</span>`;
  if (runtime) {
    dataDate += ` <span> &bull; </span> <span>${Math.floor(runtime / 60)}h ${runtime % 60}m</span>`;
  }
  return dataDate;
};

const createGenreForDetailTemplate = (genres) => {
  let generatedGenre = '';
  genres.map((genre) => generatedGenre += `<a href="#" class="px-3 py-0.5 rounded-full block text-xs md:text-sm font-normal border-[1.5px] whitespace-nowrap">${genre.name}</a>`);
  return generatedGenre;
};

const createButtonLikeDetailTemplate = () => `
  <img id="button-like" src="./icon/favorite.svg" alt="" class="h-full" />
`;
const createButtonLikedDetailTemplate = () => `
  <img id="button-like" src="./icon/favorite-bold.svg" alt="" class="h-full" />
`;
const createButtonWatchListDetailTemplate = () => `
  <img id="button-list" src="./icon/watchlist.svg" alt="" class="h-full" />
`;
const createButtonWatchedListDetailTemplate = () => `
  <img id="button-list" src="./icon/watchlist-bold.svg" alt="" class="h-full" />
`;

const creatDetailNameSectionTemplate = ({ title, date, runtime, genre }) => `
  <h2 class="sm:text-[38] sm:leading-8 md:text-[40px] md:leading-[50px] font-semibold md:font-bold">${title}</h2>
  <p class="text-xs font-normal md:text-base">${createTempalateAboutTimeForDetail({ date, runtime })}</p>
  <div class="flex flex-wrap w-full gap-[5px] mt-2">${createGenreForDetailTemplate(genre)}</div>
`;

const creatDetailOvrSectionTemplate = ({ rate, tagline, overview }) => `
  <div class="flex justify-around sm:justify-between mt-3 w-full sm:max-w-sm">
    <rate-bar value="${rate}" class="relative rate-progress w-[50px] flex justify-center items-center text-sm bg-gray-800/50 backdrop-blur before:bg-gray-800  text-sky-50"></rate-bar>
    <div id="btnFavorite" class="w-[50px] h-[50px] detail-btn backdrop-blur-md flex justify-center items-center rounded-full p-[10px]"></div>
    <div id="btnWatchlist" class="w-[50px] h-[50px] detail-btn backdrop-blur-md flex justify-center items-center rounded-full p-[10px]"></div>
    <div class="w-[50px] h-[50px] detail-btn backdrop-blur-md flex justify-center items-center rounded-full p-3"><img src="./icon/play.svg" alt="" class="h-full" /></div>
  </div>
  <section id="tagline" class="py-3 w-full my-4">
    <i class="font-light text-center sm:text-start sm:font-normal w-full inline-block text-base">“${tagline || "it doesn't have a tagline"}”</i>
  </section>
  <section id="overview" class="px-3 sm:px-0 md:pr-20 mb-5">
    <h1 class="text-xl font-semibold px-2">Overview</h1>
    <p class="text-base font-normal">${overview}</p>
  </section>
`;

const createResultSearchTemplate = (result) => `
  <li>
    <a href="#/search/${result.media_type}/${result.title || result.name}" class="searchResult flex items-center justify-start my-[10px]">
      <img src="./icon/${result.media_type}.svg" height="24" width="24" class="ml-2 mr-3 brightness-[20%] dark:brightness-100 opacity-75"></img>
      <span class="text-base font-regular text-dark/70 text-slate-900 dark:text-sky-50">${result.title || result.name}</span> 
    </a> 
  </li>
  `;

const createPreviousResultSearchTemplate = (result) => `
  <li>
    <a href="#/search/${result.type}/${result.name}" class="searchResult flex items-center justify-start my-[10px]">
      <img src="./icon/previous-result.svg" height="24" width="24" class="ml-2 mr-3 brightness-[20%] dark:brightness-100 opacity-75"></img>
      <span class="text-base font-regular text-dark/70 text-slate-900 dark:text-sky-50">${result.name}</span>
    </a> 
  </li>
  `;

export {
  createRecommendedItemTemplate,
  createMovieItemTemplate,
  createTrendingTrailerItemTemplate,
  creatDetailNameSectionTemplate,
  creatDetailOvrSectionTemplate,
  createButtonLikeDetailTemplate,
  createButtonLikedDetailTemplate,
  createButtonWatchListDetailTemplate,
  createButtonWatchedListDetailTemplate,
  createResultSearchTemplate,
  createPreviousResultSearchTemplate,
};

/* <div class="flex justify-around sm:justify-between mt-3 w-full sm:max-w-sm">
            <rate-bar value="76" class="relative rate-progress w-[50px] flex justify-center items-center text-sm bg-gray-800/50 backdrop-blur before:bg-gray-800  text-sky-50"></rate-bar>
            <div class="w-[50px] h-[50px] bg-slate-400/70 backdrop-blur-md flex justify-center items-center rounded-full">
              <img data="./icon/watchlist.svg" type="image/svg+xml" class="w-6"></img>
            </div>
            <div class="w-[50px] h-[50px] bg-slate-400/70 backdrop-blur-md flex justify-center items-center rounded-full">
              <img data="./icon/favorite.svg" type="image/svg+xml" class="w-6"></img>
            </div>
            <div class="w-[50px] h-[50px] bg-slate-400/70 backdrop-blur-md flex justify-center items-center rounded-full">
              <img data="./icon/play.svg" type="image/svg+xml" class="w-6"></img>
            </div>
          </div>
          <section id="tagline" class="py-3 w-full my-4">
            <i class="font-light text-center sm:text-start sm:font-normal w-full inline-block text-base"></i>
          </section>
          <section id="overview" class="px-3 sm:px-0 md:pr-20 mb-5">
            <h1 class="text-xl font-semibold px-2">Overview</h1>
            <p class="text-base font-normal"></p>
          </section> */
