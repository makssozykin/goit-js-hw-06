function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const spanValue = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
const colorValue = [];
const bodyColor = (e) => { 
  body.style.backgroundColor = getRandomHexColor();
  spanValue.textContent = getRandomHexColor();
}



changeColorBtn.addEventListener("click", bodyColor);