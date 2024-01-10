// factory method
// a simple interface for creating objects
// abstract factory: a factory of factories: have a concrete factory that creates all related objects
// factory method: a factory of classes: have a concrete factory that creates a single class

// Define the Shape interface
interface Shape {
  draw(): void;
}

// Concrete implementations of Shape
class Circle implements Shape {
  draw() {
    console.log('Drawing a circle');
  }
}

class Square implements Shape {
  draw() {
    console.log('Drawing a square');
  }
}

// Factory class
class ShapeFactory {
  createShape(shapeType: string): Shape {
    if (shapeType === 'circle') {
      return new Circle();
    } else if (shapeType === 'square') {
      return new Square();
    }
    throw new Error('Invalid shape type');
  }
}

// Usage
const factory = new ShapeFactory();
const circle = factory.createShape('circle');
circle.draw(); // Output: Drawing a circle

const square = factory.createShape('square');
square.draw(); // Output: Drawing a square
