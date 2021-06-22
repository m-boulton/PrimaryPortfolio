import coverClicks from "./coverClicks.js";
import contactFormButtons from "./formScripts/contactFormButtons.js";

// Page load event handlers

window.addEventListener("DOMContentLoaded", () => {
  // sets brightness of the background
  document.getElementById("background").style.filter = "brightness(100%)";
});

// Click handlers

document.querySelectorAll(".fa-code").forEach((item) => {
  // Click hanlers being added for each icon that opens the code viewer pane
  item.addEventListener("click", (e) => {
    console.log(e.target.id);
    document.getElementById("pageCover").style.display = "block";
  });
});

// Click handlers for code viewer pane
if (document.querySelector("#pageCoverContent")) {
  document
    // sends all clicks under the code viewer pane to coverClicks function
    .querySelector("#pageCoverContent")
    .addEventListener("click", coverClicks, false);
}

// Click handler for contact form
if (document.getElementById("buttonInputArea")) {
  // adds click event for the buttons in the contact form
  document
    .getElementById("buttonInputArea")
    .addEventListener("click", contactFormButtons, false);
}
