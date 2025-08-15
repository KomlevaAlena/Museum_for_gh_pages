const welcomeSlider = () => {
    const sliderItems = Array.from(document.querySelectorAll('.welcome-list__item'));
    const sliderPagination = Array.from(document.querySelectorAll('.welcome-pagination__button'));
    const sliderPrev = document.querySelector('.welcome-button-prev');
    const sliderNext = document.querySelector('.welcome-button-next');

    const goToSlide = (index) => {
        sliderItems.forEach(item => item.classList.remove('welcome-list__item--active'));
        sliderPagination.forEach(btn => btn.classList.remove('welcome-pagination__button--active'));
        
        sliderItems[index].classList.add('welcome-list__item--active');
        sliderPagination[index].classList.add('welcome-pagination__button--active');
    };

    sliderPagination.forEach((button, index) => {
        button.addEventListener('click', () => goToSlide(index));
    });

    sliderNext.addEventListener('click', () => {
        const currentIndex = sliderItems.findIndex(item => item.classList.contains('welcome-list__item--active'));
        const nextIndex = (currentIndex + 1) % sliderItems.length;
        goToSlide(nextIndex);
    });

    sliderPrev.addEventListener('click', () => {
        const currentIndex = sliderItems.findIndex(item => item.classList.contains('welcome-list__item--active'));
        const prevIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        goToSlide(prevIndex);
    });
};

export { welcomeSlider };
