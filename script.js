const menuButton = document.querySelector("header nav button");

const menuButtonImg = menuButton.querySelector("img");

const menu = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});
