/*!
 * Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project
console.log("JavaScript is running!");
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("highlight");
  });
  card.addEventListener("mouseleave", () => {
    card.classList.remove("highlight");
  });
});

const cartButton = document.querySelector(".btn-outline-dark");
let cartCount = 0;

document.querySelectorAll(".btn-outline-dark").forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    const cartBadge = cartButton.querySelector(".badge");
    cartBadge.textContent = cartCount;

    cartBadge.classList.add("animate");
    setTimeout(() => cartBadge.classList.remove("animate"), 500); // Animation effect
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const rememberMeCheckbox = document.getElementById("rememberMe");

  if (localStorage.getItem("rememberEmail") === "true") {
    emailInput.value = localStorage.getItem("savedEmail") || "";
    rememberMeCheckbox.checked = true;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!emailInput.value || !passwordInput.value) {
      alert("Please fill in both email and password fields.");
      return;
    }

    if (rememberMeCheckbox.checked) {
      localStorage.setItem("rememberEmail", "true");
      localStorage.setItem("savedEmail", emailInput.value);
    } else {
      localStorage.removeItem("rememberEmail");
      localStorage.removeItem("savedEmail");
    }

    alert("Login successful! (This is a simulation)");

    form.reset();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");
  const fullNameInput = document.getElementById("fullname");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent actual form submission

    // Check for empty fields
    if (
      !fullNameInput.value.trim() ||
      !emailInput.value.trim() ||
      !passwordInput.value ||
      !confirmPasswordInput.value
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    // Check if passwords match
    if (passwordInput.value !== confirmPasswordInput.value) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    // Simulate a sign-up process
    alert("Sign-up successful! (This is a simulation)");

    // Clear form fields
    form.reset();
  });
});
