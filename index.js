// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your Title',
      name: 'title',
    },
    {
      type: 'input',
      message: `What is your description?
      "This page will serve as..."`,
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are your installation instructions?',
      name: 'installation',
    },
    {
    type: 'input',
    message: 'What are your usage instructions?',
    name: 'usage',
    },
    {
    type: 'input',
    message: `Who are your credits?
    ex:"Name, for helping with..., link to their page"`,
    name: 'credits',
    },
  ])
  .then((response) =>
    writeToFile(response)
  );

// TODO: Create a function to write README file
function writeToFile(data) {
    const readMe = `
    # ${data.title}

    ## Description

    This page will serve as ${data.description}

    ## Table of contents

    -[Installation](#installation)
    -[Usage](#usage)
    -[Cradits](#credits)


    ## Installation

    ${data.istallation}


    ## Usage

    ${data.usage}


    ## Credits

    ${data.credits}

    `;
    // Change location later
    fs.writeFile('READ-ME.md', readMe, (err) =>
    err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
