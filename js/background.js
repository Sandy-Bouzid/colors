const formElemBackground = document.querySelector('#colors-form-background');
formElemBackground.addEventListener('submit', handleSubmitBackground);

function handleSubmitBackground(event) {
    console.log('test');
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