import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function swiperFunc() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    slidesPerView: 4,
    spaceBetween: 32,
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },
  });
}

export default swiperFunc;