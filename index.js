// imports
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/generateHtml');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// array to hold team members
let team = []


start ()

// start of program, Manager prompt 
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
            // create new manager opject with answers from user
            const manager = new Manager (answer.name, answer.id, answer.email, answer.officeNumber)

            // Push manger infor to function that creates html to make card
            team.push (createCard(manager));

            // ask user if they have more team members or are they done
            moreQuestions ()

        })
      
        .catch(err => { console.log(err)});
}


// Functions to create Html container with the user info.
function createCard (member) {

switch (member.getRole()) {
    case 'Manager':
      return `<div class = "col-3 text-center" style="height: 200px; border-style: double; margin-left: 20px; margin-bottom: 20px;">
      <div style="background-color: steelblue; border-style: solid;">
          <h2>${member.name}</h2>
          <h3>${member.getRole()}</h3>
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
          <h3>${member.getRole()}</h3>
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
          <h3>${member.getRole()}</h3>
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


// Funtion to ask user if they have more team members or are they done
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
      
    //   switch statement to handle user choice
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


// function for specific questons for specific team member
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

        team.push (createCard(engineer));

        moreQuestions ()
    })
        .catch(err => { console.log(err)});

}

// function for specific questons for specific team member
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

        team.push (createCard(intern));

        moreQuestions ()
    })
        .catch(err => { console.log(err)});
        
}

// funtion to generate Html page
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        } else
            console.log("Generating HTML...");
    });
};

