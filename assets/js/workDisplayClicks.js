function workDisplayClicks(e) {
  let targets = [].concat(e.target.id, e.target.parentElement.id);
  if (targets.includes("workDisplayRight")) {
    console.log("right");
  }
  if (targets.includes("workDisplayLeft")) {
    console.log("left");
  }
  if (targets.includes("workDisplayExit")) {
    document.getElementById("workDisplay").style.display = "none";
  }
}
export default workDisplayClicks;
