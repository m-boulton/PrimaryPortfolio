function fileSelector(event, first) {
  let current = null;
  if (sessionStorage.getItem("currentProjectLanguageData")) {
    current = JSON.parse(sessionStorage.getItem("currentProjectLanguageData"));
  } else {
    current = JSON.parse(sessionStorage.getItem("currentProjectData"));
  }
  let codeDisplay = null;
  if (event) {
    codeDisplay = current.find((item) => item.fileName === event.target.value);
  }
  if (first) {
    codeDisplay = current.find(
      (item) => item.fileName === document.getElementById("fileSelect").value
    );
  }
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
export default fileSelector;
