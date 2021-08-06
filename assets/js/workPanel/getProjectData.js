import { apiUrl } from "./../globalVariable.js";

async function fetchProjectData(key) {
  // sets the fetch endpoint to either the list of projects or a specific project
  const apiEndpoint =
    key === "projectList"
      ? `${apiUrl}/projectList`
      : `${apiUrl}/codeFiles?project=${key}`;
  // fetching projects data from api
  const res = await fetch(`${apiEndpoint}`);
  const data = await res.json();

  // return error data if error occured
  if (data.message === "ERROR") return data.error;

  // saving projects data to sessionstorage
  window.sessionStorage.setItem(key, JSON.stringify(data.data));

  // return data
  return data.data;
}

function getProjectData(query) {
  // checking sessionstorage for data and returns if it exists
  if (window.sessionStorage.getItem(query)) {
    const storageJson = window.sessionStorage.getItem(query);
    return JSON.parse(storageJson);
  }
  // calling a fetch request and returning the data
  return fetchProjectData(query);
}

export default getProjectData;
