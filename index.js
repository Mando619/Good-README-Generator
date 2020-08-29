const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync= util.promisify(fs.writeFile);

//async function userInput() {
   // try{
     // const { description }
   // }
//}

//async function userInput() {
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

    const readMe = ``