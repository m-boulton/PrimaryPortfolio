// contact form validator (ran only on submitting form click event)
async function formValidate(form) {
  // validate input fields
  if (form.name == "" || form.name == null) return "Name field is Required.";
  if (form.email == "" || form.email == null) return "Email field is required.";
  return true;
}

export default formValidate;
