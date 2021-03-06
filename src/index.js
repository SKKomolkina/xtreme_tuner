import './index.css';
import Swiper, {Scrollbar, Keyboard, Mousewheel, Pagination} from "swiper";

//SWIPER
const oneCLickButton = document.querySelector('#one');
const rgbButton = document.querySelector('#rgb');
const fanButton = document.querySelector('#fan');
const monitoringButton = document.querySelector('#monitoring');

const swiperContainer = document.querySelector('.swiper');

const swiper = new Swiper(".swiper", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    modules: [Scrollbar, Keyboard, Mousewheel, Pagination],
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: "auto",
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    breakpoints: {
        1780: {
            // slidesPerView: 1.2,
            spaceBetween: 22,
        }
    },
});

const handleChoseEl = (el) => {
    swiper.slideTo(el, 2);
}

swiper.on('activeIndexChange', () => {
    console.log(swiper.activeIndex);
    const buttons = [oneCLickButton, rgbButton, fanButton, monitoringButton];

    const removeClassList = () => {
        buttons.forEach(item => {
            item.classList.remove('slider__button_active');
        });
    }

    if (swiper.activeIndex === 0) {
        removeClassList();
        oneCLickButton.classList.add('slider__button_active');
    }
    if (swiper.activeIndex === 1) {
        removeClassList();
        rgbButton.classList.add('slider__button_active');
    }
    if (swiper.activeIndex === 2) {
        removeClassList();
        fanButton.classList.add('slider__button_active');
    }
    if (swiper.activeIndex === 3) {
        removeClassList();
        monitoringButton.classList.add('slider__button_active');
    }

})

oneCLickButton.addEventListener('click', () => {
    handleChoseEl(0);
});

rgbButton.addEventListener('click', () => {
    handleChoseEl(1);
});

fanButton.addEventListener('click', () => {
    handleChoseEl(2);
});

monitoringButton.addEventListener('click', () => {
    handleChoseEl(3);
});

// INSTRUCTION
const button1 = document.querySelector('#info-button-1');
const button2 = document.querySelector('#info-button-2');
const button3 = document.querySelector('#info-button-3');
const button4 = document.querySelector('#info-button-4');

button1.addEventListener('click', () => {
    changeImage();
    button1.classList.add('guide__button_active');
    document.querySelector('#image-1').classList.remove('guide__image-hidden');
});

button2.addEventListener('click', () => {
    changeImage();
    button2.classList.add('guide__button_active');
    document.querySelector('#image-2').classList.remove('guide__image-hidden');
});

button3.addEventListener('click', () => {
    changeImage();
    button3.classList.add('guide__button_active');
    document.querySelector('#image-3').classList.remove('guide__image-hidden');
});

button4.addEventListener('click', () => {
    changeImage();
    button4.classList.add('guide__button_active');
    document.querySelector('#image-4').classList.remove('guide__image-hidden');
});

const changeImage = () => {
    document.querySelectorAll('.guide__button').forEach(item => {
        item.classList.remove('guide__button_active');
    });

    document.querySelectorAll('.guide__image').forEach((item) => {
        item.classList.add('guide__image-hidden');
    });
}

// SCROLL TO DOWNLOAD
const scrollButtons = document.querySelectorAll('.intro__button_btn');
const downloadContainer = document.querySelector('.download');

scrollButtons.forEach(button => button.addEventListener('click', () => {
    downloadContainer.scrollIntoView({behavior: "smooth"});
}));

