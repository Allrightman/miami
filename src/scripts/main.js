'use strict';

const toggler = document.querySelector('.header__toggler');
const page = document.querySelector('.page');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.header__menu-icon');

const toggleMenu = () => {
  page.classList.toggle('page--fixed');
  nav.classList.toggle('nav--active');
  menuIcon.classList.toggle('header__menu-icon--active');
};

toggler.addEventListener('click', toggleMenu);
nav.addEventListener('click', toggleMenu);
