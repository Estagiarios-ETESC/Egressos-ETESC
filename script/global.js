window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("darkOn")) {
        // darkModeHandling()
        document.body.classList.toggle("dark-mode")
    }



    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("darkOn", "dark-mode")
        darkToggleImg.setAttribute("src", "img/sun.png")
        faetecLogo.setAttribute("src", "img/pngFAETEC-light.png")
        
    } else {

        localStorage.removeItem("darkOn")
        darkToggleImg.setAttribute("src", "img/moon.png")
        faetecLogo.setAttribute("src", "img/pngFAETEC.png")
    }
})

// HEADER Navgation

const navBtnToggle = document.querySelector(".nav-btn-toggle")

const navBar = document.querySelector(".header-nav")
const navActiveBg = document.querySelector(".nav-active-bg")


navBtnToggle.addEventListener("click", () => {
    navBar.classList.toggle("header-nav-active")

    navActiveBg.classList.toggle("nav-active-bg-active")

    document.body.classList.toggle("noscroll")
})

navActiveBg.addEventListener("click", () => {
    navBar.classList.toggle("header-nav-active")

    navActiveBg.classList.toggle("nav-active-bg-active")

    document.body.classList.toggle("noscroll")
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

    try {
        divCurved.classList.toggle("div-curved-dark")
    } catch (error) {
        console.log(".")
    } 
    
    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("darkOn", "dark-mode")
        darkToggleImg.setAttribute("src", "img/sun.png")
        faetecLogo.setAttribute("src", "img/pngFAETEC-light.png")
        
    } else {

        localStorage.removeItem("darkOn")
        darkToggleImg.setAttribute("src", "img/moon.png")
        faetecLogo.setAttribute("src", "img/pngFAETEC.png")
    }
}
