import { apiUrl } from "../globalVariable.js";
async function formSubmit(formData) {
  // building options for the fetch request and passing data in body
  const options = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    redirect: "follow",
    referrerPolicy: "no-referrer",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  try {
    //   post's form to server
    const res = await fetch(`${apiUrl}/portfolio/contact`, options);

    // checking for a valid http response
    if (res.ok) {
      // convert response from json to object
      const resData = await res.json();
      //   returns the message from the server about form submit
      return resData;
    } else {
      // logs any http responses that arent succeeding
      console.log("HTTP-Error: " + res.status);
    }
  } catch (error) {
    //   logs all errors with posting to the server
    console.log(`There was a catch error in formSubmit.js: ${error}`);
  }
}

export default formSubmit;