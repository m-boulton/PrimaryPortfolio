

# Portfolio Website for Mboulton.com

---

## Core Concept for the project :

- Display all previous projects worked on and supply links to relevant deployment locations
- Display known coding languages for each project created
- Show examples of written code in each project and display in a viewing panel
- Institute a working contact form that emails the administrator and saves the form in the database
- Mobile first responsive design strategy
- Use multiple GIT Branches for Continuous Integration/Continuous Deployment
- Maintain a Lighthouse score for all pages of above 90
- Use strong Asynchronous event handling and REST API fetch requests
- Package all Javascript and Styling elements(SCSS) with webpack
- Show personal information and supply a resume

---

## Description

The implementation of this website was of the highest priority since it was to be sent to prospective employers as a way to display my capabilties in coding.

Initially it was going to be a simple static display page but in order to increase its scalability as more projects would eventually be added, the implementation of a Backend server was created to acquire current project file data and serve it to the website.

The contact form was designed to be delivered to the backend server using a REST API POST request and then render the server response in the DOM, this allowed the form validation to be processed on the server instead of the client to reduce errors.

All project files requested from the server are stored in the SessionStorage using their project name as the key and JSON.strinify'ing the object data as the value. An additional object is used under the key "currentProjectData" which represents the currently viewed project and any mutations are made to it so as not to mutate the original project object, this is mainly used in filtering the files by language type.

---

## Technical Languages used

- HTML 5
- SASS Styling
- Vanilla Javascript
- EcmaScript 6+ syntax (ES2015+)
- REST API fetching JSON
- NPM modules
- Webpack compiler
- Apply and Maintain SEO standards (sitemap and robots.txt)
- Git Server on VPS for deployment (post receive hooks)

---

## Notable Files

> `contactFormButtons.js`

- This file is the main entypoint for the contact form, Asynchronously builds, validates, and submits the contact form, then it renders an output to the DOM as a popup message.


> `formValidate.js`

- This file validates the input fields of the contact form using RegEx and returns an error message or true if it passes.


> `formSubmit.js`

- This file POST's the contact form data to the server with REST API JSON wrapped in a try/catch for error handling and returns any errors for displaying in the DOM.


