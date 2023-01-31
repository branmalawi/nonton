/* eslint-disable max-len */
import CONFIG from '../globals/config';

const swTimeoutChecker = {
  setTimeoutWeek() {
    return localStorage.setItem(CONFIG.LOCALSTORAGE_TIMEOUT_WEEK, `${new Date().getTime()}`);
  },

  setTimeoutMonth() {
    const nowDate = new Date();
    nowDate.setMonth(nowDate.getMonth() + 1, 1);
    return localStorage.setItem(CONFIG.LOCALSTORAGE_TIMEOUT_MONTH, `${nowDate.getMonth()}`);
  },

  getTimeoutWeek() {
    return parseInt(localStorage.getItem(CONFIG.LOCALSTORAGE_TIMEOUT_WEEK), 10);
  },
  getTimeoutMonth() {
    return parseInt(localStorage.getItem(CONFIG.LOCALSTORAGE_TIMEOUT_MONTH), 10);
  },

  registerTimeout() {
    if (!this.getTimeoutWeek() || !this.getTimeoutMonth()) {
      this.setTimeoutWeek();
      this.setTimeoutMonth();
    }
  },

  checkWeekTimeout() {
    const weekInMillisecond = 1000 * 60 * 60 * 24 * 7;
    const nowTime = new Date().getTime();
    return nowTime - this.getTimeoutWeek() > weekInMillisecond;
  },

  checkMonthTimeout() {
    const nowMonth = new Date().getMonth();
    const timeoutMonth = this.getTimeoutMonth();
    // nowMonth.setMonth(nowMonth.getMonth(), 1);
    // timeoutMonth.setMonth(this.getTimeoutMonth(), 1);
    return nowMonth >= timeoutMonth;
  },

  swCheckTimeout() {
    if (!('serviceWorker' in navigator)) {
      console.log('browser tidak mendukung service worker');
      return;
    }

    const serviceWorker = navigator.serviceWorker.controller;
    this.registerTimeout();
    if (this.checkWeekTimeout()) {
      serviceWorker.postMessage('remove weekly cache');
    }

    if (this.checkMonthTimeout()) {
      serviceWorker.postMessage('remove monthly cache');
      this.setTimeoutMonth();
    }
  },
};

export default swTimeoutChecker;
