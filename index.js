const inquirer = require('inquirer');
const fs = require('fs').promises;
const { Triangle, Circle, Square } = require('./lib/shapes.js');

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like?',
        choices: ['Triangle', 'Circle', 'Square']
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like?'
    },
    {
        type: 'input',
        name: 'text',
        message: 'Which three characters do you want?'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What text color would you like?'
    }
]

function generateSvg(data) {
    if (data.shape === 'Triangle') {
        const shape = new Triangle(data.textColor, data.color, data.text);
        return shape.render();
    } else if (data.shape === 'Circle') {
        const shape = new Circle(data.textColor, data.color, data.text);
        return shape.render() 
    } else if (data.shape === 'Square') {
        const shape = new Square(data.textColor, data.color, data.text);
        return shape.render(); // calling a render that doesnt exist

    // more shapes 
}}
// making a render for each shape each needs a slightly diff attribute 
function init() { 
    inquirer.prompt(questions).then(data => {
    fs.writeFile('./examples/shape.svg', generateSvg(data)).then(err => {
        err ? console.error(err) : console.log('Logo was successful')
    })
    })
};

// Function call to initialize app
init();