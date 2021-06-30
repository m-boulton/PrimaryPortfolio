import { apiUrl } from "./../globalVariable.js";

async function fetchProjectData() {
  // fetching projects data from api
  const res = await fetch(`${apiUrl}/projectList`);
  const data = await res.json();

  // saving projects data to sessionstorage
  window.sessionStorage.setItem("projectsObj", JSON.stringify(data.data));

  // return data
  if (data.message === "PROJECTLIST") return data.data;

  // return error data
  if (data.message === "ERROR") return data.error;
}

function getProjectData() {
  // checking sessionstorage for data
  if (window.sessionStorage.getItem("projectsObj")) {
    const storageJson = window.sessionStorage.getItem("projectsObj");
    return JSON.parse(storageJson);
  }
  // calling a fetch request and returning the data
  return fetchProjectData();
}

export default getProjectData;
