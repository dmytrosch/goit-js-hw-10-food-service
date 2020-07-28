const onEntry = (entries, observe) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const image = entry.target.querySelector('img');
            const src = image.dataset.lazy;
            image.src = src;
            entry.target.classList.remove('menu__item--lefted');
        }
    });
};
const io = new IntersectionObserver(onEntry, {
    rootMargin: '0px 0px -100px 4000px',
});

export { io };
