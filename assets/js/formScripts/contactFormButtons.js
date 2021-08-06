import formSubmit from "./formSubmit.js";
import formReset from "./formReset.js";
import formBuilder from "./formBuilder.js";
import formValidate from "./formValidate.js";

async function contactFormButtons(e) {
  //   click event for submit button
  if (e.target.id == "submitButton" || e.key === "Enter") {
    let cover = document.getElementById("formMessageCover");
    let message = document.getElementById("formMessageText");
    let button = document.getElementById("formMessageButton");
    //   build the form (object)
    let formData = await formBuilder();
    // check to make sure require fields arent empty (returns a boolean or message)
    let formValid = await formValidate(formData);
    // sends form data (object) to be processed to backend and renders message in the form
    if (formValid === true) {
      // renders a message when submitting the form with fetch post
      message.textContent = "Submitting form...";
      button.textContent = "Waiting";
      cover.style.display = "block";

      // Submits the form and waits for response
      const response = await formSubmit(formData);
      if (response.message === "ERROR") {
        button.addEventListener("click", () => {
          cover.style.display = "none";
        });
        message.textContent = `${response.error}`;
        return (button.textContent = "Close");
      }
      // returns out of the function and renders the server response (obj.data)
      button.addEventListener("click", () => {
        formReset();
        cover.style.display = "none";
      });
      message.textContent = `${response.data}`;
      return (button.textContent = "Close");
    }

    // outputs error message if required fields are empty
    message.textContent = formValid;
    button.textContent = "Close";
    cover.style.display = "block";
    button.focus();
    button.addEventListener("click", () => {
      cover.style.display = "none";
    });
    button.addEventListener("keypress", () => {
      if (e.key === "Enter") {
        cover.style.display = "none";
      }
    });
  }

  //  click event for reset button
  if (e.target.id == "resetButton") {
    formReset();
  }
}

export default contactFormButtons;
