const cursosTabs = document.querySelectorAll(".cursos-tabs");
const cursosContent = document.querySelectorAll(".cursos-content");
const cursosSelectTag = document.querySelector("#cursos-select-tag");
const cursoImgs = document.querySelectorAll(".cursos-img");

window.addEventListener("DOMContentLoaded", () => {
  if (document.body.classList.contains("dark-mode")) {
    cursoImgs.forEach((cursoImg) => {
      cursoImg.setAttribute(
        "src",
        "img/home-page-cursos/" + cursoImg.id + ".png"
      );
    });
  } else {
    cursoImgs.forEach((cursoImg) => {
      cursoImg.setAttribute(
        "src",
        "img/home-page-cursos/" + cursoImg.id + "-old.png"
      );
    });
  }
});

function selectItem(e) {
  removeShow();
  removeBorder();
  removeArrow();

  console.log(this.id);

  // Adicionando borda para telas pequenas
  this.classList.add("cursos-container-border");

  // Mostrar a seta
  const arrowTab = document.querySelector(`#${this.id}-arrow`);

  arrowTab.classList.add("show");

  // Mostrar conteudo (Egressos)
  const cursosContentItem = document.querySelector(`#${this.id}-content`);

  cursosContentItem.classList.add("show");
}

function removeShow() {
  cursosContent.forEach((item) => item.classList.remove("show"));
}
function removeBorder() {
  cursosTabs.forEach((item) =>
    item.classList.remove("cursos-container-border")
  );
}
function removeArrow() {
  const arrowTabsAll = document.querySelectorAll(`.arrow-div`);
  arrowTabsAll.forEach((item) => item.classList.remove("show"));
}

// Fazendo os divs ficarem focaveis as apertar tab
const btnCursos = document.querySelectorAll(".btn-cursos");
cursosTabs.forEach((item) => item.setAttribute("tabindex", "0"));
btnCursos.forEach((item) => item.setAttribute("tabindex", "-1"));

// Evento de click e focus nos dives de navegação de cursos
cursosTabs.forEach((item) => item.addEventListener("click", selectItem));
cursosTabs.forEach((item) => item.addEventListener("focus", selectItem));
cursosSelectTag.addEventListener("input", () => {
  removeShow();

  console.log(cursosSelectTag.value);

  // Mostrar conteudo (Egressos)
  const cursosContentItem = document.querySelector(
    `#${cursosSelectTag.value}-content`
  );

  cursosContentItem.classList.add("show");
});

// POPUP Handling
let readMoreBtnAll;

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
waitForElm(".btn-readmore").then((elm) => {
  readMoreBtnAll = document.querySelectorAll(".btn-readmore");
});

const closePopupBtn = document.querySelector("#popup-btn");
console.log(readMoreBtnAll);

const popupScreen = document.querySelector(".readmore-popup");
const popupText = document.querySelector(".popup-text");

readMoreBtnAll.forEach((readMoreBtn) => {
  readMoreBtn.addEventListener("click", (e) => {
    const current = e.target;
    document.querySelector("body").classList.toggle("noscroll");

    popupScreen.classList.toggle("popup-active");
    popupText.innerHTML = current.parentNode.innerHTML;
    popupText.removeChild(popupText.lastElementChild);
    console.log(popupText);
  });
});

closePopupBtn.addEventListener("click", (e) => {
  document.querySelector("body").classList.toggle("noscroll");
  popupScreen.classList.toggle("popup-active");
});

// Curso IMG change in dark mode

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkOn")) {
    // imgChange()
    console.log("true");
  } else {
    console.log("false");
  }
});

btnDarkToggle.addEventListener("click", imgChange);

darkModeToggle.addEventListener("click", imgChange);

function imgChange() {
  if (document.body.classList.contains("dark-mode")) {
    cursoImgs.forEach((cursoImg) => {
      cursoImg.setAttribute(
        "src",
        "img/home-page-cursos/" + cursoImg.id + ".png"
      );
    });
  } else {
    cursoImgs.forEach((cursoImg) => {
      cursoImg.setAttribute(
        "src",
        "img/home-page-cursos/" + cursoImg.id + "-old.png"
      );
    });
  }
}
