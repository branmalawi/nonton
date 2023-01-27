import CONFIG from './config';

const API_ENDPOINT = {
  RECOMMENDED: (type, genres, date, page) => `${CONFIG.BASE_URL}discover/${type}?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&sort_by=popularity.desc&page=${page}&${date}&with_genres=${genres}&with_watch_monetization_types=flatrate`,
  FREE_TO_WATCH: (type, genres, page) => `${CONFIG.BASE_URL}discover/${type}?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&sort_by=popularity.desc&page=${page}&with_genres=${genres}&with_watch_monetization_types=free`,
  LATEST: (type, genres, year, page) => `${CONFIG.BASE_URL}discover/${type}?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&sort_by=popularity.desc&page=${page}&${year}&with_genres=${genres}&with_watch_monetization_types=flatrate`,
  TRENDING: `${CONFIG.BASE_URL}trending/all/week?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}`,
  BASIC_REQUEST: (mediaType, requestType, page) => `${CONFIG.BASE_URL}${mediaType}/${requestType}?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=${page}`,
  DETAIL: (type, id) => `${CONFIG.BASE_URL}${type}/${id}?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&append_to_response=videos,images,casts`,
  SEARCH: (keyword, page) => `${CONFIG.BASE_URL}search/multi?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&query=${keyword}&page=${page}&include_adult=false`,
  GENRE: (type) => `${CONFIG.BASE_URL}genre/${type}/list?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}`,
};

export default API_ENDPOINT;
// https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

// https://api.themoviedb.org/3/movie/top_rated?api_key=cfb7d17e50d625993f86e5de6a708481&language=en-US&page=1
// https://api.themoviedb.org/3/movie/popular?api_key=cfb7d17e50d625993f86e5de6a708481&language=en-US&page=1
// https://api.themoviedb.org/3/movie/now_playing?api_key=cfb7d17e50d625993f86e5de6a708481&language=en-US&page=1
// https://api.themoviedb.org/3/movie/upcoming?api_key=cfb7d17e50d625993f86e5de6a708481&language=en-US&page=1
// https://api.themoviedb.org/3/tv/airing_today?api_key=cfb7d17e50d625993f86e5de6a708481&language=en-US&page=1
// https://api.themoviedb.org/3/tv/popular?api_key=cfb7d17e50d625993f86e5de6a708481&language=en-US&page=1
// https://api.themoviedb.org/3/tv/top_rated?api_key=cfb7d17e50d625993f86e5de6a708481&language=en-US&page=1

// https://api.themoviedb.org/3/discover/movie?api_key=cfb7d17e50d625993f86e5de6a708481&language=en-US&sort_by=popularity.desc&include_video=false&page=1&primary_release_year=2023&with_genres=28&with_watch_monetization_types=flatrate

// https://api.themoviedb.org/3/discover/tv?api_key=cfb7d17e50d625993f86e5de6a708481&language=en-US&sort_by=popularity.desc&include_video=false&first_air_date_year=2023&page=1&with_genres=13&with_watch_monetization_types=flatrate

// https://api.themoviedb.org/3/trending/all/week?api_key=cfb7d17e50d625993f86e5de6a708481
