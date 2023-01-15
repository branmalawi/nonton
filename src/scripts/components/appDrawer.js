class AppDrawer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="appDrawerHead flex items-center px-3 md:px-1 h-[50px]">
        <img src="./logo/nonton.svg" alt="" class="logo w-[55px]" />
        <img
          src="./logo/text-nonton.svg"
          class="h-[37px] md:h-0 brightness-[25%] ml-1 logo-text"
        />
      </div>
      <div class="appDrawerListItem w-[90%] m-auto relative overflow-auto">
        <p class="appDrawerListItem__title md:hidden md:whitespace-nowrap">
          Apps
        </p>
        <div
          class="stroke hidden md:block w-11/12 h-[1px] bg-black/20 m-auto mb-6 mt-3"
        ></div>
        <ul class="my-4">
          <li class="my-3">
            <a href="#" class="flex items-center justify-center">
              <img
                src="./icon/home-bold.svg"
                alt=""
                class="item-icon bg-[#139DBB]"
              />
              <span class="item-name md:hidden md:whitespace-nowrap">Home</span>
              <i
                class="fa-regular fa-angle-right text-gray-700 pr-3 md:hidden"
              ></i>
            </a>
          </li>
          <li class="my-3">
            <a href="#" class="flex items-center justify-center">
              <img
                src="./icon/favorite-bold.svg"
                alt=""
                class="item-icon bg-[#FF2574]"
              />
              <span class="item-name md:hidden md:whitespace-nowrap"
                >Favorite</span
              >
              <i
                class="fa-regular fa-angle-right text-gray-700 pr-3 md:hidden"
              ></i>
            </a>
          </li>
          <li class="my-3">
            <a href="#" class="flex items-center justify-center">
              <img
                src="./icon/watchlist-bold.svg"
                alt=""
                class="item-icon bg-[#B42DE3]"
              />
              <span class="item-name md:hidden md:whitespace-nowrap"
                >Watch List</span
              >
              <i
                class="fa-regular fa-angle-right text-gray-700 pr-3 md:hidden"
              ></i>
            </a>
          </li>
        </ul>
        <div
          class="stroke hidden md:block w-11/12 h-[1px] bg-black/20 m-auto my-6"
        ></div>
        <p class="appDrawerListItem__title md:hidden md:whitespace-nowrap">
          Movie
        </p>
        <ul class="my-4">
          <li class="my-3">
            <a href="#" class="flex items-center justify-center">
              <img
                src="./icon/upcoming.svg"
                alt=""
                class="item-icon bg-[#FF4B4B]"
              />
              <span class="item-name md:hidden md:whitespace-nowrap"
                >Upcoming</span
              >
              <i
                class="fa-regular fa-angle-right text-gray-700 pr-3 md:hidden"
              ></i>
            </a>
          </li>
          <li class="my-3">
            <a href="#" class="flex items-center justify-center">
              <img
                src="./icon/popular.svg"
                alt=""
                class="item-icon bg-[#14E07E]"
              />
              <span class="item-name md:hidden md:whitespace-nowrap"
                >Popular</span
              >
              <i
                class="fa-regular fa-angle-right text-gray-700 pr-3 md:hidden"
              ></i>
            </a>
          </li>
          <li class="my-3">
            <a href="#" class="flex items-center justify-center">
              <img
                src="./icon/top-rated.svg"
                alt=""
                class="item-icon bg-[#4959EF]"
              />
              <span class="item-name md:hidden md:whitespace-nowrap"
                >Top Rated</span
              >
              <i
                class="fa-regular fa-angle-right text-gray-700 pr-3 md:hidden"
              ></i>
            </a>
          </li>
          <li class="my-3">
            <a href="#" class="flex items-center justify-center">
              <img
                src="./icon/now-playing.svg"
                alt=""
                class="item-icon bg-[#FD9739]"
              />
              <span class="item-name md:hidden md:whitespace-nowrap"
                >Now Playing</span
              >
              <i
                class="fa-regular fa-angle-right text-gray-700 pr-3 md:hidden"
              ></i>
            </a>
          </li>
        </ul>
        <p class="appDrawerListItem__title md:hidden md:whitespace-nowrap">
          Tv Show
        </p>
        <div
          class="stroke hidden md:block w-11/12 h-[1px] bg-black/20 m-auto my-6"
        ></div>
        <ul class="my-4">
          <li class="my-3">
            <a href="#" class="flex items-center justify-center">
              <img
                src="./icon/airing-today.svg"
                alt=""
                class="item-icon bg-[#CC45AE]"
              />
              <span class="item-name md:hidden md:whitespace-nowrap"
                >Airing Today</span
              >
              <i
                class="fa-regular fa-angle-right text-gray-700 pr-3 md:hidden"
              ></i>
            </a>
          </li>
          <li class="my-3">
            <a href="#" class="flex items-center justify-center">
              <img
                src="./icon/popular.svg"
                alt=""
                class="item-icon bg-[#DFCD06]"
              />
              <span class="item-name md:hidden md:whitespace-nowrap"
                >Popular</span
              >
              <i
                class="fa-regular fa-angle-right text-gray-700 pr-3 md:hidden"
              ></i>
            </a>
          </li>
          <li class="my-3">
            <a href="#" class="flex items-center justify-center">
              <img
                src="./icon/top-rated.svg"
                alt=""
                class="item-icon bg-[#09C6BA]"
              />
              <span class="item-name md:hidden md:whitespace-nowrap"
                >Top Rated</span
              >
              <i
                class="fa-regular fa-angle-right text-gray-700 pr-3 md:hidden"
              ></i>
            </a>
          </li>
        </ul>
        <p class="appDrawerListItem__title md:hidden md:whitespace-nowrap">
          Setting
        </p>
        <div
          class="stroke hidden md:block w-11/12 h-[1px] bg-black/20 m-auto my-6"
        ></div>
        <ul class="mt-4 mb-2">
          <li class="my-3 flex items-center justify-center">
            <img
              src="./icon/preference.svg"
              alt=""
              class="item-icon bg-[#0069A4]"
            />
            <span class="item-name md:hidden md:whitespace-nowrap"
              >Preference</span
            >
            <i
              class="fa-regular fa-angle-right text-gray-700 pr-3 md:hidden"
            ></i>
          </li>
          <li class="my-3 flex items-center justify-center">
            <img
              src="./icon/moon-bold.svg"
              alt=""
              class="item-icon bg-[#121212]"
            />
            <span class="item-name md:hidden md:whitespace-nowrap w-[50%]"
              >Dark Mode</span
            >
            <div
              class="toggle-dark p-px h-6 w-16 bg-[#DDE7F0] border border-gray-300 rounded-full flex hover:justify-end hover:bg-blue-500 md:hidden"
            >
              <div class="h-full aspect-square rounded-full bg-white"></div>
            </div>
          </li>
        </ul>
      </div>
    `;
  }
}

customElements.define('app-drawer', AppDrawer);
export default AppDrawer;
