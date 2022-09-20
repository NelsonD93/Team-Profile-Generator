const inquirer = require('inquirer');
const Manager = require("./Lib/manager.js");
const Engineer = require("./Lib/engineer.js")

const employeeArray = [];

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        }
    ]).then(answers => {
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        console.log(newManager)
        employeeArray.push(newManager);
        mainMenu();
    })
}

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the manager's github profile?"
        }
    ]).then(answers => {
        const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        console.log(newEngineer)
        employeeArray.push(newEngineer);
        mainMenu();
    })
}

function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?"
        }
    ]).then(answers => {
        const newintern = new intern(answers.name, answers.id, answers.email, answers.github)
        console.log(newintern)
        employeeArray.push(newintern);
        mainMenu();
    })
}

function mainMenu() {
    inquirer.prompt({
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
            "Add Engineer",
            "Add an Intern",
            "Finish"
        ]
    }).then(answer => {
        if(answer.choice == "Add Engineer") {
            createEngineer()
        } else if (answer.choice == "Add an Intern") {
            createIntern()
        } else {
            // call the function that will generate the HTML using the employeeArray that you have filled so far
            
        }
    })
}

createManager();