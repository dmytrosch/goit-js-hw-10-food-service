import './styles.css';
import { checkTheme, switchTheme } from './js/site-themes';
import { createMarkUp } from './js/create-product-cards';

const refs = {
    tumbler: document.querySelector('.js-switch-input'),
    cardsList: document.querySelector('.js-menu'),
};
createMarkUp(refs.cardsList);
checkTheme(refs.tumbler)

refs.tumbler.addEventListener('change', switchTheme);

