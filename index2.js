const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'title',
        memo: "what's the title of the project?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What is the license for your project?',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log('README.md has been generated!');
    });
};
  

// Function to initialize the app
function init() {
    inquirer.prompt(questions).then((answers) => {
    const readmeContent = `
${answers.title}
Description
${answers.description}

Installation
${answers.installation}

Usage
${answers.usage}

Contribution
${answers.contribution}

License
${answers.license} `; writeToFile('README.md', readmeContent); }); }

// Function call to initialize app init();
  
init()