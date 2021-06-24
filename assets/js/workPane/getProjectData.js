// check session storage for buttonsdata and return or fetch datafrom database

// on dom load fetch db data for first project with name as query
// receive header, paragraph, link, github, picture
// first poject expands and others collapse
// click event to expand and load code from readfilesync
//
import { apiUrl } from "./../globalVariable.js";

async function fetchProjectData() {
  const data = await fetch(`${apiUrl}/portfolio/projectList`);
  if (!data.message || !data.error) throw "cannot fetch data from database";
  data.message === "PROJECTLIST" ? data.data : data.error;
}

function getProjectData() {}
// const localData = sessionStorage.getItem("projectsObj");
// localData ? localData : fetchProjectData();

export default getProjectData;
