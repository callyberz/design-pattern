// abstract factory pattern - (creational pattern)
// create objects without `new` keyword - using a method to create objects in a factory class

// interface for the abstract factory
export interface AbstractFactory {
  createProductA: () => AbstractProductA;
  createProductB: () => AbstractProductB;
}

interface AbstractProductA {
  usefulFunctionA: () => string;
}

interface AbstractProductB {
  usefulFunctionB: () => string;
}

// concrete factory
// returns concrete product by using the `new` keyword to create the object
export class ConcreteFactory1 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }
  createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}

export class ConcreteFactory2 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }
  createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}

// concrete products
class ConcreteProductA1 implements AbstractProductA {
  usefulFunctionA(): string {
    return 'The result of the product A1.';
  }
}

class ConcreteProductA2 implements AbstractProductA {
  usefulFunctionA(): string {
    return 'The result of the product A2.';
  }
}

class ConcreteProductB1 implements AbstractProductB {
  usefulFunctionB(): string {
    return 'The result of the product B1.';
  }
}

class ConcreteProductB2 implements AbstractProductB {
  usefulFunctionB(): string {
    return 'The result of the product B2.';
  }
}

// client code
console.log('Client: Testing client code with the first factory type...');
const factory = new ConcreteFactory1();
const productA = factory.createProductA();
const productB = factory.createProductB();
console.log(productA.usefulFunctionA());
console.log(productB.usefulFunctionB());
