const formElemDuck = document.querySelector('#colors-form-duck');
formElemDuck.addEventListener('submit', handleSubmitDuck);

const buttonRandom = document.querySelector('.random-duck');
buttonRandom.addEventListener('click', handleClickRandomColorDuck);

function handleSubmitDuck(event) {
    event.preventDefault();
    let formInput = document.querySelector('#colors-input-duck').value;

    const errorList = document.querySelector('#colors-error');
    errorList.textContent = '';

    if (formInput.charAt(0) === "#" && formInput.length == (4) || formInput.length == (7)) {
        const duckBody = document.querySelector(".duck-image").getSVGDocument().getElementById("path4545");
        const duckWing1 = document.querySelector(".duck-image").getSVGDocument().getElementById("path7336");
        const duckWing2 = document.querySelector(".duck-image").getSVGDocument().getElementById("path7330");
        duckBody.style.fill = formInput;
        duckWing1.style.fill = formInput;
        duckWing2.style.fill = formInput;

    } else {
        let errorElem = document.createElement('p');
        errorElem.textContent = 'This is not an hexadecimal color !';
        errorList.appendChild(errorElem);
    }

    formInput.focus();
}

function handleClickRandomColorDuck() {
    const formInput = document.querySelector('#colors-input-duck');
    const color = generateRandomColor();
    formInput.value = color;
    const duckBody = document.querySelector(".duck-image").getSVGDocument().getElementById("path4545");
    const duckWing1 = document.querySelector(".duck-image").getSVGDocument().getElementById("path7336");
    const duckWing2 = document.querySelector(".duck-image").getSVGDocument().getElementById("path7330");
    duckBody.style.fill = color;
    duckWing1.style.fill = color;
    duckWing2.style.fill = color;
    
    formInput.focus();
}

function generateRandomColor() {
    // Math.random() : generate a random 24-bit (6 * 4bits) hexadecimal number
    // toString() : convert it to an hexadecimal string with a base of 16.
    // slice() : extract the first 6 characters
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}