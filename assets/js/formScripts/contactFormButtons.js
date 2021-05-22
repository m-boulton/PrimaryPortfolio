import formSubmit from "./formSubmit.js";
import formReset from "./formReset.js";
import formBuilder from "./formBuilder.js";
import formValidate from "./formValidate.js";

async function contactFormButtons(e) {
  //   click event for submit button
  if (e.target.id == "submitButton") {
    //   build the form (object)
    let formData = await formBuilder();
    // check to make sure require fields arent empty (boolean or message)
    let formValid = await formValidate(formData);

    // sends form data (object) to be processed to backend and renders message in the form
    if (formValid === true) {
      // renders a message when submitting the form with fetch post
      document.getElementById("formMessageOutput").textContent =
        "Submitting form...";
      let response = await formSubmit(formData);

      // returns out of the function and renders the server response (obj.data)
      return (document.getElementById(
        "formMessageOutput"
      ).textContent = `${response.data}`);
    }

    // outputs error message if required fields are empty
    document.getElementById("formMessageOutput").textContent = formValid;
  }

  //  click event for reset button
  if (e.target.id == "resetButton") {
    formReset();
  }
}

export default contactFormButtons;
