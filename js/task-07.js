const inputRange = document.getElementById("font-size-control");
const text = document.getElementById("text");

const changeRange = (event) => { 
    text.style.fontSize = event.target.value + 'px';
}

inputRange.addEventListener("input", changeRange)