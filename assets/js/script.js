'use strict';
//navbar buttons variable
const hamburger = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');

// navbar variable

const navBar = document.querySelector('.navbar-nav');

//navbar toggle function
const navbarToggle = ()=> navBar.classList.toggle('active');

//added toggle function on navbar buttons
hamburger.addEventListener('click', navbarToggle);
closeBtn.addEventListener('click', navbarToggle);
