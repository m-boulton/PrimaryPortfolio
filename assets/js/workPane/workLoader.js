import getProjectData from "./getProjectData.js";
import storeLocalData from "./storeLocalData.js";
import workButtonsBuilder from "./workButtonsBuilder.js";
import workButtonsEvents from "./workButtonsEvents.js";

async function workLoader() {
  //   // fetch database data and first project filedata
  //   const databaseData = await getProjectData();
  //   // load db data and filedata in session storage
  //   storeLocalData(databaseData);
  //   // populate buttons with database data
  //   await workButtonsBuilder();
  //   // create click events
  workButtonsEvents();
}

export default workLoader;
