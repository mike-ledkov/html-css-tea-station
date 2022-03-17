// setup nav
const sideBtn = document.querySelector(".side-btn")
const navbar = document.querySelector(".navbar")
const navClose = document.querySelector(".nav-close")

//setup date
const date = document.getElementById("date").innerHTML = new Date().getFullYear()

// show nav
sideBtn.addEventListener("click", (e) => {
  navbar.classList.add("showNav")
  setTimeout(() => {
    document.addEventListener("click", closeNav);
  }, 500, e)
});

// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav")
});

function closeNav(e) {
  if (!e.target.classList.contains("navbar")) {
    navbar.classList.remove("showNav")
    document.removeEventListener("click", closeNav)
  }
}