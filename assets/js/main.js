// use dotenv
window.addEventListener("load", () => {
  viewHeight();
});
window.addEventListener("resize", () => {
  viewHeight();
});
function viewHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("background").style.filter = "brightness(100%)";
});
