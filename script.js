/* =====================================================
   MAHADEVI PORTFOLIO JAVASCRIPT
===================================================== */


/* ================= PRELOADER ================= */

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 500);

    }, 500);

});


/* ================= MOBILE NAVIGATION ================= */

/* ================= MOBILE NAVIGATION ================= */

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const navButton = document.querySelector(".nav-btn");


function closeMobileMenu() {

    navMenu.classList.remove("active");

    const icon = navToggle.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

    document.body.style.overflow = "";

}


function openMobileMenu() {

    navMenu.classList.add("active");

    const icon = navToggle.querySelector("i");

    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");

    document.body.style.overflow = "hidden";

}


navToggle.addEventListener("click", function () {

    if (navMenu.classList.contains("active")) {

        closeMobileMenu();

    } else {

        openMobileMenu();

    }

});


navLinks.forEach(link => {

    link.addEventListener("click", closeMobileMenu);

});


if (navButton) {

    navButton.addEventListener("click", closeMobileMenu);

}


/* Close menu when tapping outside */

document.addEventListener("click", function (event) {

    if (

        navMenu.classList.contains("active") &&

        !navMenu.contains(event.target) &&

        !navToggle.contains(event.target)

    ) {

        closeMobileMenu();

    }

});


/* Close menu with Escape key */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeMobileMenu();

    }

});


/* Reset menu when changing orientation */

window.addEventListener("resize", function () {

    if (window.innerWidth > 768) {

        closeMobileMenu();

    }

});


/* ================= HEADER SCROLL ================= */

const header = document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ================= DARK MODE ================= */

const themeToggle = document.getElementById("themeToggle");

const themeIcon = themeToggle.querySelector("i");


const savedTheme = localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeIcon.classList.remove("fa-moon");

    themeIcon.classList.add("fa-sun");

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");

    } else {

        localStorage.setItem("theme", "light");

        themeIcon.classList.remove("fa-sun");

        themeIcon.classList.add("fa-moon");

    }

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");


function updateActiveNavigation() {

    const scrollPosition = window.scrollY + 150;


    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        const sectionId = section.getAttribute("id");


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

            });


            const activeLink =
                document.querySelector(
                    `.nav-link[href="#${sectionId}"]`
                );


            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });

}


window.addEventListener("scroll", updateActiveNavigation);


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= BACK TO TOP ================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");


const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !subject || !message) {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.style.color =
            "#ef4444";

        return;

    }


    const mailSubject =
        encodeURIComponent(subject);


    const mailBody =
        encodeURIComponent(

            `Name: ${name}\n\n` +

            `Email: ${email}\n\n` +

            `Message:\n${message}`

        );


    window.location.href =
        `mailto:Mahadevi8403@gmail.com?subject=${mailSubject}&body=${mailBody}`;


    formMessage.textContent =
        "Opening your email application...";

    formMessage.style.color =
        "#14b8a6";


    contactForm.reset();

});


/* ================= CURRENT YEAR ================= */

const currentYear =
    document.getElementById("currentYear");


currentYear.textContent =
    new Date().getFullYear();


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );


        if (target) {

            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});