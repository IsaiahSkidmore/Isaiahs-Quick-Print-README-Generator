// TODO: Include packages needed for this application

import inquirer from "inquirer";

import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a brief description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide guidelines for how to contribute to your project.",
    },
    {
        type: "input",
        name: "tests",
        message: "Provide examples on how to run tests.",
    },
    {
        type: "list",
        name: "license",
        message: "Please provide the license for your project.",
        choices: ["MIT", "Apache", "GPL"],
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];


// TODO: Create a function to write README file

    
// TODO: Create a function to initialize app


// Function call to initialize app
init();
