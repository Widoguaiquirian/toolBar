"use strict";
const btn = document.querySelector(".btn");
const bar = document.querySelector(".bar");
const content = document.querySelector(".content");
const btnDark = document.querySelector(".btn--dark");
const toolsContainer = document.querySelector(".tools");
const regularText = document.querySelectorAll(".regular-text");
const btnSpacing = document.querySelector(".btn--space");
const btnPrint = document.querySelector(".btn--print");

//Active tool bars
btn.addEventListener("click", function () {
   btn.classList.toggle("active");
   bar.classList.toggle("active");
});

//Active dark mode
btnDark.addEventListener("click", function (e) {
   e.preventDefault();
   content.classList.toggle("dark");
   document.body.classList.toggle("dark");
   toolsContainer.classList.toggle("dark");
});

//Active letter spacing
btnSpacing.addEventListener("click", function (e) {
   e.preventDefault();
   regularText.forEach(function (text) {
      text.classList.toggle("space");
   });
});
