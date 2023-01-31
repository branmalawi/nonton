/* eslint-disable new-cap */
/* eslint-disable max-len */
import CONFIG from '../globals/config';

const CacheManager = {
  async cachingAppShell(requests) {
    const cache = await this._openCache();
    cache.addAll(requests);
    // TimeoutCache.getTimeoutWeek();
    // if (!this.getTimeoutWeek() || !this.getTimeoutMonth()) {
    //   this.setTimeoutWeek();
    //   this.setTimeoutMonth(new Date().getMonth);
    // }
  },

  async deleteCache() {
    this.deleteOlderCacheName();
    // this.deleteWeeklyCache();
    // this.deleteMontlyCache();
  },

  async deleteOlderCacheName() {
    const cache = await caches.keys();
    // cache.forEach((key) => {
    //   console.log(key.created);
    // });
    cache.filter((name) => name !== CONFIG.CACHE_NAME).map((filteredName) => caches.delete(filteredName));
  },

  async deleteWeeklyCache() {
    const cache = await this._openCache();
    const keys = await cache.keys();
    keys.filter((key) => key.url.includes('https://image.tmdb.org/')).map((key) => cache.delete(key));
    // 'https://image.tmdb.org/' adalah request untuk image, semua image akan dihapus dalam seminggu
  },

  async deleteMontlyCache() {
    const cache = await this._openCache();
    const keys = await cache.keys();
    keys.filter((key) => key.url.includes('with_genres' || 'append_to_response')).map((key) => cache.delete(key));
    // 'with_genres' adala request yg memerlukan genre, akan dihapus selama sebulan
    // 'append_to_response' terdatap dalam request untuk detail movie & tv, akan dihapus selama sebulan
  },

  async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      this._fetchRequest(request);
      return response;
    }
    return this._fetchRequest(request);
  },

  async _fetchRequest(request) {
    const response = await fetch(request);
    if (!response || response.status !== 200) {
      return response;
    }
    this._addToCache(request, response.clone());
    return response;
  },

  async _addToCache(request, response) {
    const cache = await this._openCache();
    cache.put(request, response);
    cache.created = 10;
    // console.log(cache);
  },

  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },
};

export default CacheManager;
