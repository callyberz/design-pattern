// using Object.create for prototype chaining
// you can get the parent properties and methods from the child object
// more on https://www.callyberz.com/posts/you-dont-know-js

const userProfile = {
  name: 'cally',
  age: 30,
  getAge() {
    return this.age;
  }
};

// creating a new object with prototype chaining using Object.create
const user = Object.create(userProfile);
console.log(user);
console.log(user.name);
console.log(user.getAge());

// ----------------------------------------------------------
// in TypeScript, you can use interface to define the prototype by extending the interface
// the class that implements the interface must implement all the methods from the interface
// i.e. User class must implement getName(), clone(), toString() methods
export interface PrototypeInterface {
  clone(): PrototypeInterface;
  toString(): string;
}

export interface UserProfile extends PrototypeInterface {
  getName(): string;
}

// User class implements UserProfile interface
// it must implement all the methods from the interface
class User implements UserProfile {
  constructor(private name: string, private age: number) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  clone() {
    return new User(this.name, this.age);
  }

  toString() {
    return `User: ${this.name}, ${this.age}`;
  }
}

const user1 = new User('cally', 30);
console.log(user1.toString());
const clonedUser = user1.clone();
