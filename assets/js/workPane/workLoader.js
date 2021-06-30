import getProjectData from "./getProjectData.js";
import workButtonsBuilder from "./workButtonsBuilder.js";
import workButtonsEvents from "./workButtonsEvents.js";

async function workLoader() {
  // fetch database data and first project filedata
  const databaseData = await getProjectData();
  // populate buttons with database data
  const workSection = await workButtonsBuilder(databaseData.data);
  document.getElementById("workSelect").innerHTML = workSection;

  // injects svg elements
  SVGInject(document.querySelectorAll("img.svg-injectable"));
  // create click events
  workButtonsEvents();
}

export default workLoader;
