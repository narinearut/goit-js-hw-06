

const refs = {
  form: document.querySelector(".login-form"),
};

const verifyFormData = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  const dataObj = {};
    if (email.value.length === 0 || password.value.length === 0)  {
    return alert("Помилка! Всі поля повинні бути заповнені.");
  }
  dataObj.email = email.value;
  dataObj.password = password.value;
  console.log(dataObj);
  refs.form.reset();
};
refs.form.addEventListener("submit", verifyFormData);



// const refs = {
//   form: document.querySelector(".login-form"),
// };

// refs.form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(e) {
//   e.preventDefault();

//   // console.dir(e.currentTarget.elements.email.value);

//   const formData = new FormData(e.currentTarget);

//   formData.forEach((value, name) => {
//     if (value.length === 0) {
//       return window.alert("Помилка! Всі поля повинні бути заповнені.");
//     }

//     formData[name] = value;
//     // console.log('Поле:', name);
//     // console.log('Значення:', value);
//   });

//   console.log(formData);

//   refs.form.reset();
// }