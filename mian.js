const hamberger = document.querySelector(".header__main-nav__hamberger");
const hamberger_divs = document.querySelectorAll(
  ".header__main-nav__hamberger div"
);
const links_container = document.querySelectorAll(
  ".header__main-nav__links li"
);
const container = document.querySelector(".header__main-nav");
console.log(links_container);
hamberger.addEventListener("click", () => {
  container.classList.toggle("active");
  hamberger_divs.forEach((div) => {
    div.classList.toggle("full");
  });
  links_container.forEach((link) => {
    link.classList.toggle("fade");
  });
  hamberger.classList.toggle("toggle");
});
