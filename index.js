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
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
