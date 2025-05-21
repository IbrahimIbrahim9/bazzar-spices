/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLinks.forEach(link => link.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const header = document.getElementById('header');
    // Add class when scrolled beyond 50px, remove otherwise
    window.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
};

window.addEventListener('scroll', bgHeader);
// Initialize on page load
bgHeader();

/*=============== SWIPER SERVICES ===============*/
const swiperServices = new Swiper('.services__swiper', {
    loop: false,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: 1.5,
    navigation: {
        nextEl: '.services__container .swiper-button-next',
        prevEl: '.services__container .swiper-button-prev',
    },
});



/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
/*
-When the page loads, the user might already be scrolled down. Without calling scrollUp() immediately, the button won't appear until the user starts scrolling.
-Ensures the button's visibility matches the scroll position right from page load, rather than waiting for the first scroll event.
-If you refresh the page while scrolled down, the "scroll to top" button will appear immediately instead of disappearing until you move the scroll position.
*/
scrollUp();
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 58;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active-link');
        } else {
            navLink.classList.remove('active-link');
        }
    });
};
// Run once on page load
scrollActive();

// Run on scroll
window.addEventListener('scroll', scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2500,
    delay: 100,
    // reset: true, // Animations repeat
});

sr.reveal('.home__content, .services__data, .services__swiper, .footer__container');
sr.reveal('.home__images', { origin: 'bottom', delay: 500 });
sr.reveal('.about__images, .contact__img', { origin: 'left' });
sr.reveal('.about__data, .contact__data, .contact__card', { origin: 'right' });
sr.reveal('.products__card', { interval: 100 });



// pop up 


document.addEventListener('DOMContentLoaded', function () {
    const showDetailsButtons = document.querySelectorAll('.products__show-details');
    const detailsPopup = document.getElementById('projectDetailsPopup');
    const closeBtn = document.querySelector('.close-btn');

    const productsData = {
        "Gha 310_3": {
            photos: [
                // Empty array means no detail images
            ],
            description: "Pile Material: 100% Natural Wool & Viscose - Binding process by hand - Shaving process by hand - Washing process by hand - Pile Height (mm): 11"
        },
        "Gha 310_7": {
            photos: [
                "assets/img/s2d1.jpg",
                "assets/img/s2d2.jpg",
                "assets/img/s2d3.jpg"
            ],
            description: "Pile Material: 100% Natural Wool & Viscose - Binding process by hand - Shaving process by hand - Washing process by hand - Pile Height (mm): 11"
        },
        "Gha 321_3": {
            photos: [
                "assets/img/s3d1.jpg",
                // Only one detail image provided
            ],
            description: "Pile Material: 100% Natural Wool & Viscose - Binding process by hand - Shaving process by hand - Washing process by hand - Pile Height (mm): 11"
        },
        "Gha 321_7": {
            photos: [
            ],
            description: "Pile Material: 100% Natural Wool & Viscose - Binding process by hand - Shaving process by hand - Washing process by hand - Pile Height (mm): 11"
        },
        "Gha 321_6": {
            photos: [

            ],
            description: "Pile Material: 100% Natural Wool & Viscose - Binding process by hand - Shaving process by hand - Washing process by hand - Pile Height (mm): 11"
        },
        "Gha 302_6": {
            photos: [
                "assets/img/s6d1.jpg",
                "assets/img/s6d2.jpg",
                "assets/img/s6d3.jpg",
            ],
            description: "Pile Material: 100% Natural Wool & Viscose - Binding process by hand - Shaving process by hand - Washing process by hand - Pile Height (mm): 11"
        },
        "Gha 302_8": {
            photos: [

            ],
            description: "Pile Material: 100% Natural Wool & Viscose - Binding process by hand - Shaving process by hand - Washing process by hand - Pile Height (mm): 11"
        },
        "Gha 303_3": {
            photos: [

            ],
            description: "Pile Material: 100% Natural Wool & Viscose - Binding process by hand - Shaving process by hand - Washing process by hand - Pile Height (mm): 11"
        },
        "Gha 303_4": {
            photos: [

            ],
            description: "Pile Material: 100% Natural Wool & Viscose - Binding process by hand - Shaving process by hand - Washing process by hand - Pile Height (mm): 11"
        },
        "salt": {
            photos: [

            ],
            description: " A tradition that originated over 2,000 years ago in the ancient salt mines of Persia is still harvested today in Iran, producing one of the most remarkable culinary treasures—rare blue salt. Known for its striking color and intense flavor, this salt is carefully hand-harvested from mineral-rich mountain mines using time-honored methods passed down through generations. These traditional techniques preserve the salt’s natural purity and mineral content, resulting in a product that not only enhances the flavor of dishes but also carries a deep connection to the history and culture of the region. Made from 100% stone salt and sourced exclusively from Iran, it’s a testament to artisanal craftsmanship. Store dry; filling level may vary due to technical reasons."
        }

    };

    showDetailsButtons.forEach(button => {
        button.addEventListener('click', function () {
            const projectCard = this.closest('.products__card');
            const projectImg = projectCard.querySelector('img');
            const projectName = projectImg.alt;

            const project = productsData[projectName] || {
                photos: [projectImg.src, projectImg.src, projectImg.src],
                description: `Detailed information about our ${projectName} project.`
            };

            document.getElementById('popupProjectName').textContent = projectName;
            const galleryPhotos = detailsPopup.querySelectorAll('.gallery-photo');

            // First hide all gallery photos
            galleryPhotos.forEach(img => {
                img.style.display = 'none';
            });

            // Then show only those with valid src
            project.photos.forEach((photo, index) => {
                if (galleryPhotos[index] && photo) { // Check if photo path exists
                    galleryPhotos[index].src = photo;
                    galleryPhotos[index].alt = `${projectName} - Photo ${index + 1}`;
                    galleryPhotos[index].style.display = 'block';
                }
            });

            detailsPopup.querySelector('.project-description p').textContent = project.description;
            detailsPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', function () {
        detailsPopup.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    detailsPopup.addEventListener('click', function (e) {
        if (e.target === detailsPopup) {
            detailsPopup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});