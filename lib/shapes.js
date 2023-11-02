class Shape {
    constructor(textColor, color, text) {
        this.textColor = textColor;
        this.color = color;
        this.text = text; 
    }
}

class Triangle extends Shape {
    constructor(textColor, color, text) {
     super(textColor, color, text)  
    }
    render() {
        return `
        <svg version="1.1" width="500" height="300" xmlns="http://www.w3.org/2000/svg">

        <triangle cx="150" cy="100" r="80" fill="${this.color}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
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
        <svg version="1.1" width="500" height="300" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.color}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
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
        <svg version="1.1" width="500" height="300" xmlns="http://www.w3.org/2000/svg">

        <square cx="150" cy="100" r="80" fill="${this.color}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>
      
        `
}
}
module.exports = { Triangle, Circle, Square }