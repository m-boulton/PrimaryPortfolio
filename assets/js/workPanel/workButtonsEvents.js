import workDisplayLoader from "./workDisplayLoader.js";

// collapses currently passed button
function collapse(btn, sibling) {
  btn.removeAttribute("id");
  sibling.style.maxHeight = null;
}

function workButtonsEvents() {
  // Get all project button elements and filter out the "work-panel" elements
  const buttonParent = document.getElementById("workSelect");
  const buttons = [...buttonParent.children].filter(
    (i) => i.className === "work-button"
  );

  buttons.forEach((element) => {
    // creating event listeners for all project buttons
    element.addEventListener("click", (e) => {
      // run this function when any buttons are clicked
      buttons.forEach((btn) => {
        const match = btn === e.currentTarget;
        const sibling = btn.nextElementSibling;

        // Closes panels that arent being targeted
        if (!match) collapse(btn, sibling);

        // Toggles opening/closing the panel being clicked
        if (match) {
          // collapses current project panel if it is open
          if (btn.id === "current") return collapse(btn, sibling);

          // expands current project panel if it is closed
          btn.id = "current";
          sibling.style.maxHeight = sibling.scrollHeight + "px";

          // filling the code display panel with instructions
          if (document.getElementById("noticeLeft")) {
            document.getElementById("noticeLeft").style.display = "none";
            document.getElementById("noticeAbove").style.display = "block";
          }

          // sends the current selected project to the code display loader
          workDisplayLoader(
            btn.firstChild.nextElementSibling.innerHTML.split(" ").join("_")
          );
        }
      });
    });
  });
}

export default workButtonsEvents;
