import descriptionBuilder from "./descriptionBuilder.js";

function workPanelBuilder(workbuttonArray) {
  const inner = [];
  if (Array.isArray(workbuttonArray)) {
    workbuttonArray.forEach((project) => {
      const description = descriptionBuilder(project);
      inner.push(description);
    });
  }
  return inner.join(" ");
}

export default workPanelBuilder;
