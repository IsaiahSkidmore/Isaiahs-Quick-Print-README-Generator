// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        tyoe: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.'
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project.'
    },

    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions for your project.'
    },

    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None']
    },

    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.'
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.'
    }
];

// TODO: Create a function to write README file
function writeToFile(answers) {
   return `
# ${answers.title}


## Description
${answers.description}


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation
${answers.installation}


## Usage
${answers.usage}


## License
This project is licensed under the ${answers.license} license.


## Contributing
${answers.contributing}


## Tests
${answers.tests}


## Questions
If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at [${answers.github}](https://github.com/${answers.github}/).
`;
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        fs.writeFile("README.md", writeToFile(answers), (err) => {
            if (err) {
                return console.log(err);
            }
            console.log("Successfully wrote to README.md");
        });
    });
 }
 

// Function call to initialize app
init();
