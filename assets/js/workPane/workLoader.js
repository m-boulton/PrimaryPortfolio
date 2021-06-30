import getProjectData from "./getProjectData.js";
import workButtonsBuilder from "./workButtonsBuilder.js";
import workButtonsEvents from "./workButtonsEvents.js";

async function workLoader() {
  // get project list information from session storage or api call
  const databaseData = await getProjectData();

  // populate buttons with database data
  const workSection = await workButtonsBuilder(databaseData);

  // insert button markup to DOM
  document.getElementById("workSelect").innerHTML = workSection;

  // convert img-injectables to svg items
  await SVGInject(document.querySelectorAll("img.svg-injectable"));

  // create click events
  workButtonsEvents();

  // add events to buttons created
  document.querySelectorAll(".file-code").forEach((item) => {
    item.addEventListener("click", (e) => {
      document.getElementById("workDisplay").style.display = "block";
    });
  });
}

export default workLoader;
