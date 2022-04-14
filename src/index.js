import 'bootstrap/js/src/dropdown';
import 'bootstrap/js/src/collapse';
import Swiper, { Navigation, Pagination } from 'swiper';
import './scss/style.scss';
import './images/slide-1.jpg';
import './images/slide-2.jpg';
import './images/slide-3.jpg';
import './images/farmer-1.jpg';
import './images/farmer-2.jpg';
import './images/farmer-3.jpg';
import './images/farmer-4.jpg';
import './images/farmer-5.jpg';
import './images/farmer-6.jpg';
import './images/post-1.jpg';

const swiper = new Swiper('.slider-home', {
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const mainHeader = document.querySelector('.main-header');
const navbar = mainHeader.querySelector('.navbar');
const scrollTopLimit = 50;
window.onscroll = () => {
  if (document.body.scrollTop >= scrollTopLimit || document.documentElement.scrollTop >= scrollTopLimit) {
    mainHeader.classList.add('bg-light');
    mainHeader.classList.add('shadow-sm');
    mainHeader.classList.remove('bg-transparent');
    navbar.classList.add('navbar-light');
    navbar.classList.remove('navbar-dark');
  } else {
    mainHeader.classList.remove('bg-light');
    mainHeader.classList.remove('shadow-sm');
    mainHeader.classList.add('bg-transparent');
    navbar.classList.remove('navbar-light');
    navbar.classList.add('navbar-dark');
  }
};
