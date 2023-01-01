import 'regenerator-runtime';
import '../styles/style.css';
import Swiper from 'swiper';
import 'swiper/css';
console.log('indah yak');

const swiper = new Swiper('.swiper', {
slidesPerView: 1,
  direction: 'horizontal',
  spaceBetween: 10,
  loop: true,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    }
  }
})