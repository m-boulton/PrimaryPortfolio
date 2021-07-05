import iconChecker from "./iconChecker.js";

function iconBuilder(keywordsArray) {
  const languages = [];
  if (keywordsArray) {
    keywordsArray.forEach((key) => {
      const icon = iconChecker(key);
      if (icon) {
        languages.push(icon);
      }
    });
    return languages.join("");
  }
  return "";
}
export default iconBuilder;
