/*==================================================
  HIT N RUN BOX CRICKET
  SIMPLE GALLERY LIGHTBOX
==================================================*/

"use strict";

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.querySelector(".lightbox-close");

// Aapke bataye gaye naye DOM elements aur variables
const nextBtn = document.querySelector(".lightbox-next");
const prevBtn = document.querySelector(".lightbox-prev");
let currentIndex = 0;

if(
    galleryImages.length &&
    lightbox &&
    lightboxImage &&
    closeBtn &&
    nextBtn && // Null pointer check safety ke liye
    prevBtn
){

    // Replaced Image Click handler (Index tracking ke saath)
    galleryImages.forEach((img, index)=>{
        img.addEventListener("click",()=>{
            currentIndex = index;
            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt;
            lightbox.classList.add("active");
            document.body.classList.add("lightbox-open");
        });
    });

    // Next Button Functionality
    nextBtn.addEventListener("click",()=>{
        currentIndex++;
        if(currentIndex >= galleryImages.length){
            currentIndex = 0;
        }
        lightboxImage.src = galleryImages[currentIndex].src;
        lightboxImage.alt = galleryImages[currentIndex].alt; // alt attribute ko bhi sync rakha hai
    });

    // Previous Button Functionality
    prevBtn.addEventListener("click",()=>{
        currentIndex--;
        if(currentIndex < 0){
            currentIndex = galleryImages.length - 1;
        }
        lightboxImage.src = galleryImages[currentIndex].src;
        lightboxImage.alt = galleryImages[currentIndex].alt; // alt attribute ko bhi sync rakha hai
    });

    // Close Button
    closeBtn.addEventListener("click",()=>{
        lightbox.classList.remove("active");
        document.body.classList.remove("lightbox-open");
    });

    // Click Outside Close
    lightbox.addEventListener("click",(e)=>{
        if(e.target === lightbox){
            lightbox.classList.remove("active");
            document.body.classList.remove("lightbox-open");
        }
    });

    // ESC Close
    document.addEventListener("keydown",(e)=>{
        if(e.key === "Escape"){
            lightbox.classList.remove("active");
            document.body.classList.remove("lightbox-open");
        }
    });

}
