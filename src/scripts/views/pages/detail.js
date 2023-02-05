/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable quote-props */
import NontonDatabase from '../../data/nonton-database';
import NontonIndexeddb from '../../data/nontonIndexeddb';
import UrlParser from '../../routes/url-parser';
import InitialColorImage from '../../utils/initialColorImage';
import dataTest from '../../utils/testData';
import ButtonFavoriteManager from '../../utils/buttonFavoriteManager';
import ButtonWatchlistManager from '../../utils/buttonWatchlistManager';
import { creatDetailNameSectionTemplate, creatDetailOvrSectionTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <style></style>
    <div id="detail" class="bg-no-repeat bg-top bg-[length:600px] sm:bg-cover pt-52 sm:pt-0 pb-1 sm:pb-0">
      <div class="w-full backdrop-blur-xl sm:backdrop-blur-0 rounded-t-3xl sm:rounded-t-none h-fit detail__container py-[6px] sm:p-5 md:p-7 gap-3 md:gap-8">
        <div class="detail__image mt-[-60%] sm:mt-0 rounded-2xl overflow-hidden w-full aspect-[2/3] bg-slate-300"></div>
        <div class="h-fit w-full detail__name">
          <div class=""></div>
        </div>
        <div class="h-fit w-full detail__ovr">
          
        </div>
      </div>
    </div>
    <section id="cast" class="px-2 mt-3">
    <h1 class="text-xl text-bold px-3">Cast</h1>
    <div class="p-2 pb-6 flex gap-[2%] min-[700px]:gap[1.5%] min-[890px]:gap-[1%] overflow-y-hidden custom-scrollbar">
      <image-item-skeleton class="person-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="person-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="person-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="person-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="person-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="person-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="person-item animate-pulse"></image-item-skeleton>
      <image-item-skeleton class="person-item animate-pulse"></image-item-skeleton>
    </div>
  </section>    
  
   `;
  },

  async afterRender() {
    console.log(dataTest.nama);
    const detailSrc = UrlParser.parseActiveUrlWithoutCombiner();
    const detailData = await NontonDatabase.detail(detailSrc.verb, detailSrc.id);
    console.log(detailData);
    const detail = document.querySelector('#mainContent');

    const dataColor = await InitialColorImage.init(`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${detailData.poster_path}`);
    console.log(dataColor);
    const warna = dataColor.bgColor.join(',');

    const style = document.querySelector('style');
    style.innerHTML += `
      #detail {
        background-image : url('https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/${detailData.backdrop_path}');
        background-color: rgba(${warna},1); 
      }

      #detail .detail__name {
        color: white;
        border-color: blue;
      }

      #detail .detail__ovr {
        color: ${dataColor.textColor};
      }
      #detail .detail-btn {
        background-color: ${dataColor.textColor}4d;
      }

      @media screen and (min-width: 640px) {
        #detail>div {
          background-color: rgba(${warna},.8); 
        }

        #detail .detail__name {
          color: ${dataColor.textColor};
        }

        #detail .detail__name a {
          border-color: ${dataColor.textColor};
        }

      }
    `;

    const image = document.querySelector('.detail__image');
    image.innerHTML = `<img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${detailData.poster_path}' alt='bagus'>`;

    const about = await NontonIndexeddb.getData(Number(detailSrc.id));
    let buttonLike = false;
    let buttonWatchlist = false;
    if (about) {
      buttonLike = about.btn_like;
      buttonWatchlist = about.btn_watchlist;
    }

    // const detailOvrContainer = document.querySelector('.detail__ovr');
    // detailOvrContainer.innerHTML = creatDetailOvrSectionTemplate();
    const detailNameContainer = document.querySelector('.detail__name');
    detailNameContainer.innerHTML = creatDetailNameSectionTemplate({
      title: detailData.title || detailData.name,
      date: detailData.release_date || detailData.first_air_date,
      runtime: detailData.runtime || detailData.episode_run_time[0],
      genre: detailData.genres,
    });

    const detailOvrContainer = document.querySelector('.detail__ovr');
    detailOvrContainer.innerHTML = creatDetailOvrSectionTemplate({
      rate: Math.ceil(detailData.vote_average * 10),
      tagline: detailData.tagline,
      overview: detailData.overview,
    });

    const itemData = {
      id: detailData.id,
      title: detailData.title || detailData.name,
      date: detailData.release_date || detailData.first_air_date,
      vote_average: detailData.vote_average,
      overview: detailData.overview,
      poster_path: detailData.poster_path,
      btn_like: buttonLike,
      btn_watchlist: buttonWatchlist,
    };

    const buttonFavoriteContainer = document.querySelector('#btnFavorite');
    ButtonFavoriteManager.init({ buttonFavoriteContainer, itemData });

    const buttonWatchlistContainer = document.querySelector('#btnWatchlist');
    ButtonWatchlistManager.init({ buttonWatchlistContainer, itemData });

    const tagline = document.querySelector('#tagline > i');
    tagline.innerHTML = `“${detailData.tagline || "it doesn't have a tagline"}”`;

    const overview = document.querySelector('#overview > p');
    overview.innerHTML = detailData.overview;

    // console.log(`${dataColor.textColor}99`);
  },
};

export default Detail;
