const input = document.getElementById('name-input');
const span = document.getElementById('name-output');

const putInSpan = (event) => { 
    if (event.currentTarget.value === "") {
        return span.textContent = "Anonymous";
    }
    else { 
        return span.textContent = event.currentTarget.value;
    }
}


input.addEventListener("input", putInSpan);