/* eslint-disable dot-notation */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_SEARCHRESULT } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_SEARCHRESULT, { keyPath: 'id' });
  },
});

const FavoriteRestoDB = {
  async updateData(data) {
    const datas = data.split(',');
    const object = {
      id: datas[0],
      list: datas[1],
    };

    const found = await this.getData(object.id);

    if (found) {
      found['list'] = object['list'];
      console.log(found);
      return (await dbPromise).put(OBJECT_STORE_SEARCHRESULT, found);
    }

    // return (await dbPromise).put(OBJECT_STORE_SEARCHRESULT, object);
  },

  async getData(id) {
    return (await dbPromise).get(OBJECT_STORE_SEARCHRESULT, id);
  },
  // async getRestaurant(id) {
  //   if (!id) {
  //     return;
  //   }
  //   return (await dbPromise).get(OBJECT_STORE_SEARCHRESULT, id);
  // },
  // async getAllRestaurants() {
  //   return (await dbPromise).getAll(OBJECT_STORE_SEARCHRESULT);
  // },
  // async putRestaurant(resto) {
  //   if (!resto.hasOwnProperty('id')) {
  //     return;
  //   }
  //   return (await dbPromise).put(OBJECT_STORE_SEARCHRESULT, resto);
  // },
  // async deleteRestaurant(id) {
  //   return (await dbPromise).delete(OBJECT_STORE_SEARCHRESULT, id);
  // },
};

export default FavoriteRestoDB;
