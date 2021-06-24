const apiUrl =
  window.location.hostname === "localhost"
    ? "http://localhost:3501"
    : "https://api.mboulton.com";

export { apiUrl };
