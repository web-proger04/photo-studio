let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu-header');
let headerContainer = document.querySelector('.header__container');
let body = document.querySelector('body');

burger.addEventListener('click', () => {
   menu.classList.toggle('active');
   burger.classList.toggle('active');
   body.classList.toggle('lock');
   headerContainer.classList.toggle('active');
});