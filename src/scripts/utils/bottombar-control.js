/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
import UrlParser from '../routes/url-parser';

const BottomBarController = {
  init({ buttonMenus }) {
    window.addEventListener('hashchange', () => {
      const url = UrlParser.parseActiveUrlWithCombiner();
      this._activatingButton(this.route[url], buttonMenus);
    });
    window.addEventListener('load', () => {
      const url = UrlParser.parseActiveUrlWithCombiner();
      this._activatingButton(this.route[url], buttonMenus);
    });
  },

  route: {
    '/': '#/home',
    '/home': '#/home',
    '/favorite': '#/favorite',
    '/list': '#/list',
  },

  _activatingButton(event, buttonMenus) {
    buttonMenus.forEach((buttonMenu) => {
      buttonMenu.getAttribute('href') == event ? this._printActiveButton(buttonMenu) : this._printUnactiveButton(buttonMenu);
    });
  },

  _printActiveButton(button) {
    button.classList.add('bottom-bar__active');
    button.tabIndex = -1;
    const srcImg = button.firstElementChild.src.split('.');
    srcImg[0] += '-bulk';
    button.firstElementChild.src = srcImg.join('.');
  },

  _printUnactiveButton(button) {
    button.classList.remove('bottom-bar__active');
    button.tabIndex = 0;
    const srcImg = button.firstElementChild.src.split('.');
    srcImg[0] = srcImg[0].replace('-bulk', '');
    button.firstElementChild.src = srcImg.join('.');
  },
};

export default BottomBarController;
