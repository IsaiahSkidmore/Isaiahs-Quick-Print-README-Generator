// TODO: Create a function that returns a license badge based on which license is passed in
import inquirer from 'inquirer';
import fs from 'fs';

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'GNU GPLv3') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'Apache 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (license === 'ISC') {
    return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'GNU GPLv3') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'ISC') {
    return 'https://opensource.org/licenses/ISC';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


const generateMarkdown = (answers) => {
  return `
# ${answers.title} ${renderLicenseBadge(answers.license)}

## Description
${answers.description}

## Installation
\`\`\`
${answers.installation}
\`\`\`

## Usage
\`\`\`
${answers.usage}
\`\`\`

## License
This project is licensed under the ${answers.license} license.

## Contributors
${answers.contributors}

## Contact
If you have any questions, please reach out to ${answers.contact}.
`;
}

// Export the generateMarkdown function
export default generateMarkdown;