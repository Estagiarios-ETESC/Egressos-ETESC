window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("darkOn")) {
        // darkModeHandling()
        console.log("true")
    } else {
        console.log("false")
    }
})

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


// Dark Mode Handling

const btnDarkToggle = document.querySelector(".nav-btn-dark-mode-toggle") 
const darkModeToggle = document.querySelector(".nav-dark-mode-toggle") 
const darkToggleImg = document.querySelector(".nav-dark-toggle-img")
const faetecLogo = document.querySelector(".faetec-logo")

btnDarkToggle.addEventListener("click", darkModeHandling)
darkModeToggle.addEventListener("click", darkModeHandling)

function darkModeHandling() {
    document.body.classList.toggle("dark-mode")
    
    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("darkOn", true)
        darkToggleImg.setAttribute("src", "img/sun.png")
        faetecLogo.setAttribute("src", "img/pngFAETEC-light.png")
        
    } else {

        localStorage.setItem("darkOn", false)
        darkToggleImg.setAttribute("src", "img/moon.png")
        faetecLogo.setAttribute("src", "img/pngFAETEC.png")
    }
}