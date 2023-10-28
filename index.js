const inquirer = require('inquirer');
const fs = require('fs').promises;
const { Triangle, Square, Circle } = require('inquirer');

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like?',
        choices: ['Square', 'Triangle', 'Circle']
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like?'
    },
    {
        type: 'input',
        name: 'text',
        message: 'Which three charachters do you want?'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What text color would you like?'
    }
]

function generateSvg(data) {
    if (data.shape === 'Square') {
        const shape = new Square(data.textColor, data.color, data.text)
        return shape.render()
    }
    // more shapes 
}
// making a render for each shape each needs a slightly diff attribute 
function init() { 
    inquirer.prompt(questions).then(data => {
    fs.writeFile('./examples/shape.svg', generateSvg(data)).then(err => {
        err ? console.error(err) : console.log('Readme was successful!')
    })
    })
};

// Function call to initialize app
init();