/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/style.css';
import dataTest from './utils/testData';
import swRegister from './utils/sw-register';
import swTimeoutChecker from './utils/sw-timeoutChecker';
import './components/bottomBar';
import './components/appDrawer';
import './components/recommended-list';
import './components/rateBar';
import './components/movieItem';
import './components/latestItem';
import './components/imageItemSkeleton';
import './components/genreFilter';

import App from './views/app';
// Or with different syntax:

const app = new App({
  body: document.querySelector('body'),
  navbar: document.querySelector('#navBar'),
  buttonOpenDrawer: document.querySelectorAll('.buttonDrawer'),
  searchContainer: document.querySelector('#searchContainer'),
  searchForm: document.querySelector('#searchContainer form'),
  searchbar: document.querySelector('#searchInput'),
  searchResult: document.querySelector('#searchResult'),
  btnsubmitandclose: document.querySelector('#submitAndClose'),
  btnOpenSearchbar: document.querySelector('#openSearchbar'),
  appDrawer: document.querySelector('#appDrawer'),
  btnMenuAppDrawer: document.querySelectorAll('#appDrawer a'),
  content: document.querySelector('#mainContent'),
  overlay: document.querySelector('#overlay'),
  bottombarMenus: document.querySelectorAll('#bottomBar > a'),
});

const preferenceButton = document.querySelector('#preferenceButton');
const darkSwitch = document.querySelector('#darkSwitch');

preferenceButton.addEventListener('click', () => {
  document.body.innerHTML += '<genre-filter></genre-filter>';
});

darkSwitch.addEventListener('click', () => {
  document.querySelector('html').classList.toggle('dark');
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  dataTest.nama = 'malawi';
  app.renderPage();
  swRegister();
  swTimeoutChecker.swCheckTimeout();
  // await swRegister();
});

const popular = document.querySelector('#latestTrailer');
