// build the contact form object
function formBuilder() {
  // getting form input values and making them into an object
  let data = {
    name: document.getElementById("formName").value,
    email: document.getElementById("formEmail").value.toLowerCase(),
    subject: document.getElementById("formSubject").value,
    message: document.getElementById("formMessage").value,
    emailMe: document.getElementById("confirmEmailCheckbox").checked
      ? true
      : false,
  };
  return data;
}

export default formBuilder;
