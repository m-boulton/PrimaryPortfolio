// use dotenv
window.addEventListener("load", () => {
  viewHeight();
});
window.addEventListener("resize", () => {
  viewHeight();
});
function viewHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("background").style.filter = "brightness(100%)";
});

// // Get the forms input elements
// let inputContainer = document.getElementById("contactForm");

// // Get all inputs with class="input-box" inside the contact form
// let inputs = inputContainer.getElementsByClassName("input-box");

// // Loop through the inputs and add the active class to the current/clicked input
// for (let i = 0; i < inputs.length; i++) {
//   inputs[i].addEventListener("click", function () {
//     let current = document.getElementsByClassName("input-box");

//     // If there's no active class
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" active", "");
//     }

//     // Add the active class to the current/clicked button
//     this.className += " active";
//   });
// }
