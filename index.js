// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function to write README file
const fileName = 'README.md';
function writeToFile(fileName, inputs) {
    fs.writeFile(fileName, inputs, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log(`File ${fileName} created successfully!`);
        }
    });
}

function createAndWriteFile(answers) {
    let badge = '';
    let licenseDescript = '';

    let selectedLicense;

    if (Array.isArray(answers.license)) {
        selectedLicense = answers.license[0];
    } else {
        selectedLicense = answers.license;
    }

    switch (selectedLicense.toLowerCase()) {
        case 'mit':
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            licenseDescript = 'This project is licensed under the [MIT License](LICENSE).';
            break;
        case 'apache':
            badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            licenseDescript = 'This project is licensed under the [APACHE License](LICENSE).';
            break;
        case 'mozilla':
            badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            licenseDescript = 'This project is licensed under the [Mozilla License](LICENSE).';
            break;
        case 'eclipse':
            badge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
            licenseDescript = 'This project is licensed under the [Eclipse License](LICENSE).';
            break;
        default:
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            licenseDescript = 'This project is licensed under the [MIT License](LICENSE).';
            break;
    }
    
    const fileContent = `
# ${answers.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [URLS](#urls)
- [Contribution](#contribution)
- [Testing](#testing)
- [License](#license)
- [Contact](#contact)

## Description
${answers.description}

## Installation
${answers.install}

## Usage
${answers.usage}

## URLS and Links
* ${answers.urls}
* ${answers.otherUrls}

## Contribution
* ${answers.contribute}
* ${answers.contribute}

## Testing
${answers.testing}

## License
${badge}

${licenseDescript}

## Contact
GitHub: [${answers.username}](https://github.com/${answers.username})
Email: ${answers.email}
`;

    writeToFile(fileName, fileContent);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Input a project description.',
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the installation instructions?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Input the usage info.',
        },
        {
            type: 'input',
            name: 'urls',
            message: 'What URLs do you want to include in the project?',
        },
        {
            type: 'input',
            name: 'otherUrls',
            message: 'Any other links you want to add?',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Who contributed?',
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Input the testing instructions.',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What licenses did you use for this project?',
            choices: [
                'MIT', 'Apache 2.0 License', 'Mozilla Public License 2.0', 'Eclipse Public License 1.0',
            ],
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
    ])
    .then((answers) => {
        createAndWriteFile(answers);
    });
}

init();