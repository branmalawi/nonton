/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable quote-props */
import NontonDatabase from '../../data/nonton-database';
import UrlParser from '../../routes/url-parser';
import InitialColorImage from '../../utils/initialColorImage';
import dataTest from '../../utils/testData';

const Detail = {
  async render() {
    return `
    <div id="detail" class="bg-no-repeat bg-top bg-[length:600px] sm:bg-cover pt-52 sm:pt-0 pb-1 sm:pb-0">
      <div class="w-full backdrop-blur-xl sm:backdrop-blur-0 rounded-t-3xl sm:rounded-t-none h-fit detail__container py-[6px] sm:p-5 md:p-7 gap-3 md:gap-8">
        <div class="detail__image mt-[-60%] sm:mt-0 rounded-2xl overflow-hidden w-full aspect-[2/3] bg-slate-300"></div>
        <div class="h-fit w-full detail__name">
          <h2 class="sm:text-[38] sm:leading-8 md:text-[40px] md:leading-[50px] font-semibold md:font-bold">Thor Ragnarok</h2>
          <p class="text-xs font-normal md:text-base"><span>24 Oct, 2017</span><span> &bull; </span><span>2h 11m</span></p>
          <div class="flex flex-wrap w-full gap-[5px] mt-2">
            <a href="#" class="px-3 py-0.5 rounded-full block text-xs md:text-sm font-normal border-[1.5px] whitespace-nowrap">Action</a>
            <a href="#" class="px-3 py-0.5 rounded-full block text-xs md:text-sm font-normal border-[1.5px] whitespace-nowrap">Adventure</a>
            <a href="#" class="px-3 py-0.5 rounded-full block text-xs md:text-sm font-normal border-[1.5px] whitespace-nowrap">Science Fiction</a>
            <a href="#" class="px-3 py-0.5 rounded-full block text-xs font-normal border-[1.5px] whitespace-nowrap">Comedy</a>
          </div>
        </div>
        <div class="h-fit w-full detail__ovr">
          <div class="flex justify-around sm:justify-between mt-3 w-full sm:max-w-sm">
            <rate-bar value="76" class="relative rate-progress w-[50px] flex justify-center items-center text-sm bg-gray-800/50 backdrop-blur before:bg-gray-800  text-sky-50"></rate-bar>
            <div class="w-[50px] h-[50px] bg-slate-400/70 backdrop-blur-md flex justify-center items-center rounded-full">
              <object data="./icon/watchlist.svg" type="image/svg+xml" class="w-6"></object>
            </div>
            <div class="w-[50px] h-[50px] bg-slate-400/70 backdrop-blur-md flex justify-center items-center rounded-full">
              <object data="./icon/favorite.svg" type="image/svg+xml" class="w-6"></object>
            </div>
            <div class="w-[50px] h-[50px] bg-slate-400/70 backdrop-blur-md flex justify-center items-center rounded-full">
              <object data="./icon/play.svg" type="image/svg+xml" class="w-6"></object>
            </div>
          </div>
          <section class="py-3 w-full my-4">
            <i class="font-light text-center sm:text-start sm:font-normal w-full inline-block text-base">“No Hammer. No Problem.”</i>
          </section>
          <section id="overview" class="px-3 sm:px-0 md:pr-20 mb-5">
            <h1 class="text-xl font-semibold px-2">Overview</h1>
            <p class="text-base font-normal">Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of a powerful new threat, the ruthless Hela.</p>
          </section>
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

    const image = document.querySelector('.detail__image');
    image.innerHTML = `<img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${detailData.poster_path}' alt='bagus'>`;

    const title = document.querySelector('.detail__name > h2');
    title.innerHTML = detailData.title || detailData.name;

    const time = document.querySelector('.detail__name p');
    time.innerHTML = this.generateTime({
      date: detailData.release_date || detailData.first_air_date,
      runtime: detailData.runtime || detailData.episode_run_time[0],
    });
    // about[0].innerHTML = this.generateReleaseDate(detailData.release_date || detailData.first_air_date);
    // about[0].innerHTML = this.generateReleaseDate(detailData.runtime
    //   || detailData.first_air_date);

    detail.innerHTML += `<style>
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
  </style> `;
  },

  generateTime({ date, runtime }) {
    let dataDate = '';
    const mountName = {
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

    date = date.split('-');

    dataDate += `<span>${date[2]} ${mountName[date[1]]}, ${date[0]}</span>`;
    if (runtime) {
      dataDate += ` <span> &bull; </span> <span>${Math.floor(runtime / 60)}h ${runtime % 60}m</span>`;
    }
    return dataDate;
  },
};

export default Detail;
