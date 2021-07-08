import getProjectData from "./getProjectData.js";
import selectBuilder from "./selectBuilder.js";
import fileSelector from "./fileSelector.js";

function languageIconBuilder([id, filename]) {
  return `<img
  src="./assets/icons/${filename}.svg"
  id="workDisplay${id}"
  class="svg-injectable"
  title="${filename}"
/>`;
}

function languageIconChecker(projectData) {
  const iconArray = [];
  if (projectData.some((item) => item.fileType === "html"))
    iconArray.push(["Html", "html5"]);
  if (projectData.some((item) => item.fileType === "scss"))
    iconArray.push(["Scss", "sass"]);
  if (projectData.some((item) => item.fileType === "js"))
    iconArray.push(["Js", "javascript"]);
  if (projectData.some((item) => item.fileType === "json"))
    iconArray.push(["Json", "json4"]);
  if (
    projectData.some(
      (item) =>
        item.fileType != "html" ||
        item.fileType != "scss" ||
        item.fileType != "js" ||
        item.fileType != "json"
    )
  )
    iconArray.push(["Etc", "etc"]);
  return iconArray.map((pair) => languageIconBuilder(pair));
}

async function workDisplayLoader(projectName) {
  // clears the filtered project data
  sessionStorage.removeItem("currentProjectLanguageData");

  // gets current projects data and sets it to session storage
  const currentProjectData = await getProjectData(projectName);
  await sessionStorage.setItem(
    "currentProjectData",
    JSON.stringify(currentProjectData)
  );

  // inserts the language icons if the language is present in the project
  document.getElementById("workDisplayTop").innerHTML =
    await languageIconChecker(currentProjectData).join("");

  // convert img-injectables to svg items
  await SVGInject(document.querySelectorAll("img.svg-injectable"));

  // builds the project select dropbox with the current project
  const projectSelect = await selectBuilder(currentProjectData);

  // inserts the current projects data into the dropdown select box
  document.getElementById("fileSelect").innerHTML = projectSelect;
  fileSelector(null, true);
  document.getElementById("fileSelect").addEventListener("input", fileSelector);
}

export default workDisplayLoader;
