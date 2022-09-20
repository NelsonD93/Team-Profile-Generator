const inquirer = require('inquirer');
const Manager = require("./Lib/manager");

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

function mainMenu() {
    inquirer.prompt({
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
            "Add Engineer",
            "Add an Intern",
            "Finish Building"
        ]
    }).then(answer => {
        if(answer.choice == "Add Engineer") {
            // you call the createEngineer 
        } else if (answer.choice == "Add an Intern") {
            // createIntern
        } else {
            // call the function that will generate the HTML using the employeeArray that you have filled so far
            
        }
    })
}

createManager();