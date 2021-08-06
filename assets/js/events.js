import contactFormButtons from "./formScripts/contactFormButtons.js";
import workLoader from "./workPanel/workLoader.js";
import workDisplayClicks from "./workPanel/workDisplayClicks.js";

// Page load event handlers

window.addEventListener("DOMContentLoaded", async () => {
  // sets brightness of the background
  document.getElementById("background").style.filter = "brightness(100%)";
  // Loads all the scripts associated with the "My Work" page
  if (window.location.pathname.includes("Work")) {
    workLoader();
    workDisplayClicks();
  }
  // Loads all the scripts associated with the contact form if that page is current
  if (window.location.pathname.includes("contact")) {
    // adds click event for the buttons in the contact form
    document
      .getElementById("buttonInputArea")
      .addEventListener("click", contactFormButtons, false);
    document
      .getElementById("queryInputArea")
      .addEventListener("keypress", contactFormButtons, false);
  }
});
