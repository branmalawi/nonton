/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-empty-function */
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import CONFIG from '../../globals/config';
import NontonDatabase from '../../data/nonton-database';
import CheckedGenres from '../../data/checkedGenre';
import { createRecommendedItemTemplate, createMovieItemTemplate, createTrendingTrailerItemTemplate } from '../templates/template-creator';
// import SweetAlert from '../../utils/swal-initiator';
// import { createCatalogueRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section id="recommended" class="pb-1">
    <h1 class="text-xl text-bold px-3">Recommended For You</h1>
    <div class="swiper recommended mt-1">
      <div class="swiper-wrapper pb-3">
        <div class="swiper-slide px-[6px] block animate-pulse">
          <div class="item-image relative rounded-xl w-full aspect-video bg-slate-300 dark:bg-gray-600"></div>
          <div class="w-2/3 h-4 rounded-full bg-slate-300 dark:bg-gray-500 mt-2 ml-2"></div>
           <div class="flex mt-1 flex-wrap">
            <div class="w-[30%] h-6 rounded-full bg-slate-300 dark:bg-gray-500 mt-2 ml-1"></div>
            <div class="w-[35%] h-6 rounded-full bg-slate-300 dark:bg-gray-500 mt-2 ml-2"></div>
            <div class="w-[20%] h-6 rounded-full bg-slate-300 dark:bg-gray-500 mt-2 ml-2"></div>
            <div class="w-[45%] h-6 rounded-full bg-slate-300 dark:bg-gray-500 mt-2 ml-1"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="trending" class="pb-2 ">
    <h1 class="text-xl text-bold px-3">Trending</h1>
    <div class="p-2 pb-6 flex gap-[2%] min-[700px]:gap[1.5%] min-[890px]:gap-[1%] overflow-y-hidden custom-scrollbar">
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
    </div>
  </section>
  <section id="topRated" class="pb-3">
    <h1 class="text-xl text-bold px-3">Top Rated</h1>
    <div class="p-2 pb-6 flex gap-[2%] min-[700px]:gap[1.5%] min-[890px]:gap-[1%] overflow-y-hidden custom-scrollbar">
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
    </div>
  </section>
  <section id="trendingTrailer" class="py-3 bg-cover bg-center w-full bg-slate-300 dark:bg-gray-500 animate-pulse h-72 mb-4">
    <h1 class="text-xl text-bold px-3 text-sky-50">Trending Trailer</h1>
    <div class="swiper trendingTrailer mt-4 mb-6">
      <div class="swiper-wrapper">
      </div>
      <div class="swiper-button-next text-white"></div>
      <div class="swiper-button-prev text-white"></div>
    </div>
  </section>
  <section id="popular" class="pb-2">
    <h1 class="text-xl text-bold px-3">Popular</h1>
    <div class="p-2 pb-6 flex gap-[2%] min-[700px]:gap[1.5%] min-[890px]:gap-[1%] overflow-y-hidden custom-scrollbar">
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="image-item animate-pulse"></image-item-skeleton>
    </div>
  </section>
   `;
  },

  async afterRender() {
    const genreMovie = CheckedGenres.getMovieGenreId();
    const genreTv = CheckedGenres.getTvGenreId();

    console.log(genreMovie);
    this.renderSwiperRecommended();
    if (!genreMovie || !genreTv) {
      document.querySelector('body').innerHTML += '<genre-filter></genre-filter>';
      return;
    }

    const popularMovie = await NontonDatabase.popular('movie', 1, genreMovie);
    const popularTv = await NontonDatabase.popular('tv', 1, genreTv);
    const popularAndRecommendedData = this.combineDataRandom(popularMovie, popularTv);

    const recommendedContainer = document.querySelector('#recommended .swiper-wrapper');
    recommendedContainer.innerHTML = '';
    popularAndRecommendedData.map((recommended) => recommendedContainer.innerHTML += createRecommendedItemTemplate(recommended));
    this.renderSwiperRecommended();

    const popularContainer = document.querySelector('#popular > div');
    popularContainer.innerHTML = '';
    popularAndRecommendedData.map((popular) => popularContainer.innerHTML += createMovieItemTemplate(popular));

    const topRatedMovie = await NontonDatabase.topRated('movie');
    const topRatedTv = await NontonDatabase.topRated('tv');
    const topRatedData = this.combineDataSort(topRatedMovie, topRatedTv);
    const topRatedContainer = document.querySelector('#topRated > div');
    topRatedContainer.innerHTML = '';
    topRatedData.map((topRated) => topRatedContainer.innerHTML += createMovieItemTemplate(topRated));

    const trendingData = await NontonDatabase.trending();

    const trendingContainer = document.querySelector('#trending > div');
    trendingContainer.innerHTML = '';
    trendingData.map((trending) => trendingContainer.innerHTML += createMovieItemTemplate(trending));

    const trendingTrailer = document.querySelector('#trendingTrailer');
    trendingTrailer.classList.remove('animate-pulse');
    trendingTrailer.classList.remove('h-72');
    trendingTrailer.setAttribute('style', `background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${CONFIG.LARGE_BACKDROP_URL}${trendingData[0].backdrop_path}');`);

    const trendingTrailerContainer = document.querySelector('#trendingTrailer .swiper-wrapper');
    trendingData.map((trendingTrailer) => trendingTrailerContainer.innerHTML += createTrendingTrailerItemTemplate(trendingTrailer));
    this.renderSwiperTrendingTrailer(trendingTrailer);
  },

  combineDataRandom(movie, tv) {
    return movie.concat(tv).sort(() => 0.5 - Math.random()).slice(0, 20);
  },

  combineDataSort(movie, tv) {
    return movie.concat(tv).sort((a, b) => b.vote_average - a.vote_average).slice(0, 20);
  },

  renderSwiperRecommended() {
    // eslint-disable-next-line no-unused-vars
    const recommended = new Swiper('.recommended', {
      slidesPerView: 1,
      direction: 'horizontal',
      spaceBetween: 2,
      loop: true,
      breakpoints: {
        600: {
          slidesPerView: 2,
        },
        830: {
          slidesPerView: 3,
        },
      },
    });
  },

  renderSwiperTrendingTrailer(trendingTrailerBg) {
    const trendingTrailer = new Swiper('.trendingTrailer', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 2,
        slideShadows: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    trendingTrailer.on('slideChange', () => {
      const image = trendingTrailer.slides[trendingTrailer.activeIndex].querySelector('img').getAttribute('src');
      console.log(image);
      trendingTrailerBg.setAttribute('style', `background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('${image}');`);
    });
  },
};

export default Home;
