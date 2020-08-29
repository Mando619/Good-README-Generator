const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync= util.promisify(fs.writeFile);

// turn the inquier prompt into a function

inquirer
  .prompt([
    {
        type: "input", 
        message: "Please ener a description of your project?",
        name: "description"
      },
      {
        type: "input",
        message: "What are the installation instructions for Project? If no instructions, write none.",
        name: "installation"
      },
      {
        type: "input",
        message: "How would you like this application to be used?",
        name: "usage"
      },
      {
        type: "input",
        message: "Who contributed towards this project",
        name: "contributors"
      },
      {
        type:"input",
        message: "What are the test instructions",
        name: "test"
      },
      {
        type: "checkbox",
        message: "Please select a license to use.",
        choices: [
          "GNU GPlv3",
          "ISC",
          "MIT",
          "Apache",
  
        ],
        name: "license"
      },
      {
        type: "input",
        message: "What is your Github username?",
        name: "username"
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email"
      },
    ])
    .then(function(response) {
        console.log(response)
    })

    // set up readme.md template using template literals. Then turn into a function
    const readMe = ``

    // create a writefile with the function above and write a readme file to add. 