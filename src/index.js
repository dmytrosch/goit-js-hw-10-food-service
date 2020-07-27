import './styles.css';
import { checkTheme, switchTheme } from './js/site-themes'

const refs = {
    tumbler: document.querySelector('.js-switch-input'),
}

checkTheme(refs.tumbler)
refs.tumbler.addEventListener('change', switchTheme)