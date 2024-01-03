"use strict";

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
function toggleSearch() {
  var searchContainer = document.getElementById("search-container");
  searchContainer.style.display =
    searchContainer.style.display === "none" ||
    searchContainer.style.display === ""
      ? "block"
      : "none";
}

function performSearch() {
  var searchTerm = document.getElementById("search-input").value;
  // Add your search functionality here
  console.log("Performing search for: " + searchTerm);
}

const orderButtons = document.querySelectorAll(".btn.btn-primary");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

function showPaymentModal(event) {
  // Get the position of the clicked button
  const buttonRect = event.target.getBoundingClientRect();

  // Set the position of the payment modal
  payment.style.left = buttonRect.left + "px";
  payment.style.top = buttonRect.bottom + "px";

  // Display the payment modal
  payment.style.display = "flex";
}

orderButtons.forEach((button) => {
  button.addEventListener("click", showPaymentModal);
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
document.querySelector(".product-list").addEventListener("click", (event) => {
  const target = event.target;

  // Check if the clicked element is an "Order Now" button
  if (target.classList.contains("btn-primary")) {
    // Get the position of the clicked button
    const buttonRect = target.getBoundingClientRect();

    // Set the position of the payment modal
    payment.style.left = buttonRect.left + window.scrollX + "px";
    payment.style.top = buttonRect.bottom + window.scrollY + "px";

    // Display the payment modal
    payment.style.display = "flex";
  }
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
