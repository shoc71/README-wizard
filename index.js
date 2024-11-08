// Imports
const inquirer = require('inquirer');
const fs = require('fs');

// user_input prompted by CLI
const questions = [
    {
        type: 'input',
        name: 'username',
        message: "What's your username?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What's your email?",
    },
    {
        type: 'input',
        name: 'title',
        message: "What's the title of the project?",
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
        type: 'list',
        name: 'license',
        message: 'Select the license for this project',
        choices: [
            'MIT',
            'Apache 2.0',
            'GPL 3.0',
            'BSD 3-Clause',
            'None',
        ],
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

// Function simplifying console.log into a simple print statement
const print = (string) => {console.log(`${string}`)}

// Function to initialize the app
function main() {
    inquirer.prompt(questions).then((answers) => {
    const readmeContent = `# ${answers.title}
written by ${answers.username}

## Description
${answers.description}

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Questions](#Questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## License
This project is licensed under the ${answers.license} License.

## Questions
For any questions or concerns, please email ${answers.email}.
`; writeToFile('README.md', readmeContent); })
.catch((err) => {
    if (err.isTtyError) {
        print("Prompt couldn't be rendered because of an internal issue.")
    } else {
        print("Something else went wrong.")
    }
}); 
}

// Function call to initialize app init();
main()