import NontonDatabase from '../../data/nonton-database';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
    <div class="bg-no-repeat bg-top bg-[length:600px] md:bg-cover pt-52 pb-1 sm:pb-0" style="background-image : url('./img/backdrop-11.webp'); background-color: rgba(20,40,80,1);">
      <div class="w-full backdrop-blur-xl rounded-t-3xl h-fit detail__container py-[6px] gap-3" style="background-color: transparent; color: white;">
        <div class="detail__image mt-[-60%] rounded-2xl overflow-hidden w-full aspect-[2/3]">
          <img src="./img/poster-11.webp" class=""/>
        </div>
        <div class="h-full w-full detail__name">
          <h2 class="font-semibold m-0 p-0">Thor Ragnarok</h2>
          <p class="text-xs font-light text-white/80 mt-1"><span>24 Oct, 2017</span><span> &bull; </span><span>2h 11m</span></p>
          <div class="flex flex-wrap w-full gap-[5px] mt-2">
            <a href="#" class="px-3 py-0.5 rounded-full block text-xs font-normal border-[1.3px] whitespace-nowrap">Action</a>
            <a href="#" class="px-3 py-0.5 rounded-full block text-xs font-normal border-[1.3px] whitespace-nowrap">Adventure</a>
            <a href="#" class="px-3 py-0.5 rounded-full block text-xs font-normal border-[1.3px] whitespace-nowrap">Science Fiction</a>
            <a href="#" class="px-3 py-0.5 rounded-full block text-xs font-normal border-[1.3px] whitespace-nowrap">Comedy</a>
          </div>
        </div>
        <div class="h-full w-full detail__ovr">
          <div class="flex justify-around mt-3">
            <rate-bar value="76" class="relative rate-progress w-[50px] flex justify-center items-center text-sm bg-gray-800/50 backdrop-blur before:bg-gray-800  text-sky-50"></rate-bar>
            <div class="w-[50px] h-[50px] bg-slate-500 flex justify-center items-center rounded-full">
              <object data="./icon/watchlist.svg" type="image/svg+xml" class="sm:hidden w-6"></object>
            </div>
            <div class="w-[50px] h-[50px] bg-slate-500 flex justify-center items-center rounded-full">
              <object data="./icon/favorite.svg" type="image/svg+xml" class="sm:hidden w-6"></object>
            </div>
            <div class="w-[50px] h-[50px] bg-slate-500 flex justify-center items-center rounded-full">
              <object data="./icon/play.svg" type="image/svg+xml" class="sm:hidden w-6"></object>
            </div>
          </div>
          <section class="py-3 w-full my-4">
            <i class="font-light text-center w-full inline-block text-base">“No Hammer. No Problem.”</i>
          </section>
          <section id="overview" class="px-3 mb-5">
            <h1 class="text-xl font-semibold px-2">Overview</h1>
            <p class="text-base font-normal text-white/70">Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of a powerful new threat, the ruthless Hela.</p>
          </section>
        </div>
      </div>
    </div>
    <section id="cast" class="px-2 mt-3">
    <h1 class="text-xl text-bold px-3">Cast</h1>
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
    const detailSrc = UrlParser.parseActiveUrlWithoutCombiner();
    const detailData = await NontonDatabase.detail(detailSrc.verb, detailSrc.id);
    console.log(detailData);
  },
};

export default Detail;
