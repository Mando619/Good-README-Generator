const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync= util.promisify(fs.writeFile);

//  inquier prompt function with a return

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


## Description
![License](htts://img.shields.io/badge/License-${answers.license}-blue.svg "License Badge")

## Introduction
${answers.description}

## Table of Contents

* [Description](#description)
* [Table of Contents](#installation)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#test)
* [Questions](#questions)

## Installation
${answers.instillation}

## Usage
${answers.usage}

## Contributing
${answers.contributors}

## License

[License](https://opensource.org/licenses/${answers.license})


## Tests
${answers.test}

## Questions:
- [GitHub Profile](https://github.com/${answers.username})

For further inquiry's that pertain to this application, 
please reach me at ${answers.email}.
`;
}  
// async function to return promises. created an object for the reade.me template, and put into a function
// to be written when promp questions end
  async function initiate() {
    try {
      const answers = await userInput();
      const readMeFile = createReadMe(answers);
      // util writing file. created a README.me file with readMefile as the object. 
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
    //const readMe = ``

    // create a writefile with the function above and write a readme file to add. 