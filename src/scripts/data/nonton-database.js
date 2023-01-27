/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
import API_ENDPOINT from '../globals/api-endpoint';

class NontonDatabase {
  static async recommended(type, genres, date, page = 1) {
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const year = date.getFullYear();

    const dateData = type == 'movie' ? `primary_release_date.lte=${year}-${month}-${day}` : `first_air_date.lte=${year}-${month}-${day}`;

    const response = await fetch(API_ENDPOINT.RECOMMENDED(type, genres, dateData, page));
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async topRated(mediaType, page = 1) {
    const response = await fetch(API_ENDPOINT.BASIC_REQUEST(mediaType, 'top_rated', page));
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async popular(mediaType, page = 1) {
    const response = await fetch(API_ENDPOINT.BASIC_REQUEST(mediaType, 'popular', page));
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async freeToWatch(type, genres, page = 1) {
    const response = await fetch(API_ENDPOINT.FREE_TO_WATCH(type, genres, page));
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async trending() {
    const response = await fetch(API_ENDPOINT.TRENDING);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async latest(type, genres, date, page = 1) {
    const year = date.getFullYear();
    const dateData = type == 'movie' ? `primary_release_year=${year}` : `first_air_date_year=${year}`;
    const response = await fetch(API_ENDPOINT.LATEST(type, genres, dateData, page));
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detail(type, id) {
    const response = await fetch(API_ENDPOINT.DETAIL(type, id));
    const responseJson = await response.json();
    return responseJson;
  }
}

export default NontonDatabase;
