//Scroll Element Header
window.addEventListener("scroll", function () {
  const nav = this.document.querySelector("nav");
  nav.classList.toggle("Sticky", window.scrollY > 0);
});