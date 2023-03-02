// Show And Hidden Header
let buttonShow = document.querySelector("i.show-head");
let header = document.querySelector(".header");

buttonShow.addEventListener("click", () => {
  header.classList.toggle("show");

  if (header.classList.contains("show")) {
    buttonShow.classList = "fa-solid fa-x show-head";
  } else {
    buttonShow.classList = "uil uil-apps show-head";
  }
});

// Active Page
let mainLinks = document.querySelectorAll(".main-links a");
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  sections.forEach(function (s) {
    if (window.scrollY >= s.offsetTop - 350) {
      mainLinks.forEach((ele) => {
        ele.classList.remove("active");
        `#${s.id}` == ele.getAttribute("href")
          ? ele.classList.add("active")
          : "";
      });
    }
  });
});
