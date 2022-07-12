// HEADER Navgation

const navBtnToggle = document.querySelector(".nav-btn-toggle")
const navBtnCLose = document.querySelector(".nav-btn-close")

const navBar = document.querySelector(".header-nav")


navBtnToggle.addEventListener("click", () => {
    navBar.classList.toggle("header-nav-active")
})
navBtnCLose.addEventListener("click", () => {
    navBar.classList.toggle("header-nav-active")
})