/*==================================================
  HIT N RUN BOX CRICKET
  MAIN.JS
  VERSION 3.0
  PART 1
==================================================*/

"use strict";

/*==================================================
  DOM ELEMENTS
==================================================*/

const body = document.body;

const header = document.querySelector(".header");

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-links");

const navLinks = document.querySelectorAll(".nav-links a");

const sections = document.querySelectorAll("section[id]");

/*==================================================
  MOBILE MENU
==================================================*/

function openMenu() {

    navMenu.classList.add("active");

    body.classList.add("menu-open");

    menuBtn.setAttribute("aria-expanded", "true");

    menuBtn.innerHTML = "✕";

}

function closeMenu() {

    navMenu.classList.remove("active");

    body.classList.remove("menu-open");

    menuBtn.setAttribute("aria-expanded", "false");

    menuBtn.innerHTML = "☰";

}

function toggleMenu() {

    if (navMenu.classList.contains("active")) {

        closeMenu();

    } else {

        openMenu();

    }

}

if (menuBtn) {

    menuBtn.addEventListener("click", toggleMenu);

}

/*==================================================
  CLOSE MENU WHEN LINK CLICKED
==================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        closeMenu();

    });

});

/*==================================================
  ESC KEY
==================================================*/

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeMenu();

    }

});

/*==================================================
  STICKY HEADER
==================================================*/

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

/*==================================================
  ACTIVE NAVIGATION
==================================================*/

function updateActiveMenu() {

    let currentSection = "";

    sections.forEach(section => {

        const top = window.scrollY;

        const offset = section.offsetTop - 150;

        const height = section.offsetHeight;

        if (top >= offset && top < offset + height) {

            currentSection = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}

/*==================================================
  SMOOTH SCROLL
==================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});

/*==================================================
  WINDOW EVENTS
==================================================*/

window.addEventListener("scroll", () => {

    updateHeader();

    updateActiveMenu();

}, {

    passive: true

});
/*==================================================
  REVEAL ANIMATION
==================================================*/

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const triggerPoint = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < triggerPoint) {

            element.classList.add("active");

        }

    });

}

/*==================================================
  COUNTER ANIMATION
==================================================*/

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const statsSection = document.querySelector(".stats");

    if (!statsSection) return;

    const top = statsSection.getBoundingClientRect().top;

    if (top > window.innerHeight * 0.8) return;

    counterStarted = true;

    counters.forEach(counter => {

        const target = parseFloat(counter.dataset.target);

        const decimal = counter.dataset.target.includes(".");

        let current = 0;

        const speed = target / 120;

        function update() {

            current += speed;

            if (current >= target) {

                counter.textContent = decimal
                    ? target.toFixed(1)
                    : Math.round(target).toLocaleString();

                return;

            }

            counter.textContent = decimal
                ? current.toFixed(1)
                : Math.round(current).toLocaleString();

            requestAnimationFrame(update);

        }

        update();

    });

}

/*==================================================
  INITIALIZE
==================================================*/

function initWebsite() {

    updateHeader();

    updateActiveMenu();

    revealOnScroll();

    startCounters();

}

window.addEventListener("load", initWebsite);

window.addEventListener("scroll", () => {

    revealOnScroll();

    startCounters();

}, {

    passive: true

});

/*==================================================
  END OF MAIN.JS
==================================================*/
/*==================================================
  BOOKING FORM → WHATSAPP
==================================================*/

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const date = document.getElementById("date").value;
        const slot = document.getElementById("slot").value;
        const players = document.getElementById("players").value;
        const message = document.getElementById("message").value.trim();

        if (
            !name ||
            !phone ||
            !date ||
            !slot ||
            !players
        ) {

            alert("Please fill all required fields.");

            return;

        }

        const whatsappNumber = "9183205 47265";

        const text =
`🏏 *New Booking Inquiry*

👤 Name: ${name}

📱 Mobile: ${phone}

📅 Date: ${date}

🕒 Slot: ${slot}

👥 Players: ${players}

📝 Message:
${message || "No additional message"}

Please confirm slot availability.`;

        const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");

    });

}
/*==================================================
  CONTACT FORM → WHATSAPP
==================================================*/

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit",function(e){

        e.preventDefault();

        const name =
        contactForm.querySelector('input[type="text"]').value.trim();

        const phone =
        contactForm.querySelector('input[type="tel"]').value.trim();

        const message =
        contactForm.querySelector("textarea").value.trim();

        if(!name || !phone || !message){

            alert("Please fill all fields.");

            return;

        }

        const whatsappNumber = "919999999999";

        const text =

`🏏 *New Contact Inquiry*

👤 Name: ${name}

📱 Mobile: ${phone}

💬 Message:
${message}

Please contact me regarding Hit N Run Box Cricket.`;

        const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

        window.open(url,"_blank");

        contactForm.reset();

    });

}