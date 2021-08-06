import iconBuilder from "./iconBuilder.js";
import descriptionConverter from "./descriptionConverter.js";

// Takes each project as an object and renders each of them into the DOM as HTML buttons
function descriptionBuilder(project) {
  return `<button class="work-button">
    <h3 class="work-button-title">${project.name.split("_").join(" ")}</h3>
    <div class="language-icons">
      ${iconBuilder(project.keywords)}
    </div>
    <img src="./assets/icons/angle-down.svg" class="svg-injectable angle-down" title="Expand Project" />
  </button>
  <div class="work-panel">
              <span>
              <img src="./assets/icons/code.svg" class="svg-injectable blink file-code" title="Show Code Examples" />
                <a href="${project.homepage}">
                <img src="./assets/icons/link.svg" class="svg-injectable" title="Visit Website" /></a>
                <a href="${project.github}">
                <img src="./assets/icons/github.svg" class="svg-injectable" title="Visit Github Repo" /></a>
              </span>
              ${descriptionConverter(project.readme)}
            </div>
    `;
}
export default descriptionBuilder;
