import selectBuilder from "./selectBuilder.js";
import fileSelector from "./fileSelector.js";

function languageFilter(lang) {
  // filters the full project for a specific filetype
  let filtered = null;
  if (Array.isArray(lang)) {
    filtered = JSON.parse(sessionStorage.getItem("currentProjectData")).filter(
      (project) => !lang.includes(project.fileType)
    );
  }
  if (typeof lang === "string") {
    filtered = JSON.parse(sessionStorage.getItem("currentProjectData")).filter(
      (project) => project.fileType === lang
    );
  }
  // stores the specified language files
  sessionStorage.setItem(
    "currentProjectLanguageData",
    JSON.stringify(filtered)
  );

  // builds the select input field with only the specified language
  const selectFiltered = selectBuilder(filtered, true);
  document.getElementById("fileSelect").innerHTML = selectFiltered;

  // inserts the current projects data into the dropdown select box
  fileSelector(null, true);
  document.getElementById("fileSelect").addEventListener("change", (e) => {
    fileSelector(e);
  });
}

function workDisplayClicks() {
  const codeDisplayParent = document.getElementById("workDisplayContent");
  codeDisplayParent.addEventListener("click", (event) => {
    if (event.target.parentElement.id === "workDisplayLeft") {
      console.log("left click");
    }
    if (event.target.parentElement.id === "workDisplayRight") {
      console.log("left right");
    }
    if (
      event.target.id === "workDisplayHtml" ||
      event.target.parentElement.id === "workDisplayHtml"
    ) {
      languageFilter("html");
    }
    if (
      event.target.id === "workDisplayScss" ||
      event.target.parentElement.id === "workDisplayScss"
    ) {
      languageFilter("scss");
    }
    if (
      event.target.id === "workDisplayJs" ||
      event.target.parentElement.id === "workDisplayJs"
    ) {
      languageFilter("js");
    }
    if (
      event.target.id === "workDisplayJson" ||
      event.target.parentElement.id === "workDisplayJson"
    ) {
      languageFilter("json");
    }
    if (
      event.target.id === "workDisplayEtc" ||
      event.target.parentElement.id === "workDisplayEtc"
    ) {
      languageFilter(["html", "scss", "js", "json"]);
    }

    // closes the code viewer panel for mobile users
    if (event.target.parentElement.id === "workDisplayExit") {
      document.getElementById("workDisplay").style.display = "none";
    }
  });
}
export default workDisplayClicks;
