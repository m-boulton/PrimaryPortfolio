import coverClicks from "./coverClicks.js";

document.querySelectorAll(".fa-code").forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.id);
    document.getElementById("pageCover").style.display = "block";
  });
});
if (document.querySelector("#pageCoverContent")) {
  document
    .querySelector("#pageCoverContent")
    .addEventListener("click", coverClicks, false);
}
