// created a shape class that i can extend other shapes to with super 
class Shape {
    constructor(textColor, color, text) {
        this.textColor = textColor;
        this.color = color;
        this.text = text;
    }
}
// each class of shape is being generated here 
class Triangle extends Shape {
    constructor(textColor, color, text) {
        super(textColor, color, text)
    }
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150,15 50,185 250,185" fill="${this.color}" />
      
        <text x="150" y="100" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>
      
        `
    }
}

class Circle extends Shape {
    constructor(textColor, color, text) {
        super(textColor, color, text)
    }
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="90" fill="${this.color}" />
      
        <text x="150" y="110" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>
      
        `
    }
}

class Square extends Shape {
    constructor(textColor, color, text) {
        super(textColor, color, text)
    }
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <rect x="50" y="50" width="200" height="200" fill="${this.color}" />
          
            <text x="150" y="125" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
          
        </svg>
        `;
    }
}

// exporting my shape classes 
module.exports = { Triangle, Circle, Square }