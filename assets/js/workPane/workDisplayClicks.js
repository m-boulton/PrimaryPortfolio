import selectBuilder from "./selectBuilder.js";
import fileSelector from "./fileSelector.js";

function languageHighlighter(id) {
  document.querySelectorAll(".svg-injectable").forEach((item) => {
    if (item.id === id) {
      return item.classList.add("language-highlight");
    }
    item.classList.remove("language-highlight");
  });
}

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
    switch (event.target.parentElement.id) {
      case "workDisplayHtml":
        languageFilter("html");
        languageHighlighter("workDisplayHtml");
        break;
      case "workDisplayScss":
        languageFilter("scss");
        languageHighlighter("workDisplayScss");
        break;
      case "workDisplayJs":
        languageFilter("js");
        languageHighlighter("workDisplayJs");
        break;
      case "workDisplayJson":
        languageFilter("json");
        languageHighlighter("workDisplayJson");
        break;
      case "workDisplayEtc":
        languageFilter(["html", "scss", "js", "json"]);
        languageHighlighter("workDisplayEtc");
        break;
      case "workDisplayLeft":
        console.log("left");
        break;
      case "workDisplayRight":
        console.log("right");
        break;
      case "workDisplayExit":
        document.getElementById("workDisplay").style.display = "none";
        break;
    }
    // FIXME redundancy for event targeting certain elements
    switch (event.target.id) {
      case "workDisplayHtml":
        languageFilter("html");
        languageHighlighter("workDisplayHtml");
        break;
      case "workDisplayScss":
        languageFilter("scss");
        languageHighlighter("workDisplayScss");
        break;
      case "workDisplayJs":
        languageFilter("js");
        languageHighlighter("workDisplayJs");
        break;
      case "workDisplayJson":
        languageFilter("json");
        languageHighlighter("workDisplayJson");
        break;
      case "workDisplayEtc":
        languageFilter(["html", "scss", "js", "json"]);
        languageHighlighter("workDisplayEtc");
        break;
    }
  });
}
export default workDisplayClicks;
