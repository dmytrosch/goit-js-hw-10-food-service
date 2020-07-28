import cards from '../data/menu.json';
import cardsTemplate from '../templates/dish-card.hbs';

function createMarkUp(parentNode) {
    const markUp = cardsTemplate(cards);
    parentNode.insertAdjacentHTML('beforeend', markUp);
}
export { createMarkUp };
