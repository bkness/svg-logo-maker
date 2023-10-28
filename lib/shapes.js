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
}
class Circle extends Shape {
    constructor(textColor, color, text) {
     super(textColor, color, text)  
    }
}
class Square extends Shape {
    constructor(textColor, color, text) {
     super(textColor, color, text)  
    }
}

module.exports = {Triangle, Circle, Square}