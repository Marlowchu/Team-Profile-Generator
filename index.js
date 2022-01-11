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


function start () {
    console.log ("Enter Member team")

    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        }
    ])
        .then (answer => {
            const manager = new Manager (answer.name, answer.id, answer.email, answer.officeNumber)

            // createCard(manager)
            team.push (createCard(manager));

            // console.log("team member added");
            // console.log(team[0]);
        })


}

function createCard (member) {

    console.log("inside function")

   

switch (member) {
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