import workDisplayLoader from "./workDisplayLoader.js";

function collapse(btn, sibling) {
  btn.removeAttribute("id");
  sibling.style.maxHeight = null;
}

function workButtonsEvents() {
  // Get all button elements
  const buttonParent = document.getElementById("workSelect");
  const buttons = [...buttonParent.children].filter(
    (i) => i.className === "work-button"
  );

  buttons.forEach((element) => {
    element.addEventListener("click", (e) => {
      buttons.forEach((btn) => {
        const match = btn === e.currentTarget;
        const sibling = btn.nextElementSibling;
        // Closes panels that arent being targeted
        if (!match) collapse(btn, sibling);
        // Toggles opening/closing panels being clicked
        if (match) {
          if (btn.id === "current") return collapse(btn, sibling);
          btn.id = "current";
          sibling.style.maxHeight = sibling.scrollHeight + "px";
          workDisplayLoader(
            btn.firstChild.nextElementSibling.innerHTML.split(" ").join("_")
          );
        }
      });
    });
  });
}

export default workButtonsEvents;
