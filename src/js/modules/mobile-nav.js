// function mobileNav() {
// 	// Mobile nav button
// 	const navBtn = document.querySelector('.mobile-nav-btn');
// 	const nav = document.querySelector('.mobile-nav');
// 	const menuIcon = document.querySelector('.nav-icon');
// 	const welcomeContent = document.querySelector('.welcome__content');

// 	navBtn.onclick = function () {
// 		nav.classList.toggle('mobile-nav--open');
// 		menuIcon.classList.toggle('nav-icon--active');
// 		document.body.classList.toggle('no-scroll');
// 		welcomeContent.classList.toggle('welcome__content--disabled');
// 	};
// }

// export default mobileNav;
function mobileNav() {
    // Mobile nav button
    const navBtn = document.querySelector('.mobile-nav-btn');
    const nav = document.querySelector('.mobile-nav');
    const menuIcon = document.querySelector('.nav-icon');
    const welcomeContent = document.querySelector('.welcome__content');
	// close menu
    const closeMobileNav = () => {
        nav.classList.remove('mobile-nav--open');
        menuIcon.classList.remove('nav-icon--active');
        document.body.classList.remove('no-scroll');
        welcomeContent.classList.remove('welcome__content--disabled');
    };
	// open-close menu
    const toggleMobileNav = () => {
        nav.classList.toggle('mobile-nav--open');
        menuIcon.classList.toggle('nav-icon--active');
        document.body.classList.toggle('no-scroll');
        welcomeContent.classList.toggle('welcome__content--disabled');
    };
	// button click
    navBtn.onclick = toggleMobileNav;
	// document click
    document.addEventListener('click', (e) => {
        const isClickInsideNav = nav.contains(e.target);
        const isClickOnButton = navBtn.contains(e.target);
        
        // out click
        if (nav.classList.contains('mobile-nav--open') && !isClickInsideNav && !isClickOnButton) {
            closeMobileNav();
        }
    });
	// esc click
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('mobile-nav--open')) {
            closeMobileNav();
        }
    });
}

export default mobileNav;