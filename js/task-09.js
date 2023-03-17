const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  colorName: document.querySelector(".color"),
};

refs.changeColorBtn.addEventListener("click", function () {
  refs.color = getRandomHexColor(); //колір випадковий
  document.body.style.backgroundColor = refs.color; //додаємо стиль-backgroundColor на боді = колір випадковий
  refs.colorName.textContent = refs.color; //текст спану = колір випадковий
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
