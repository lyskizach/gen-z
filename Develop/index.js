// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('/Users/lyskizach/Desktop/Bootcamp/Module 9 Challenge/gen-z/Develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
}, {
    type: 'input',
    message: 'Please enter a detailed description of your project',
    name: 'description'
}, {
    type: 'input',
    message: 'What are the installation instructions for this project?',
    name: 'installInstructions'
}, {
    type: 'input',
    message: 'What is the intended use of this project?',
    name: 'usage'
}, {
    type: 'input',
    message: 'What are the contribution guidelines for this project?',
    name: 'contribution'
}, {
    type: 'list',
    message: 'What is the license being used for this project, if any?',
    name: 'license',
    choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License'],
}, {
    type: 'input',
    message: 'What are the test instructions?',
    name: 'tests'
}, {
    type: 'input',
    message: 'What is your Github username?',
    name: 'username'
}, {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
}]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        err ? console.log(err) : console.log('Success!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
            writeToFile(fileName, generateMarkdown(data));
        })
}

// Function call to initialize app
init();
