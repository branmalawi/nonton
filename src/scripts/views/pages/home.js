/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-empty-function */
// import RestaurantSource from '../../data/restaurant-source';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import CONFIG from '../../globals/config';
import NontonDatabase from '../../data/nonton-database';
import CheckedGenres from '../../data/checkedGenre';
import { createRecommendedItemTemplate, createMovieItemTemplate, createLatestItemTemplate } from '../templates/template-creator';
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
  <section id="latestTrailer" class="py-3 bg-cover bg-center w-full bg-slate-300 dark:bg-gray-500 animate-pulse h-72 mb-4">
    <h1 class="text-xl text-bold px-3 text-sky-50">Latest Trailer</h1>
    <div class="swiper latest mt-4 mb-6">
      <div class="swiper-wrapper">
      </div>
      <div class="swiper-button-next text-white"></div>
      <div class="swiper-button-prev text-white"></div>
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
  <section id="freeToWatch" class="pb-2">
    <h1 class="text-xl text-bold px-3">Free To Watch</h1>
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

    const date = new Date();

    const recommendedMovie = await NontonDatabase.recommended('movie', genreMovie, date);
    const recommendedTv = await NontonDatabase.recommended('tv', genreTv, date);
    const recommendedData = this.combineDataSort(recommendedMovie, recommendedTv);
    console.log(recommendedData);

    const recommendedContainer = document.querySelector('#recommended .swiper-wrapper');
    recommendedContainer.innerHTML = '';
    recommendedData.forEach((recommended) => {
      recommendedContainer.innerHTML += createRecommendedItemTemplate(recommended);
    });
    this.renderSwiperRecommended();

    const popularMovie = await NontonDatabase.popular('movie');
    const popularTv = await NontonDatabase.popular('tv');
    const popularData = this.combineDataSort(popularMovie, popularTv);
    console.log(this.combineDataSort(popularMovie, popularTv));

    const popularContainer = document.querySelector('#popular > div');
    popularContainer.innerHTML = '';
    popularData.forEach((popular) => {
      popularContainer.innerHTML += createMovieItemTemplate(popular);
    });

    const topRatedMovie = await NontonDatabase.topRated('movie');
    const topRatedTv = await NontonDatabase.topRated('tv');
    const topRatedData = this.combineDataSort(topRatedMovie, topRatedTv);
    console.log(this.combineDataSort(topRatedMovie, topRatedTv));

    const topRatedContainer = document.querySelector('#topRated > div');
    topRatedContainer.innerHTML = '';
    topRatedData.forEach((topRated) => {
      topRatedContainer.innerHTML += createMovieItemTemplate(topRated);
    });

    const trendingData = await NontonDatabase.trending();
    console.log(trendingData);

    const trendingContainer = document.querySelector('#trending > div');
    trendingContainer.innerHTML = '';
    trendingData.forEach((trending) => {
      trendingContainer.innerHTML += createMovieItemTemplate(trending);
    });

    const freeToWatchMovie = await NontonDatabase.freeToWatch('movie', genreMovie);
    const freeToWatchTv = await NontonDatabase.freeToWatch('tv', genreTv);
    const freeToWatchData = this.combineDataSort(freeToWatchMovie, freeToWatchTv);
    console.log(this.combineDataSort(freeToWatchMovie, freeToWatchTv));

    const freeToWatchContainer = document.querySelector('#freeToWatch > div');
    freeToWatchContainer.innerHTML = '';
    freeToWatchData.forEach((freeToWatch) => {
      freeToWatchContainer.innerHTML += createMovieItemTemplate(freeToWatch);
    });

    const latestMovie = await NontonDatabase.latest('movie', genreMovie, date);
    const latestTv = await NontonDatabase.latest('tv', genreTv, date);
    const latesData = this.combineDataRandom(latestMovie, latestTv);
    console.log(this.combineDataRandom(latestMovie, latestTv));

    const latestTrailer = document.querySelector('#latestTrailer');
    latestTrailer.classList.remove('animate-pulse');
    latestTrailer.classList.remove('h-72');
    latestTrailer.setAttribute('style', `background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${CONFIG.LARGE_BACKDROP_URL}${latesData[0].backdrop_path}');`);

    const latestTrailerContainer = document.querySelector('#latestTrailer .swiper-wrapper');
    latesData.forEach((latest) => {
      latestTrailerContainer.innerHTML += createLatestItemTemplate(latest);
    });
    this.renderSwiperLatesTrailer(latestTrailer);
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
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
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

  renderSwiperLatesTrailer(latestTrailerBg) {
    const latest = new Swiper('.latest', {
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

    latest.on('slideChange', () => {
      const image = latest.slides[latest.activeIndex].querySelector('img').getAttribute('src');
      console.log(image);
      latestTrailerBg.setAttribute('style', `background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('${image}');`);
    });
  },
};

export default Home;
