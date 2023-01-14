// TODO: Include packages needed for this application
const inquirer = require('inquirer');

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
    response.credits === 'koby'
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
