import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

const questions = [
    {
    type: "input",
    name: "title",
    message : "Please enter a title for your project."
    },
    {
    type: "input",
    name: "description", 
    message: "Please enter a description for your project."
    },
    {
    type: "input",
    name: "installation",
    message: "Please enter installation details for your project."
    },
    {
    type: "input",
    name: "usage",
    message: "Please enter information about the usage of your project."
    },
    {
    type: "input",
    name: "contributions",
    message: "Please enter the contribution guidelines of your project."
    },
    {
    type: "input",
    name: "test",
    message: "Please enter test instructions for your project."
    },
    {
    type: "input",
    name: "email",
    message: "Please enter your email."
    },
    {
    type: "input",
    name: "github",
    message: "Please enter your GitHub username."
    },
    {
    type: "list",
    name: "license",
    message: "Please select a license for your project",
    choices: ["None", "MIT", "Apache-2.0", "GPL-3.0"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err ? console.log(err) : console.log("success!"));
        console.log(`Successfully wrote to ${fileName}`);
    });
}

function init() {
    return inquirer.
        prompt(questions).then((answers) => {
            writeToFile("README.md", (generateMarkdown(answers)));
        })
}

init();
