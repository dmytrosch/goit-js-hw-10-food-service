import './styles.css';
import { checkTheme, switchTheme } from './js/site-themes';
import { createMarkUp } from './js/create-product-cards';
import { io } from './js/intersection-observer';

const refs = {
    tumbler: document.querySelector('.js-switch-input'),
    cardsList: document.querySelector('.js-menu'),
};
createMarkUp(refs.cardsList);
checkTheme(refs.tumbler);

refs.tumbler.addEventListener('change', switchTheme);

const cards = document.querySelectorAll('.menu__item');

cards.forEach(card => io.observe(card));
