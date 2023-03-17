const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", onInputBlur);

function onInputBlur() {
  const inputLength = validationInput.value.length;
  console.log(inputLength);

  inputLength >= 6 ? onValidInput() : onInvalidInput();
}

function onValidInput() {
  validationInput.classList.add("valid");
  validationInput.classList.remove("invalid");
}

function onInvalidInput() {
  validationInput.classList.add("invalid");
  validationInput.classList.remove("valid");
}

// if (inputLength >= 6) {
//     validationInput.classList.add('valid');
//     validationInput.classList.remove('invalid'); //valid = green
// } else if(validationInput.value.length < 6) {
//     validationInput.classList.add('invalid');
//     validationInput.classList.remove('valid');//invalid = red
// };
