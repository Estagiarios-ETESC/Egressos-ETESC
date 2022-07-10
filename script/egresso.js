const cursosTabs = document.querySelectorAll(".cursos-tabs");
const cursosContent = document.querySelectorAll(".cursos-content");

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

// Fazendo os divs ficarem facaveis as apertar tab
const btnCursos = document.querySelectorAll(".btn-cursos");
cursosTabs.forEach((item) => item.setAttribute("tabindex", "0"));
btnCursos.forEach((item) => item.setAttribute("tabindex", "-1"));

// Evento de click e focus nos dives de navegação de cursos
cursosTabs.forEach((item) => item.addEventListener("click", selectItem));
cursosTabs.forEach((item) => item.addEventListener("focus", selectItem));

// POPUP Handling

const readMoreBtnAll = document.querySelectorAll(".btn-readmore");
const closePopupBtn = document.querySelector("#popup-btn");

const popupScreen = document.querySelector(".readmore-popup");
const popupText = document.querySelector(".popup-text");

readMoreBtnAll.forEach((readMoreBtn) => {
  readMoreBtn.addEventListener("click", (e) => {
    const current = e.target;
    document.querySelector("body").classList.toggle("noscroll");

    popupText.innerHTML = current.parentNode.innerHTML;
    popupScreen.classList.toggle("popup-active");
  });
});

closePopupBtn.addEventListener("click", (e) => {
  document.querySelector("body").classList.toggle("noscroll");
  popupScreen.classList.toggle("popup-active");
});
