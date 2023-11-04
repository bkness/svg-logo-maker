const { Triangle, Circle, Square } = require('./lib/shapes.js');
// const { default: ScreenManager } = require("inquirer/lib/utils/screen-manager")pull into this file path and test each class with unit createTestScheduler, apply ScreenManager,e logic for unit testing with each classesm, test so when circle is called its equal to the variable that is called ex: testjs = x and compare to the variable that is called 
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

test("Should rendewr a red triangle with black text BMK", () => {
    const shape = new Triangle("black", "BMK", "red");
    expect(shape.render()).toEqual(`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150,15 50,185 250,185" fill="red" />
  
    <text x="150" y="100" font-size="30" text-anchor="middle" fill="black">BMK</text>
  
  </svg>
  
    `)
}) // making assertion on what this function is supposed to do  