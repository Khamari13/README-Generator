const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

const questions = [
    {
        type: "input",
        name: "github",
        message: "Enter your Github username"
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email"
      },
      {
        type: "input",
        name: "projectURL",
        message: "Enter your projects URL"
      },
      {
        type: "input",
        name: "title",
        message: "Enter your project's name"
      },
      {
        type: "input",
        name: "description",
        message: "Write a short description of your project"
      },
      {
          type: "list",
          name: "license",
          message: "What kind of license should your project have?",
          choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
      },
      {
          type: "input",
          name: "installation",
          message: "What command should be run to install dependencies?",
          default: "npm i"
      },
      {
          type: "input",
          name: "test",
          message: "What command should be run to begin the tests",
          default: "npm test"
      },
      {
          type: "input",
          name: "usage",
          message: "describe the usage of the repo",
      },
      {
          type: "input",
          name: "contributing",
          message: ""
      }

      
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
