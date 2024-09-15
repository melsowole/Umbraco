const nav = document.querySelector("nav");
const navBarIcon = nav.querySelector(".nav-bar i");

nav.addEventListener("click", () => {
  const isNavOpen = nav.classList.toggle("open");

  navBarIcon.textContent = isNavOpen ? "close" : "menu";
});
