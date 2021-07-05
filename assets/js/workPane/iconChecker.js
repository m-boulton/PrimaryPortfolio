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

export default iconChecker;
