/* eslint-disable object-curly-newline */
/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
import UrlParser from '../routes/url-parser';

const DrawerInitiator = {
  init({ buttonOpenDrawer, appDrawer, btnMenuAppDrawer, overlay }) {
    buttonOpenDrawer.forEach((button) => {
      button.addEventListener('click', () => {
        appDrawer.classList.toggle('app_actived');
        overlay.classList.toggle('bg-black/70');
        overlay.classList.toggle('hidden');
        console.log(overlay);
      });
    });

    overlay.addEventListener('click', () => {
      appDrawer.classList.remove('app_actived');
      overlay.classList.toggle('bg-black/70');
      overlay.classList.toggle('hidden');
    });

    btnMenuAppDrawer.forEach((buttonMenu) => {
      buttonMenu.addEventListener('click', () => {
        appDrawer.classList.remove('app_actived');
        overlay.classList.remove('bg-black/70');
        overlay.classList.remove('hidden');
      });
    });

    window.addEventListener('hashchange', () => {
      const url = UrlParser.parseActiveUrlForAppDrawer();
      console.log(url);
      this._activatingButton(this.route[url], btnMenuAppDrawer);
    });
    window.addEventListener('load', () => {
      const url = UrlParser.parseActiveUrlForAppDrawer();
      this._activatingButton(this.route[url], btnMenuAppDrawer);
    });
  },

  route: {
    '/': '#/home',
    '/home': '#/home',
    '/favorite': '#/favorite',
    '/watchlist': '#/watchlist',
    '/upcoming/movie': '#/upcoming/movie',
    '/now-playing/movie': '#/now-playing/movie',
    '/airing-today/tv': '#/airing-today/tv',
    '/popular/movie': '#/popular/movie',
    '/popular/tv': '#/popular/tv',
    '/top-rated/movie': '#/top-rated/movie',
    '/top-rated/tv': '#/top-rated/tv',
  },

  _activatingButton(event, btnMenuAppDrawer) {
    btnMenuAppDrawer.forEach((buttonMenu) => {
      console.log(buttonMenu.getAttribute('href'));
      buttonMenu.getAttribute('href') == event ? this._printActiveButton(buttonMenu) : this._printUnactiveButton(buttonMenu);
    });
  },

  _printActiveButton(buttonMenu) {
    buttonMenu.classList.add('item-actived');
    buttonMenu.tabIndex = -1;
  },

  _printUnactiveButton(buttonMenu) {
    buttonMenu.classList.remove('item-actived');
    buttonMenu.tabIndex = 0;
  },
};

export default DrawerInitiator;
