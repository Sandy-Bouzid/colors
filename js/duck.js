const formElemDuck = document.querySelector('#colors-form-duck');
formElemDuck.addEventListener('submit', handleSubmitDuck);

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