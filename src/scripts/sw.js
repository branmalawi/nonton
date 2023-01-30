/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
import CONFIG from './globals/config';

self.addEventListener('install', () => {
  console.log('service worker installed');
});

self.addEventListener('activate', () => {
  console.log('service worker actived');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(revalidateCache(event.request));
});

const revalidateCache = async (request) => {
  const response = await caches.match(request);
  if (response) {
    _fetchRequest(request);
    return response;
  }

  return _fetchRequest(request);
};

const _fetchRequest = async (request) => {
  const response = await fetch(request);
  if (!response || response.status !== 200) {
    return response;
  }

  _addToCache(request, response.clone());
  return response;
};

const _addToCache = async (request, response) => {
  const cache = await caches.open(CONFIG.CACHE_NAME);
  cache.put(request, response);
};
