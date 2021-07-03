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
  const etcProjects = currentProject.filter(
    (item) =>
      item.fileType !== "html" &&
      item.fileType !== "scss" &&
      item.fileType !== "js"
  );
  const split = [
    ["HTML", htmlProjects],
    ["SASS", scssProjects],
    ["Javascript", jsProjects],
    ["ETC...", etcProjects],
  ];
  return split.map((item) => optionBuilder(item)).join("");
}

async function workDisplayLoader(projectName) {
  const current = await getProjectData(projectName);
  const projectSelect = await selectBuilder(current);
  //
  function fileSelector(event) {
    const selected = event.target.value;
    const codeDisplay = current.find(
      (item) => item.fileName === event.target.value
    );
    document.getElementById("codeDisplay").classList.remove("prettyprinted");
    document.getElementById("codeDisplay").innerHTML = codeDisplay.data;

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
