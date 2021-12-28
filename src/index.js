import './index.css';
import Swiper, { Scrollbar, Keyboard, Mousewheel } from "swiper";

const oneCLickButton = document.querySelector('#one');
const rgbButton = document.querySelector('#rgb');
const fanButton = document.querySelector('#fan');
const monitoringButton = document.querySelector('#monitoring');

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    // loop: true,
    spaceBetween: 30,
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
    // mousewheel: {
    //     invert: false,
    // },
    breakpoints: {
        1300: {
            slidesPerView: 1,
        }
    }
});

const handleChoseEl = (el) => {
    swiper.slideTo(el, 2);
    // swiper.activeIndex(el);
    console.log(swiper.activeIndex);
    console.log(el);
}

oneCLickButton.addEventListener('click', () => {
    handleChoseEl(0);
});

rgbButton.addEventListener('click', () => {
    handleChoseEl(1);
});

fanButton.addEventListener('click', () => {
    handleChoseEl(2)
});

monitoringButton.addEventListener('click', () => {
    handleChoseEl(3);
})

// console.log(swiper);

const button1 = document.querySelector('#info-button-1');
const button2 = document.querySelector('#info-button-2');
const button3 = document.querySelector('#info-button-3');
const button4 = document.querySelector('#info-button-4');

const imagesContainer = document.querySelector('.guide-image__wrapper');

button1.addEventListener('click', () => {
    changeImage();
    document.querySelector('#image-1').classList.remove('guide__image-hidden');
});

button2.addEventListener('click', () => {
    changeImage();
    document.querySelector('#image-2').classList.remove('guide__image-hidden');
});

button3.addEventListener('click', () => {
    changeImage();
    document.querySelector('#image-3').classList.remove('guide__image-hidden');
});

button4.addEventListener('click', () => {
    changeImage();
    document.querySelector('#image-4').classList.remove('guide__image-hidden');
});

const changeImage = () => {
    document.querySelectorAll('.guide__image').forEach((item) => {
        item.classList.add('guide__image-hidden');
    })
}
