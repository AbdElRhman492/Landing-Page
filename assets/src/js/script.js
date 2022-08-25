"use strict";

/*
  Navbar Variables
*/
const menuToogleBtn = document.querySelector("[data-navbar-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

// Element Toggle Func

const elemToogleFunc = (elem) => {
  elem.classList.toggle("active");
};
menuToogleBtn.addEventListener("click", () => {
  elemToogleFunc(navbar);
});

// Go To Top
const goTopBtn = document.querySelector("[data-go-top]");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
});
