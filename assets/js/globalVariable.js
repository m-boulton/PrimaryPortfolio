const apiUrl =
  window.location.hostname === "localhost"
    ? "http://localhost:3501/portfolio"
    : "https://api.mboulton.com/portfolio";

export { apiUrl };
