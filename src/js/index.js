import mobileNav from './modules/mobile-nav.js';


import {welcomeSlider} from './modules/welcome-slider.js';
import {videoSlider} from './modules/swiper-slider.js';
import {ticketCalculator} from './modules/tickets-count.js';
import {initMap} from './modules/map.js';
import {formDateSelect} from './modules/form-date-select.js';
import {formTimeSelect} from './modules/form-time-select.js';
import {ticketCastomSelect} from './modules/form-select-options.js';
import {modalForm} from './modules/form-open-close.js';
import {Form} from './modules/form-validate/form.js';

window.addEventListener('DOMContentLoaded', () => {

//   iosVhFix();

  window.addEventListener('load', () => {
    mobileNav();
    welcomeSlider();
    videoSlider();
    ticketCalculator();
    formDateSelect();
    formTimeSelect();
    ticketCastomSelect();
    modalForm();
    initMap();

    const form = new Form();
        window.form = form;
        form.init();
    // validateName ();
    
    // const form = new Form();
    // window.form = form;
    // form.init();
    // slider.init();
    // slider2.init();
    // initTabs();
    // initAccordions();
    // initVideo();
  });
});
