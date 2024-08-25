const input = document.querySelector('#name-input');
console.log(input);

const output = document.querySelector('#name-output');
console.log(output);

input.addEventListener('input', setGreeting);

function setGreeting(event) {
    const name = event.currentTarget.value;
    const trimmedName = name.trim();
    if(trimmedName === ''|| trimmedName === ' ') {
       return output.textContent = 'Anonymous';
    } else {
        return output.textContent = name;
    }
}
input.addEventListener('blur', () => {
    input.value = '';
})