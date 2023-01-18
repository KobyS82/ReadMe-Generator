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
      message: 'What are your installation instructions? (walkthrough link)',
      name: 'installation',
    },
    {
    type: 'input',
    message: `What are your usage instructions?
    You can download this project off of GitHub at...`,
    name: 'usage',
    },
    {
    type: 'input',
    message: `Who are your credits?
    ex:"Name, for helping with..., link to their page"`,
    name: 'credits',
    },
    {
    type: 'input',
    message: `What are your instructions?`,
    name: 'testInstructions',
    },
  ])
  .then((response) =>
    writeToFile(response)
  );

// TODO: Create a function to write README file
function writeToFile(data) {
    const readMe = (
`
# ${data.title}

## Description

This page will serve as ${data.description}

## Table of contents

-[Installation](#installation)

-[Usage](#usage)

-[Credits](#credits)

-[Test Instructions](#test-instructions)


## Installation

${data.installation}


## Usage

You can download this project off of GitHub at ${data.usage}


## Credits

${data.credits}

## Test Instructions

${data.testInstructions}

`);
    // Change location later
    fs.writeFile('READ-ME.md', readMe, (err) =>
    err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
