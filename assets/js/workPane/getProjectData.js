import { apiUrl } from "./../globalVariable.js";

async function fetchProjectData() {
  const res = await fetch(`${apiUrl}/projectList`);
  const data = await res.json();
  window.sessionStorage.setItem("projectsObj", JSON.stringify(data));
  if (data.message === "ERROR")
    throw `cannot fetch data from database : ${data.error}`;
  if (data.message === "PROJECTLIST") return data.data;
  return data.error;
}

function getProjectData() {
  if (window.sessionStorage.getItem("projectsObj")) {
    const storageJson = window.sessionStorage.getItem("projectsObj");
    return JSON.parse(storageJson);
  }
  return fetchProjectData();
}

export default getProjectData;
