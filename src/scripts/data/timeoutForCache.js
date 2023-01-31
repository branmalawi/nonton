import CONFIG from '../globals/config';

const TimeoutCache = {
  setTimeoutWeek() {
    return localStorage.setItem(CONFIG.LOCALSTORAGE_TIMEOUT_WEEK, toString(new Date().getTime()));
  },

  setTimeoutMonth(month) {
    return localStorage.setItem(CONFIG.LOCALSTORAGE_TIMEOUT_MONTH, toString(month));
  },

  getTimeoutWeek() {
    return parseInt(localStorage.getItem(CONFIG.LOCALSTORAGE_TIMEOUT_WEEK), 10);
  },
  getTimeoutMonth() {
    return parseInt(localStorage.getItem(CONFIG.LOCALSTORAGE_TIMEOUT_MONTH), 10);
  },
};

export default TimeoutCache;
