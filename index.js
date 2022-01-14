const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/generateHtml');




// const questions = []




function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        } else
            console.log("Generating HTML...");
    });
};


// function init() {
//     inquirer.prompt(questions)
//     .then(answers => {
//         const htmlInfo = generateHtml(answers);
//         writeToFile('./utils/Team.html', htmlInfo);
//     })
//     .catch(err => { console.log(err)});
// }


// init ();


// const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


let team = []

let role = "Manager"

function start () {
    console.log ("Enter Manager information")

    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Enter name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter office number?"
        }
    ])
        .then (answer => {
            const manager = new Manager (answer.name, answer.id, answer.email, answer.officeNumber)

            // createCard(manager)
            team.push (createCard(manager));

            moreQuestions ()

            // console.log("team member added");
            // console.log(team[0]);
        })
      
        .catch(err => { console.log(err)});

}

function createCard (member) {

    console.log("inside function")

switch (role) {
    case 'Manager':
      return `<div class = "col-3 text-center" style="height: 200px; border-style: double; margin-left: 20px; margin-bottom: 20px;">
      <div style="background-color: steelblue; border-style: solid;">
          <h2>${member.name}</h2>
          <h3>${role}</h3>
      </div>
      <div>
          <div>ID: ${member.id}</div>
          <a href="mailto:${member.email}">Email: ${member.email}</a>
          <div>Office #: ${member.officeNumber}</div>
      </div>
  </div>`
      break;
    case 'Engineer':
      return `<div class = "col-3 text-center" style="height: 200px; border-style: double; margin-left: 20px; margin-bottom: 20px;">
      <div style="background-color: lightgreen; border-style: solid;">
          <h2>${member.name}</h2>
          <h3>${role}</h3>
      </div>
      <div>
          <div>ID: ${member.id}</div>
          <a href="mailto:${member.email}">Email: ${member.email}</a> <br>
          <a href="https://github.com/${member.github}" target="_blank">Github: ${member.github}</a>
      </div>
  </div>`      
  break;
    case 'Intern':
      return `<div class = "col-3 text-center" style="height: 200px; border-style: double; margin-left: 20px; margin-bottom: 20px;">
      <div style="background-color: yellow; border-style: solid;">
          <h2>${member.name}</h2>
          <h3>${role}</h3>
      </div>
      <div>
          <div>ID: ${member.id}</div>
          <a href="mailto:${member.email}">Email: ${member.email}</a>
          <div>School: ${member.school}</div>
      </div>
  </div>`
      break;
  }

}

start ()

function moreQuestions () {

   inquirer
    .prompt([
        {
            type: 'list',
            name: 'member',
            message: "Choose the next type of employee to add.",
            choices: ["Engineer", "Intern", "All done"]
        }
    ])
    .then (answer => {
      
      
        switch (answer.member) {
            case "Engineer":
               return engineerQuestions ()
              
              break;
            case "Intern":
                internQuestions ()
              
              break;
            case "All done":
                const htmlInfo = generateHtml(team);
                writeToFile('./dist/Team.html', htmlInfo);
              break;
           
          }

    })
  
    .catch(err => { console.log(err)});

}




function engineerQuestions () {

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter name?"
        },
        {
            type: "input",
            name: 'id',
            message: "Enter employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter GitHub username?"
        }
    ])

    .then (answer => {
      
        const engineer = new Engineer (answer.name, answer.id, answer.email, answer.github);

        role = "Engineer"

        team.push (createCard(engineer));

        moreQuestions ()
    })
        .catch(err => { console.log(err)});

}


function internQuestions () {

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter name?"
        },
        {
            type: "input",
            name: 'id',
            message: "Enter employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter email address?"
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter school?"
        }
    ])

    .then (answer => {
      
        const intern = new Intern (answer.name, answer.id, answer.email, answer.school);

        role = "Intern"

        team.push (createCard(intern));

        moreQuestions ()
    })
        .catch(err => { console.log(err)});
        
}