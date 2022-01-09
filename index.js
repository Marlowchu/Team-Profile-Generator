const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./generateHtml');


const questions = []


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        } else
            console.log("Generating README...");
    });
};


function init() {
    inquirer.prompt(questions)
    .then(answers => {
        const htmlInfo = generateHtml(answers);
        writeToFile('./utils/Team.html', htmlInfo);
    })
    .catch(err => { console.log(err)});
}


init ();