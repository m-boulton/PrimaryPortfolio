function coverClicks(e) {
  let targets = [].concat(e.target.id, e.target.parentElement.id);
  if (targets.includes("coverRight")) {
    console.log("right");
  }
  if (targets.includes("coverLeft")) {
    console.log("left");
  }
  if (targets.includes("coverExit")) {
    document.getElementById("pageCover").style.display = "none";
  }
}
export default coverClicks;
