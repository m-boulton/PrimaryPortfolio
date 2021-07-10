function optionBuilder([fileTypeName, array]) {
  const optionsList = array.map((item) => {
    return `<option value="${item.fileName}">${item.fileName}</option>`;
  });
  return `<optgroup label="${fileTypeName}">${optionsList}</optgroup>`;
}

function selectBuilder(currentProject, language) {
  const projectsArray = [];
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
  if (htmlProjects.length > 0) {
    projectsArray.push(["HTML", htmlProjects]);
  }
  if (scssProjects.length > 0) {
    projectsArray.push(["SASS", scssProjects]);
  }
  if (jsProjects.length > 0) {
    projectsArray.push(["Javascript", jsProjects]);
  }
  if (jsonProjects.length > 0) {
    projectsArray.push(["JSON", jsonProjects]);
  }
  if (etcProjects.length > 0) {
    projectsArray.push(["ETC...", etcProjects]);
  }
  //   builds the select options for a single language
  if (language) {
    return optionBuilder(projectsArray[0]);
  }

  //   builds the select options for all languages
  return projectsArray.map((item) => optionBuilder(item)).join("");
}
export default selectBuilder;
