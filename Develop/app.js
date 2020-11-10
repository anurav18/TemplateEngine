const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//Create Validation rules for user Inputs

const validateName = function(name){
  if(name === ""){
      console.log("\n Enter a Name");
      return false;
  }
  return true;
}

const validateEmail = function(emailId){
    const validString = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailId.toLowerCase());
    if(!validString || emailId === "")
    {
        console.log("\n enter a valid email");
        return false;
    }
    return true;

}

const validategitHub = function(gitHubId){
    if(gitHubId === ""){
        console.log("\n Enter your github id");
        return false;
    }
    return true;
}

const validateSchool = function(schoolName){
    if(schoolName === ""){
        console.log("\n Enter a SchoolName");
        return false;
    }
    return true;
}

const validateOfficeNumber = function(officeNumber){
    if(officeNumber === ""){
        console.log("\n Enter a SchoolName");
        return false;
    }
    return true;
}

//array containing employee objects

const employees = [];


const managerQ = [
{
    type: "input",
    message: "Enter the name of the Manager",
    name: "name",
    validate: validateName

},
{
    type: "input",
    message: "Enter the id of the Manager",
    name: "id"

},
{
    type: "input",
    message: "Enter the email Id of the Manager",
    name: "emailId",
    validate: validateEmail

},
{
    type: "input",
    message: "Enter Manager's Office Number",
    name: "officeNumber",
    validate: validateOfficeNumber

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
        name: "name",
        validate: validateName
    
    },
    {
        type: "input",
        message: "Enter the id of the Engineer",
        name: "id"
    
    },
    {
        type: "input",
        message: "Enter the email Id of the Engineer",
        name: "emailId",
        validate: validateEmail
    
    },
    {
        type: "input",
        message: "Enter Engineer's gitHub userName",
        name: "gitHubId",
        validate: validategitHub

    }

];

const InternQ =[
    {
        type: "input",
        message: "Enter the name of the Intern",
        name: "name",
        validate: validateName
    
    },
    {
        type: "input",
        message: "Enter the id of the Intern",
        name: "id"
    
    },
    {
        type: "input",
        message: "Enter the email Id of the Intern",
        name: "emailId",
        validate: validateEmail
    
    },
    {
        type: "input",
        message: "Enter Intern's School Name",
        name: "schoolName",
        validate: validateSchool

    }
];

//Prompt with Manager's questions
function ManagerQue(){
inquirer.prompt(managerQ).then(response => {
const Managerdetails = new Manager(response.name,response.id,response.emailId, response.officeNumber);
employees.push(Managerdetails);
chooseEmployeeType();
})
}

function chooseEmployeeType(){
    inquirer.prompt(teammemberType).then(response => {
        switch(response.membertype)
        {
            case "Engineer":
                inquirer.prompt(EngineerQ).then(response => {
                    const engineerDetails = new Engineer(response.name,response.id,response.emailId,response.gitHubId);
                    employees.push(engineerDetails);
                    chooseEmployeeType();

                })
                break;

            case "Intern":
                    inquirer.prompt(InternQ).then(response => {
                        const internDetails = new Intern(response.name,response.id,response.emailId,response.schoolName);
                    employees.push(internDetails);
                    chooseEmployeeType();
    
                })
                break;
                
            case "I don't want to add any more team members":
                fs.access(OUTPUT_DIR, err => {
                    if (err) {
                        fs.mkdirSync(OUTPUT_DIR, (err) => {
                            if (err) throw err;    
                        });
                        writeHtml();
                    } else {
                        writeHtml();
                    }
                });        
                

        }
    })
};

//Write to HTML file

function writeHtml() {
    const renderhtml = render(employees);
    fs.writeFile(outputPath, renderhtml, (err) => {
        if (err) throw err;
        }); 
}

ManagerQue();

