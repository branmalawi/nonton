/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
import CacheManager from './utils/cacheManeger';

const assetToCache = [
  './',
  './index.html',
  './logo/nonton.svg',
  './logo/nonton-72x72.png',
  './logo/nonton-96x96.png',
  './logo/nonton-128x128.png',
  './logo/nonton-144x144.png',
  './logo/nonton-152x152.png',
  './logo/nonton-192x192.png',
  './logo/nonton-384x384.png',
  './logo/nonton-512x512.png',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  console.log('service worker installed');
  event.waitUntil(CacheManager.cachingAppShell(assetToCache));
});

self.addEventListener('activate', (event) => {
  console.log('service worker actived');
  event.waitUntil(CacheManager.deleteCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheManager.revalidateCache(event.request));
});

self.addEventListener('message', (event) => {
  // console.log(`serbice woler received message: ${event.data}`);
  if (event.data == 'remove weekly cache') {
    CacheManager.deleteWeeklyCache();
  }
  if (event.data == 'remove monthly cache') {
    CacheManager.deleteMontlyCache();
  }
});

// const revalidateCache = async (request) => {
//   const response = await caches.match(request);
//   if (response) {
//     _fetchRequest(request);
//     return response;
//   }

//   return _fetchRequest(request);
// };

// const _fetchRequest = async (request) => {
//   const response = await fetch(request);
//   if (!response || response.status !== 200) {
//     return response;
//   }

//   _addToCache(request, response.clone());
//   return response;
// };

// const _addToCache = async (request, response) => {
//   const cache = await caches.open(CONFIG.CACHE_NAME);
//   cache.put(request, response);
//   // const keys = await cache.keys();
//   // keys.forEach((key) => {
//   //   console.log(key.timeStamp);
//   // });
// };
