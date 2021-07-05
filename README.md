

# Portfolio Website for Mboulton.com

---

## Core Concept for the project :

- Mobile first responsive design strategy
- Use multiple GIT Branches for Continuous Implementation/Continuous Developement
- Maintain a Lighthouse score for all pages of above 90
- Use strong Asynchronous event hanling and REST API fetch requests
- Package all Javascript and Styling elements(SCSS) with webpack
- Display all previous projects worked on and supply links to relevant deployment locations
- Show a preview of files used each projects in an easy to understand method(UI/UX friendly)
- Institute a working contact form that emails the administrator and saves the form in the database
- Display known coding languages
- Show personal information and supply a resume

---

## Description

The implementation of this website was of the highest priority since it was to be sent to prospective employers as a way to display my capabilties in coding

Initially it was going to be a simple static display page but in order to increase its scalability as more projects would eventually be added, the implementation of a Backend server was added to acquire current project file data and serve it to the website.

The priority of this project currently is to

---

## Technical Languages used

- HTML 5
- SASS Styling
- Vanilla Javascript
- EcmaScript 6+ syntax (ES2015+)
- REST api fetching JSON
- NPM modules
- Webpack compiler
- Apply and Maintain SEO standards
- Git Server on VPS for deployment

---

## Notable Files

> `contactFormButtons.js`

- This file is the main entypoint for the contact form, Asynchronously builds, validates, and submits the contact form, then it renders an output to the DOM.


> `formValidate.js`

- This file validates the input fields of the contact form using RegEx and returns an error message or true if it passes.


> `formSubmit.js`

- This file POST's the contact form data to the server with REST API JSON wrapped in a try/catch for error handling and returns any errors for displaying in the DOM.
