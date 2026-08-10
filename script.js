/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight = window.innerHeight;

    const revealPoint = 100;


    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;


        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();

/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.querySelector(".menu-button");

const mobileMenu =
    document.querySelector(".mobile-menu");

const mobileLinks =
    document.querySelectorAll(".mobile-nav a");


menuButton.addEventListener("click", () => {

    menuButton.classList.toggle("active");

    mobileMenu.classList.toggle("active");


    const isExpanded =
        menuButton.classList.contains("active");


    menuButton.setAttribute(
        "aria-expanded",
        isExpanded
    );

});


/* Close menu after clicking a link */

mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        menuButton.classList.remove("active");

        mobileMenu.classList.remove("active");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});

/* =========================
   PROJECT SLIDESHOW
========================= */

const projectImages = document.querySelectorAll(".project-image");

projectImages.forEach((projectImage) => {
    const slides = projectImage.querySelectorAll(".project-screenshot");

    const previousButton =
        projectImage.querySelector(".slide-prev");

    const nextButton =
        projectImage.querySelector(".slide-next");

    const currentSlideElement =
        projectImage.querySelector(".current-slide");

    const totalSlidesElement =
        projectImage.querySelector(".total-slides");

    let currentSlide = 0;


    // Set total number of slides

    totalSlidesElement.textContent =
        String(slides.length).padStart(2, "0");


    function showSlide(index) {

        slides.forEach((slide) => {
            slide.classList.remove("active");
        });


        slides[index].classList.add("active");


        currentSlideElement.textContent =
            String(index + 1).padStart(2, "0");
    }


    // NEXT

    nextButton.addEventListener("click", () => {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    });


    // PREVIOUS

    previousButton.addEventListener("click", () => {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);

    });

});