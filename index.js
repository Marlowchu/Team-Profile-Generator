const inquirer = require('inquirer');
// const fs = require('fs');
// const generateHtml = require('./generateHtml');




// const questions = []




// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, function (err) {
//         if (err) {
//             return console.log(err);
//         } else
//             console.log("Generating README...");
//     });
// };


// function init() {
//     inquirer.prompt(questions)
//     .then(answers => {
//         const htmlInfo = generateHtml(answers);
//         writeToFile('./utils/Team.html', htmlInfo);
//     })
//     .catch(err => { console.log(err)});
// }


// init ();


const Employee = require('./employee');
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');


let team = []

let role = "manager"

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
      
        // .catch(err => { console.log(err)});

}

function createCard (member) {

    console.log("inside function")

switch (role) {
    case 'manager':
      return `<div class = "col-3" style="width: 250px; height: 250px; background-color: springgreen; margin-left: 20px; margin-bottom: 20px;">
      <div style="background-color: steelblue;">
          <h2>${member.name}</h2>
          <h3>member</h3>
      </div>
      <div>
          <div>ID: ${member.id}</div>
          <div>Email: ${member.email}</div>
          <div>Office #: ${member.officeNumber}</div>
      </div>
  </div>`
      break;
    case 'engineer':
      return `<div class = "col-3" style="width: 250px; height: 250px; background-color: springgreen; margin-left: 20px; margin-bottom: 20px;">
      <div style="background-color: steelblue;">
          <h2>${member.name}</h2>
          <h3>member</h3>
      </div>
      <div>
          <div>ID: ${member.id}</div>
          <div>Email: ${member.email}</div>
          <div>Office #: ${member.github}</div>
      </div>
  </div>`      
  break;
    case 'intern':
      return `<div class = "col-3" style="width: 250px; height: 250px; background-color: springgreen; margin-left: 20px; margin-bottom: 20px;">
      <div style="background-color: steelblue;">
          <h2>${member.name}</h2>
          <h3>member</h3>
      </div>
      <div>
          <div>ID: ${member.id}</div>
          <div>Email: ${member.email}</div>
          <div>Office #: ${member.school}</div>
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

        role = engineer

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
            name: 'github',
            message: "Enter school?"
        }
    ])

    .then (answer => {
      
        const intern = new Intern (answer.name, answer.id, answer.email, answer.school);
        team.push (createCard(intern));

        role = intern

        moreQuestions ()
    })
        .catch(err => { console.log(err)});
        
}