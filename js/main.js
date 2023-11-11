// hamburger menu button
const butnHamburger = document.querySelector("#btn-hamburger");
const navMenu = document.querySelector("#nav-list");


// toggle nav menu
butnHamburger.addEventListener("click", () => {
  const toggleClass = "is-open"
  butnHamburger.classList.toggle(toggleClass)
  navMenu.classList.toggle(toggleClass)
})