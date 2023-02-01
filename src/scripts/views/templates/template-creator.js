/* eslint-disable import/prefer-default-export */
// import CONFIG from '../../globals/config';

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
  <latest-item
    class="swiper-slide max-w-[95%] md:max-w-[36%] rounded-2xl"
    data-src="${result.backdrop_path || ''}"
    data-title="${result.title || result.name}">
  </latest-item>
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
  createResultSearchTemplate,
  createPreviousResultSearchTemplate,
};
