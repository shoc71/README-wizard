// Imports
const inquirer = require('inquirer');
const fs = require('fs');

// License link mapping
const licenseLinks = {
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'Boost': 'https://opensource.org/licenses/Boost-1.0',
    'BSD 2-Clause': 'https://opensource.org/licenses/BSD-2-Clause',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    'Creative Commons': 'https://creativecommons.org/licenses/',
    'Eclipse': 'https://opensource.org/licenses/EPL-1.0',
    'GNU': 'https://www.gnu.org/licenses/',
    'GPL 3.0': 'https://opensource.org/licenses/GPL-3.0',
    'IBM': 'https://opensource.org/licenses/IBM',
    'MIT': 'https://opensource.org/licenses/MIT',
    'Mozilla': 'https://opensource.org/licenses/MPL-2.0',
    'Open Data Commons': 'https://opendatacommons.org/licenses/',
    'Perl': 'https://opensource.org/licenses/Artistic-2.0',
    'SIL': 'https://opensource.org/licenses/SIL-OFL-1.1',
    'Unlicense': 'http://unlicense.org/',
    'WTFPL': 'http://www.wtfpl.net/',
    'Zlib': 'https://opensource.org/licenses/Zlib',
    'None': '',
};

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
            'Apache 2.0',
            'Boost',
            'BSD 2-Clause',
            'BSD 3-Clause',
            'Creative Commons',
            'Eclipse',
            'GNU',
            'GPL 3.0',
            'IBM',
            'MIT',
            'Mozilla',
            'Open Data Commons',
            'Perl',
            'SIL',
            'Unlicense',
            'WTFPL',
            "Zlib",
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

        const licenseLink = answers.license !== "None" ?
            `[![License](${licenseLinks[answers.license]})](${licenseLinks[answers.license]})` : '';

        const readmeContent = `# ${answers.title}
written by ${answers.username};
Thanks to the following contributors []

## Description
${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## License
This project is licensed under the ${licenseLink}.

## Questions
For any questions or concerns, please email ${answers.email}

Youtube Tutorial: [Click Unlisted Video Here](#)

Deployed Webpage: https://${answers.username}.github.io/${answers.title}/

GitHub Profile: [${answers.username}](https://github.com/${answers.username})

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
