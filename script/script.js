"use strict";

const callModalBtn = document.querySelectorAll(".btn-order"),
  modal = document.querySelector(".modal"),
  closemod = document.querySelector(".modal__close");

function showModal() {
  modal.classList.add("show");
  modal.classList.remove("close");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.add("close");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}
callModalBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    showModal();
  });
});
closemod.addEventListener("click", (event) => {
  closeModal();
});
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// burger
const burger = document.querySelector(".burger"),
  nav = document.querySelector(".navbar");
function showBurger() {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
}
showBurger();
