/* eslint-disable import/no-unresolved */
import 'regenerator-runtime';
import '../styles/style.css';
import Swiper from 'swiper';
import 'swiper/css';

import App from './views/app';

const app = new App({
  navbar: document.querySelector('#navBar'),
  buttonOpenDrawer: document.querySelector('#buttonDrawer'),
  appDrawer: document.querySelector('#appDrawer'),
  darkSwitch: document.querySelector('#darkSwitch'),
  menuButton: null,
  content: document.querySelector('#mainContent'),
  overlay: document.querySelector('#overlay'),
  bottombarMenus: document.querySelectorAll('#bottomBar > a'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  // await swRegister();
});
// const swiper = new Swiper('.swiper', {
// slidesPerView: 1,
//   direction: 'horizontal',
//   spaceBetween: 10,
//   loop: true,
//   // navigation: {
//   //   nextEl: '.swiper-button-next',
//   //   prevEl: '.swiper-button-prev',
//   // },
//   breakpoints: {
//     480: {
//       slidesPerView: 2,
//     },
//     640: {
//       slidesPerView: 3,
//     }
//   }
// })
