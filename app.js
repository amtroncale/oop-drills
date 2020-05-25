// Object Literals, Pseudo Classes and methods
let person1 = {
    name: 'Adam',
    sayHello: function() {
        console.log('Hello! My name is ');
    }
};

person1.sayHello();

let person2 = {
    name: 'Jessica',
    sayHello: function() {
        console.log('Hello! My name is ');
    }
};

person2.sayHello();

let person3 = {
    name: 'Maverick',
    sayHello: function() {
        console.log('Hello! My name is ');
    }
};

person3.sayHello();

let person4 = {
    name: 'Luke',
    sayHello: function() {
        console.log('Hello! My name is ');
    }
};

person4.sayHello();

let person5 = {
    name: 'Ben',
    sayHello: function() {
        console.log('Hello! My name is ');
    }
};

person5.sayHello();

// Create a constructor function that will take a name, city, and age. (Remember, pseudo classes look like functions but are named with starting with a capital letter ex: function Example() null).
function Person (name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
};

Person.prototype.sayHello = function() {
    console.log('Hey! My name is ' + this.name  + ' I am ' + this.age + ' years old and live in ' + this.city);
};

// Create 5 instances of the same friends from step 1, except this time use the pseudo class and method we just created.
let p1 = new Person('Adam', 37);
let p2 = new Person('Jessica', 34);
let p3 = new Person('Maverick', 6);
let p4 = new Person('Luke', 33);
let p5 = new Person('Ben', 30);
p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello();

// Using the ES6 syntax makes object oriented programming in javascript much easier to understand. Let’s use the ES6 syntax and create the same class that we just did. (Hint: ES6 classes are not made using a constructor function, they use a keyword: class. They have a constructor which is used to take in the parameters name, city, and age. And methods will not need to be prototypes!).
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    sayHello() {
        console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`);
    };
};

let p1 = new Person('Adam', 37);
p1.sayHello();

// ***Inhertience***
class Vehicle {
    constructor(wheels, manufacturer, type) {
        this.type = type;
        this.wheels = wheels;
        this.manufacturer = manufacturer;
    };

    aboutVehicle() {
        console.log(`My vehicle is a ${this.type} . It is made by ${this.manufacturer} , and it has ${this.wheels} many wheels!`);
    };
};

class Truck extends Vehicle {
    constructor(wheels, manufacturer, doors, truckbed) {
        super(wheels, manufacturer);
        this.doors = doors;
        this.truckBed = truckbed;
        if (this.truckBed === true) {
            console.log(`My vehicle is a truck. It is made by ${this.manufacturer} , and it has ${this.wheels} many wheels and ${this.doors} many doors`);
        }
    };

};

class Sedan extends Vehicle {
    constructor(wheels, manufacturer, size, mpg) {
        super(wheels, manufacturer);
        this.size = size;
        this.mpg = mpg;
    };
};

class Motorcycles extends Vehicle {
    constructor(wheels, manufacturer, doors, handlebars) {
        super(wheels, manufacturer);
        this.handlebars = handlebars;
        this.doors = 0
    };
};