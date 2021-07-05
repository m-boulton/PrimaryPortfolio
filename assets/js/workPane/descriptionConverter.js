function descriptionConverter(markdownText) {
  const htmlText = markdownText
    .replace(/---$/gim, "<hr>")
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/^- (.*$)/gim, "<p>- &emsp;$1</p>")
    .replace(
      /^\> (.*$)/gim,
      '<div style="background-color: #FFFF00; color: #000000; width: max-content;">$1</div>'
    )
    .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>")
    .replace(/\*(.*)\*/gim, "<i>$1</i>")
    .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
    .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
    .replace(/\n$/gim, "<br />");

  return htmlText.trim();
}
export default descriptionConverter;
