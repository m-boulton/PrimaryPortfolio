function iconChecker(iconKey) {
  let fileName = null;
  let title = null;
  switch (iconKey) {
    case "css":
      fileName = "css3";
      title = "CSS 3";
      break;

    case "es6":
      fileName = "es6";
      title = "EcmaScript 2015+";
      break;

    case "expressjs":
      fileName = "expressjs";
      title = "Express JS";
      break;

    case "html":
      fileName = "html5";
      title = "HTML 5";
      break;

    case "javascript":
      fileName = "javascript";
      title = "Javascript";
      break;

    case "jest":
      fileName = "jest";
      title = "Jest";
      break;

    case "mongoose":
      fileName = "mongodb";
      title = "Mongoose(mongoDB)";
      break;

    case "nodejs":
      fileName = "nodejs";
      title = "Node JS";
      break;

    case "nodemailer":
      fileName = "nodemailer";
      title = "Node Mailer";
      break;

    case "react":
      fileName = "reactjs";
      title = "React JS";
      break;

    case "sass":
      fileName = "sass";
      title = "Sass";
      break;

    case "webpack":
      fileName = "webpack";
      title = "Webpack";
      break;

    default:
      fileName = null;
      title = null;
      break;
  }

  if (fileName) {
    return `<img src="./assets/icons/${fileName}.svg" class="svg-injectable" title="${title}" />`;
  }
  return null;
}

function iconBuilder(keywordsArray) {
  const languages = [];
  if (keywordsArray) {
    keywordsArray.forEach((key) => {
      const icon = iconChecker(key);
      if (icon) {
        languages.push(icon);
      }
    });
    return languages.join(" ");
  }
  return "";
}

function descriptionBuilder(markdownText) {
  // FIXME rebuild this function
  const htmlText = markdownText
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>")
    .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>")
    .replace(/\*(.*)\*/gim, "<i>$1</i>")
    .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
    .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
    .replace(/\n$/gim, "<br />");

  return htmlText.trim();
}

function workButtonsBuilder(workbuttonArray) {
  const inner = [];
  if (Array.isArray(workbuttonArray)) {
    workbuttonArray.forEach((project) => {
      let html = `
    <button class="work-button">
      <h3 class="work-button-title">${project.name.split("_").join(" ")}</h3>
      <div class="language-icons">
        ${iconBuilder(project.keywords)}
      </div>
      <img src="./assets/icons/angle-down.svg" class="svg-injectable angle-down" title="Expand Project" />
    </button>
    <div class="work-panel">
                ${descriptionBuilder(project.readme)}
                <span>
                <a href="#">
                <img src="./assets/icons/code.svg" class="svg-injectable blink" title="Show Code Examples" /></a>
                  <a href="${project.homepage}">
                  <img src="./assets/icons/link.svg" class="svg-injectable" title="Visit Website" /></a>
                  <a href="${project.github}">
                  <img src="./assets/icons/github.svg" class="svg-injectable" title="Visit Github Repo" /></a>
                </span>
              </div>
      `;
      inner.push(html);
    });
  }
  return inner.join(" ");
}

export default workButtonsBuilder;
