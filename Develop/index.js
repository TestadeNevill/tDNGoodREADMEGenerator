
//Loading required Modules
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Provide a detailed description of your project"
  },
  {
    type: "list",
    name: "license",
    message: "Which open source license did you choose?",
    choices: ["MIT", "APACHIE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
    default: "npm install"
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use."
  },
  {
    type: "input",
    name: "contributing",
    message: "Name collaborators"
  },
  {
    type: "input",
    name: "test",
    message: "run test"
  },

  //rest of the questions here....

];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((inquireResponses) => {
    writeToFile("README.md", generateMarkdown({ ...inquireResponses }));
  })
}

// function call to initialize program
init();
