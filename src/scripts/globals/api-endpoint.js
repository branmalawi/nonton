import CONFIG from './config';

const API_ENDPOINT = {
  POPULAR: (type, page) => `${CONFIG.BASE_URL}movie/popular?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=${page}`,
  NOW_PLAYING: (page) => `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=${page}`,
  UPCOMING: (page) => `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=${page}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}`,
  SEARCH: (keyword, page) => `${CONFIG.BASE_URL}search/multi?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&query=${keyword}&page=${page}&include_adult=false`,
};

export default API_ENDPOINT;
