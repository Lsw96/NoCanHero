// main.visual > slide-wrap animation
//========================================
const slideImg = document.querySelector(".slide-img");
const clone = slideImg.cloneNode(true);

// add clone
document.querySelector(".slide-wrap").appendChild(clone);

// original, clone position setting
document.querySelector(".slide-img").offsetWidth + "px";

// assignment class
slideImg.classList.add("original");
clone.classList.add("clone");
//========================================
