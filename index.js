const fs = require("fs");
const inquirer = require("inquirer");
//const axios = require('axios');
const util = require("util");

const writeFileAsync= util.promisify(fs.writeFile);

// turn the inquier prompt into a function with a return

function userInput() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: 'What is the title of your project?'
  },
    {
        type: "input", 
        message: "Please enter a description of your project?",
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
        type: "list",
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
      }
  ]);
}
    //]).then(function(response) {
      //console.log(response);
   // })
    
  
// function to use template literal. created a README.md template 
  function createReadMe(answers) {
  return ` 
## ${answers.title}

## Introduction:
${answers.description}

## Table of Contents:


## Installation:
${answers.instillation}

## Usage:
${answers.usage}

## Contributing:
${answers.contributors}

## License:
${answers.license}


## Tests:
${answers.test}

## Questions:
[GitHub Profile](https://github.com/${answers.username})

For further inquiry's that pertain to this application, 
please reach me at ${answers.email}.
`;
}  
  async function initiate() {
    try {
      const answers = await userInput();
      const readMeFile = createReadMe(answers);

      await writeFileAsync("README.md",readMeFile);
      console.log("It worked! Yay!")
    }
    catch(error) {
      console.log(error);
    }
  }

  initiate();
 // console.log(userInput);
    // set up readme.md template using template literals. Then turn into a function
    //const readMe = ```

    // create a writefile with the function above and write a readme file to add. 