const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');
const span = document.querySelector('#value');
let counterValue = 0;

const upClick = (event) => { 
    counterValue = counterValue + 1;
    span.innerHTML = counterValue;
}

const downClick = (event) => { 
    counterValue = counterValue - 1;
    span.innerHTML = counterValue;
}

decrBtn.addEventListener("click", downClick);
incrBtn.addEventListener("click", upClick);