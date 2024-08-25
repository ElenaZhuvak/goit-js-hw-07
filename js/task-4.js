const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const trimmedEmail = email.trim();
    const password = form.elements.password.value;
    const trimmedPassword = password.trim();

    if(trimmedEmail === '' || trimmedPassword === '') {
        return alert('All form fields must be filled in');
    }

    console.log(`Email: ${trimmedEmail}, Password: ${trimmedPassword}`);
    form.reset();
}