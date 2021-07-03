import getProjectData from "./getProjectData.js";

function optionBuilder([fileTypeName, array]) {
  const optionsList = array.map((item) => {
    return `<option value="${item.fileName}">${item.fileName}</option>`;
  });
  return `<optgroup label="${fileTypeName}">${optionsList}</optgroup>`;
}

function selectBuilder(currentProject) {
  const htmlProjects = currentProject.filter(
    (item) => item.fileType === "html"
  );
  const scssProjects = currentProject.filter(
    (item) => item.fileType === "scss"
  );
  const jsProjects = currentProject.filter((item) => item.fileType === "js");
  const jsonProjects = currentProject.filter(
    (item) => item.fileType === "json"
  );
  const etcProjects = currentProject.filter(
    (item) =>
      item.fileType !== "html" &&
      item.fileType !== "scss" &&
      item.fileType !== "json" &&
      item.fileType !== "js"
  );
  const split = [
    ["HTML", htmlProjects],
    ["SASS", scssProjects],
    ["Javascript", jsProjects],
    ["ETC...", etcProjects],
    ["JSON", jsonProjects],
  ];
  return split.map((item) => optionBuilder(item)).join("");
}

async function workDisplayLoader(projectName) {
  const current = await getProjectData(projectName);
  const projectSelect = await selectBuilder(current);
  //
  function fileSelector(event) {
    const codeDisplay = current.find(
      (item) => item.fileName === event.target.value
    );
    const innerData =
      codeDisplay.fileType === "html"
        ? codeDisplay.data.replaceAll("<", "&lt").replaceAll(">", "&gt")
        : codeDisplay.data;
    document.getElementById("codeDisplay").classList.remove("prettyprinted");
    document.getElementById(
      "codeDisplay"
    ).innerHTML = `<code>${innerData}</code>`;

    // prettify injected code
    prettyPrint();
  }
  document
    .getElementById("fileSelect")
    .removeEventListener("input", fileSelector);
  // FIXME not removing event listener
  document.getElementById("fileSelect").innerHTML = projectSelect;
  document.getElementById("fileSelect").addEventListener("input", fileSelector);
}

export default workDisplayLoader;
