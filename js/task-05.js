const refs = {
  input: document.querySelector("input#name-input"),
  name: document.querySelector("span#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.name.textContent = event.currentTarget.value;
  console.log(event);
  if (refs.name.textContent.length === 0) {
    refs.name.textContent = "Anonymous";
  }
}
