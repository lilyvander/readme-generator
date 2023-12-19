// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        name: 'install', // Corrected the typo
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Input the usage info.',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Input names of the contributors and guidelines.',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Input the testing instructions.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license did you use for the project?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your github user name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
])
.then((answers) => {
    createAndWriteFile(answers);
});

// TODO: Create a function to write README file
const fileName = 'README.md';
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log(`File ${fileName} created successfully!`);
        }
    });
}

function createAndWriteFile(answers) {
    const content = `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.install}

## Usage
${answers.usage}

## Contribution
${answers.contribute}

## Testing
${answers.testing}

## License
This project is licensed under the ${answers.license} license.

## Contact
GitHub: [${answers.username}](https://github.com/${answers.username})
Email: ${answers.email}
`;
    writeToFile(fileName, content); // Call the writeToFile function here
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();