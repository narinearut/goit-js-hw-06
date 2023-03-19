const validationInput = document.querySelector("#validation-input");


validationInput.addEventListener("blur", onInputBlur);

function onInputBlur() {
  const inputLength = validationInput.value.length;

if (inputLength >= validationInput.dataset.length) {
  onValidInput(); 
} else {
  onInvalidInput();
};


  // inputLength >= lengthValid ? onValidInput() : onInvalidInput(); функции не поддерживают тернарник
}

function onValidInput() {
  validationInput.classList.remove("invalid");
  validationInput.classList.add("valid");//green
  
}

function onInvalidInput() {
  validationInput.classList.remove("valid");
  validationInput.classList.add("invalid");//red
}