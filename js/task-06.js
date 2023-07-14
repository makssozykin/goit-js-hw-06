const input = document.getElementById('validation-input');

const inputValue = (event) => { 
    if (event.target.value.length === Number(input.dataset.length)) {
        event.target.classList.remove('invalid');
        event.target.classList.add('valid');
    }
    else { 
        event.target.classList.remove('valid');
        event.target.classList.add('invalid');
    }
    if (event.target.value.length === 0) { 
        event.target.classList.remove('valid');
        event.target.classList.remove('invalid');
    }
}

input.addEventListener("blur", inputValue);