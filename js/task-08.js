const form = document.querySelector('.login-form');
const Alert = "Всі поля повинні бути заповнені";

const onSubmit = (e) => { 
    e.preventDefault();
    if (form.elements.email.value === "" || form.elements.password.value === "") { 
        alert(Alert);
    }
    const userData = {
        Email: form.elements.email.value,
        Password: form.elements.password.value
    }
    console.log(userData);
    form.reset();
}

form.addEventListener("submit", onSubmit);
