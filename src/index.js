import './index.css';
import Swiper, { Scrollbar, Keyboard, Mousewheel } from "swiper";

const oneCLickButton = document.querySelector('#one');
const rgbButton = document.querySelector('#rgb');
const fanButton = document.querySelector('#fan');
const monitoringButton = document.querySelector('#monitoring');


const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    loop: true,
    modules: [Scrollbar, Keyboard, Mousewheel],
    // freeMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true,
        dragSize: 249,
        // dragClass: '.swiper-scrollbar-drag',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    mousewheel: {
        invert: false,
    },
    breakpoints: {
        1300: {
            slidesPerView: 1.5,
        }
    }
});
