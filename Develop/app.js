const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");


//array containing employee objects

const employees = [];



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

//Questions based on the Role, each declared in an array

const managerQ = [
{
    type: "input",
    message: "Enter the name of the Manager",
    name: "name"

},
{
    type: "input",
    message: "Enter the id of the Manager",
    name: "id"

},
{
    type: "input",
    message: "Enter the email Id of the Manager",
    name: "emailId"

},
{
    type: "input",
    message: "Enter Manager's Office Number",
    name: "number"

}
];

const teammemberType = {
    type: "list",
    message: "Which type of team member would you like to add?",
    name: "membertype",
    choices: [
        "Engineer",
        "Intern",
        "I don't want to add any more team members"
    ]
};

const EngineerQ = [
    {
        type: "input",
        message: "Enter the name of the Engineer",
        name: "name"
    
    },
    {
        type: "input",
        message: "Enter the id of the Engineer",
        name: "id"
    
    },
    {
        type: "input",
        message: "Enter the email Id of the Engineer",
        name: "emailId"
    
    },
    {
        type: "input",
        message: "Enter Engineer's gitHub userName",
        name: "gitHubId"

    }

];

const InternQ =[
    {
        type: "input",
        message: "Enter the name of the Intern",
        name: "name"
    
    },
    {
        type: "input",
        message: "Enter the id of the Intern",
        name: "id"
    
    },
    {
        type: "input",
        message: "Enter the email Id of the Intern",
        name: "emailId"
    
    },
    {
        type: "input",
        message: "Enter Intern's School Name",
        name: "schoolName"

    }
];
