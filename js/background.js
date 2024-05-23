const formElemBackground = document.querySelector('#colors-form-background');
formElemBackground.addEventListener('submit', handleSubmitBackground);

const buttonRandom = document.querySelector('.random');
buttonRandom.addEventListener('click', handleClickRandomColor);

function handleSubmitBackground(event) {
    event.preventDefault();
    let formInput = document.querySelector('#colors-input').value;

    const errorList = document.querySelector('#colors-error');
    errorList.textContent = '';

    if (formInput.charAt(0) === "#" && formInput.length == (4) || formInput.length == (7)) {
        const bodyElem = document.body;
        bodyElem.style.backgroundColor = formInput;
    } else {
        let errorElem = document.createElement('p');
        errorElem.textContent = 'This is not an hexadecimal color !';
        errorList.appendChild(errorElem);
    }

    formInput.focus();
}

function handleClickRandomColor() {
    const formInput = document.querySelector('#colors-input');
    const bodyElem = document.body;
    const color = generateRandomColor();
    bodyElem.style.backgroundColor = color;
    formInput.value = color;
}

function generateRandomColor() {
    // Math.random() : generate a random 24-bit (6 * 4bits) hexadecimal number
    // toString() : convert it to an hexadecimal string with a base of 16.
    // slice() : extract the first 6 characters
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}