// using fs and inquirer and each constructor class from my shapes.js
const inquirer = require('inquirer');
const fs = require('fs').promises;
const { Triangle, Circle, Square } = require('./lib/shapes.js');

// questions array that will ask the user a series of questions in the terminal
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

// a function that takes data and uses an operator selctor to get the appropriate shape
function generateSvg(data) {
    if (data.shape === 'Triangle') {
        const shape = new Triangle(data.textColor, data.color, data.text);
        return shape.render();
    } else if (data.shape === 'Circle') {
        const shape = new Circle(data.textColor, data.color, data.text);
        return shape.render()
    } else if (data.shape === 'Square') {
        const shape = new Square(data.textColor, data.color, data.text);
        return shape.render();
    }
}
// making a render for each shape each needs a slightly diff attribute 
function init() {
    try {
        inquirer.prompt(questions).then(data => {
            fs.writeFile('./examples/shape.svg', generateSvg(data)).then(() => {
                console.log('Logo was successful');
            }).catch(err => {
                throw err; // if an error happens while writing the file throw it
            });
        }).catch(err => {
            throw err; // if an error happens during prompt throw it
        });
    } catch (err) {
        console.error(err); // handles the error here
    }
};


// Function call to initialize app
init();