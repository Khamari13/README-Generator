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
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
