/* =========================================
   TECHZONE COMPUTERS
   JAVASCRIPT
========================================= */


/* ---------- MOBILE MENU ---------- */

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    if (navLinks) {
        navLinks.classList.toggle("show");
    }

}


/* ---------- CLOSE MOBILE MENU ---------- */

document.addEventListener("click", function (event) {

    const navLinks = document.getElementById("navLinks");
    const menuBtn = document.querySelector(".menu-btn");

    if (!navLinks || !menuBtn) {
        return;
    }

    if (
        !navLinks.contains(event.target) &&
        !menuBtn.contains(event.target)
    ) {
        navLinks.classList.remove("show");
    }

});


/* ---------- CURRENT YEAR ---------- */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* ---------- PRODUCT FILTER ---------- */

function filterProducts(category, button) {

    const products = document.querySelectorAll(".gallery-item");

    const buttons = document.querySelectorAll(".filter-btn");


    /* Remove active class from buttons */

    buttons.forEach(function (btn) {

        btn.classList.remove("active");

    });


    /* Add active class to clicked button */

    if (button) {

        button.classList.add("active");

    }


    /* Filter products */

    products.forEach(function (product) {

        const productCategory = product.getAttribute("data-category");


        if (
            category === "all" ||
            productCategory === category
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


/* ---------- CONTACT FORM ---------- */

function submitForm(event) {

    event.preventDefault();


    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");


    if (
        name === "" ||
        phone === "" ||
        subject === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all fields.";

        return;

    }


    formMessage.textContent =
        "Thank you, " + name +
        "! Your message has been received.";


    document.getElementById("contactForm").reset();

}


/* ---------- PHONE NUMBER VALIDATION ---------- */

const phoneInput = document.getElementById("phone");

if (phoneInput) {

    phoneInput.addEventListener("input", function () {

        this.value = this.value.replace(/[^0-9+ ]/g, "");

    });

}


/* ---------- SIMPLE SCROLL ANIMATION ---------- */

const animatedElements =
    document.querySelectorAll(
        ".product-card, .feature, .info-card, .gallery-item, .contact-card"
    );


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.1
    }

);


animatedElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(20px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});
