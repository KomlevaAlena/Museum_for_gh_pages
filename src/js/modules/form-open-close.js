export function modalForm() {
   
    const buyBtn = document.getElementById('buy_ticket');
    const closeBtn = document.querySelector('.form-modal-btn');
    const wrapper = document.querySelector('.form-wrapper');
    const form = document.querySelector('.form');
    const menuIcon = document.querySelector('.form-icon');

    // сlose
    const closeForm = () => {
        wrapper.classList.remove('form-wrapper--open');
        menuIcon.classList.remove('form-icon--active');
        document.body.classList.remove('no-scroll');
    };

    // open
    const openForm = () => {
        wrapper.classList.add('form-wrapper--open');
        menuIcon.classList.add('form-icon--active');
        document.body.classList.add('no-scroll');
    };

    // open
    buyBtn.addEventListener('click', openForm);

    // close
    closeBtn.addEventListener('click', closeForm);

    // click wrapper
    wrapper.addEventListener('click', (e) => {
        if (e.target === wrapper) { // Проверяем, что кликнули именно на wrapper, а не на его детей
            closeForm();
        }
    });

    //ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && wrapper.classList.contains('form-wrapper--open')) {
            closeForm();
        }
    });

    
    form.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}
