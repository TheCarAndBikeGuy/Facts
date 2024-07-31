//Scroll Element Header
window.addEventListener("scroll", function () {
  const nav = this.document.querySelector("nav");
  nav.classList.toggle("Sticky", window.scrollY > 0);
});

const hamburger = document.querySelector("hamburger");
const offScreenMenu = document.querySelector("off-screen-menu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})
