// BurgerMenu for Mobile Device -->

const headerMenu = document.querySelector(".navigation");
const footerMenu = document.querySelector(".footer_content");

const navToggle = document.getElementById("burgerMenu");
const overlay = document.querySelector(".overlay");

overlay.style.display = "none";

// Open BurgerMenu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    headerMenu.classList.add("show-menu");
    footerMenu.classList.add("show-menu");
    overlay.style.display = "block";
  });
}

// click overlay (for all)
overlay.addEventListener("click", () => {
  headerMenu.classList.remove("show-menu");
  footerMenu.classList.remove("show-menu");
  overlay.style.display = "none";
  popUp.style.top = "-100%";
});

// close BurgerMenu
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    headerMenu.classList.remove("show-menu");
    footerMenu.classList.remove("show-menu");
    overlay.style.display = "none";
  });
});

// active Menu link

const currentLocation = window.location.href;

navLinks.forEach((link) => {
  if (link.href !== currentLocation) {
    link.classList.remove("active");
  } else {
    link.classList.add("active");
  }
});

// PopUp box -->

const popUp = document.querySelector(".popUp");
const popUpImg = document.querySelector(".popUp_img");
const closePopUp = document.querySelector(".close_popUp");
const userButtons = document.querySelectorAll(".user-link");

// click user icon
userButtons.forEach((user) => {
  user.addEventListener("click", (e) => {
    e.preventDefault();

    const userImg = user.querySelector("img");
    popUpImg.src = userImg.src;

    popUp.style.top = "50%";
    overlay.style.display = "block";
  });
});

closePopUp.addEventListener("click", () => {
  popUp.style.top = "-100%";
  overlay.style.display = "none";
});

// Email Forms

const emailForm = document.getElementById("email-form");

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = emailForm.querySelector(`input[name="email"]`);
  const label = emailForm.querySelector(".label");

  if (
    input.value === "" ||
    !input.value.includes("@") ||
    !input.value.includes(".com")
  ) {
    input.style.border = "1px solid var(--night-orange-color)";
    label.style.color = "var(--night-orange-color)";
    label.innerHTML = "This is not an E-mail!";
  } else {
    input.style.border = "1px solid #cbd0d34d";
    label.style.color = "";
    input.value = "";
    label.innerHTML = "Thank you!";
  }
});

// For button text change

const buttonTxt = document.querySelector(".search_btn");

if (buttonTxt) {
  window.addEventListener("resize", () => {
    if (window.innerWidth > 767 && window.innerWidth <= 1023) {
      buttonTxt.textContent = "SEARCH AN EVENT";
    } else {
      buttonTxt.textContent = "SEARCH";
    }
  });
}
