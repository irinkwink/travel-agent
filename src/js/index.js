import autoCompleteLocation from "./modules/autoCompliteLocation";
import datePicker from "./modules/datePicker";

autoCompleteLocation();
datePicker();

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 32,
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },
});



// import mobileNav from './modules/mobile-nav.js';
// mobileNav();
