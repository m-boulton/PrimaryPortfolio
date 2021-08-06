//  Sets the api address to a local address if working in a development environment
const apiUrl =
  window.location.hostname === "localhost"
    ? "http://localhost:3501/portfolio"
    : "https://api.mboulton.com/portfolio";

export { apiUrl };
