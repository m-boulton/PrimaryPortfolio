import getProjectData from "./getProjectData.js";
import * as vr from "./../../styles/prettify/prettify.js";

async function workDisplayLoader(projectName) {
  const current = await getProjectData(projectName);
  let input = document.getElementById("codeDisplay");
  input.classList.remove("prettyprinted");
  input.innerHTML = `<code class="language-${current[4].fileType}">${current[4].data}</code>`;
  prettyPrint();
}

export default workDisplayLoader;
