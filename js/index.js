const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
const port_cont = document.querySelectorAll(".portfolio__item-content");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

port_cont.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.children[1].classList.add("active");
  });

  item.addEventListener("mouseleave", () => {
    item.children[1].classList.remove("active");
  });
});