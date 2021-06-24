import workDisplayClicks from "./workDisplayClicks.js";
import contactFormButtons from "./formScripts/contactFormButtons.js";
import workLoader from "./workPane/workLoader.js";

// Page load event handlers

window.addEventListener("DOMContentLoaded", async () => {
  // sets brightness of the background
  document.getElementById("background").style.filter = "brightness(100%)";
  if (window.location.pathname.includes("Work")) {
    workLoader();
  }
});

// Click handlers

// Click handler for contact form
if (document.getElementById("buttonInputArea")) {
  // adds click event for the buttons in the contact form
  document
    .getElementById("buttonInputArea")
    .addEventListener("click", contactFormButtons, false);
}

document.querySelectorAll(".fa-file-code").forEach((item) => {
  item.addEventListener("click", (e) => {
    document.getElementById("workDisplay").style.display = "block";
  });
});

// Click handlers for code viewer pane
if (document.querySelector("#workDisplayContent")) {
  document
    // sends all clicks under the code viewer pane to workDisplayClicks function
    .querySelector("#workDisplayContent")
    .addEventListener("click", workDisplayClicks, false);
}
