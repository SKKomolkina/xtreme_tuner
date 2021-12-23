import './index.css';
import Swiper, { Scrollbar } from "swiper";

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    loop: true,
    modules: [Scrollbar],
    // freeMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true,
        dragSize: 3,
    },
});
