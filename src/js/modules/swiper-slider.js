import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';


export const videoSlider = () => {
  const swiper = new Swiper(".mySwiper", {
      
      freeMode: true,
      watchSlidesProgress: true,
      modules: [Autoplay, Navigation, Pagination],
      pagination: {
      el: '.video-pagination',
      clickable: true,
      type: 'bullets',
      dynamicBullets: false,
      },
      navigation: {
      nextEl: ".video-button-next",
      prevEl: ".video-button-prev",
    },
      breakpoints: {
    420: {
      slidesPerView: 2,
      spaceBetween: 20,
      initialSlide: 1
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      initialSlide: 1
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 41,
      initialSlide: 1
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 42,
      initialSlide: 1
    },
  },
    });

  const swiper2 = new Swiper(".mySwiper2", {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    modules: [Autoplay, Navigation, Pagination],
    navigation: {
      nextEl: ".video-button-next",
      prevEl: ".video-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
};


