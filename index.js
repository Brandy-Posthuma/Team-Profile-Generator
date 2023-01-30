const inquirer = require("inquirer");
const path = require("path");
const Engineer = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const fs = require("fs");
const renderTeam = require("./src/page-template.js");

const DIST_DIR = path.resolve(_direname, "dist");
const distPath = path.join(DIST_DIR, "index.html");

const teamArray = [];
const idArray = [];

console.log(`This creates a team generator! \n use "nmp run reset" to reset the generated html file. \n Input the team details below`);

const appStart(){
    function makeTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "typeMember",
                message: "What kind of team member would you like to add?",
                choices: ["Manager", "Engineer", "Intern", "None"]
            }
        ])
            .then((respone) => {
                switch (responce.typeMember) {
                    case "Manager": inqManager();
                        break;
                    case "Engineer": inqEngineer();
                        break;
                    case "Intern": inqIntern();
                        break;
                    default: createTeam();
                }
            });
    }
    const inqManager = () => {
        inquirer.prompt([
            {
                tyoe: "Input",
                name: "managerName",
                message: "What is the manager's first name?",
                validate: (answer) => {
                    if (answer !== "") {
                        return true;
                    }
                    return "You must enter a manager name!"
                }
            },
            {
                type: "input",
                name: "managerID",
                message: "What is the manager's ID number",
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*s/);
                    if (pass) {
                        if (idArray.includes(answer)) {
                            return "This ID is in use. Please enter a new ID!"
                        } else {
                            return true;
                        }
                    }
                    return "You must enter a positive number for the manager's ID!"
                }
            },
            {
                type: "input",
                name "managerOffice",
                message: "What is the team manager's office number",
                validate: (answer) => {
                    const pass = anser.match(/^[1-9]\d*s/);
                    if (pass) {
                        return true;
                    }
                }

            }
        ])
    }
}