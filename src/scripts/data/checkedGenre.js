/* eslint-disable max-len */
import CONFIG from '../globals/config';

const CheckedGenres = {
  add(newValue) {
    localStorage.setItem(CONFIG.LOCALSTORAGE_CHECKED_GENRES, JSON.stringify(newValue));
  },

  getAll() {
    return JSON.parse(localStorage.getItem(CONFIG.LOCALSTORAGE_CHECKED_GENRES));
  },

  getNameGenre() {
    const genresCheckedData = this.getAll();
    if (genresCheckedData) {
      return this.convertObjectToArray(genresCheckedData).map((genreCheckedData) => genreCheckedData[0]);
    }
    return null;
  },

  getMovieGenreId() {
    const genresCheckedData = this.getAll();
    if (genresCheckedData) {
      return this.convertObjectToArray(genresCheckedData).map((genreCheckedData) => genreCheckedData[1][0])[Math.floor(Math.random() * 3)];
    }
    return null;
  },

  getTvGenreId() {
    const genresCheckedData = this.getAll();
    if (genresCheckedData) {
      return this.convertObjectToArray(genresCheckedData).map((genreCheckedData) => genreCheckedData[1][1])[Math.floor(Math.random() * 3)];
    }
    return null;
  },

  convertObjectToArray(object) {
    const result = Object.entries(object).map(([key, value]) => [key, value.split(',')]);
    return result;
  },
};

export default CheckedGenres;
