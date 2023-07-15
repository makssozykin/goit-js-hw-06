function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const numBoxes = document.querySelector('[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

boxes.style.display = "flex";
boxes.style.flexDirection = "column";
boxes.style.gap = "30px";
boxes.style.alignItems = "center";


createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) { 
  amount = numBoxes.value;
  let size = 20;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) { 
    size += 10;
    const div = document.createElement('div');
    div.classList.add('box');
    fragment.appendChild(div);
    fragment.children[i].style.backgroundColor = getRandomHexColor();
    fragment.children[i].style.width = `${size}px`;
    fragment.children[i].style.height = `${size}px`;
  }
  boxes.appendChild(fragment);
  numBoxes.value = '';
}

function destroyBoxes() { 
  const box = document.querySelectorAll('.box');
  box.forEach(el => { el.remove() });
  }
