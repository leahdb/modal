"use strict";

let show = document.querySelectorAll(".show-modal");
let close = document.querySelector(".close-modal");
let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");

let openModal = function () {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
};

let closeModal = function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

for (let i = 0; i < show.length; i++)
  show[i].addEventListener("click", openModal);

close.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
