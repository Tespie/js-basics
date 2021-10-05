// In JavaScript, there are four methods to use to create an object:

// 1. Object Literals.
// 2. New operator or constructor.
// 3. Object.create method.
// 4. Class.


/**
 * [1] Object Literal
 */
var car = {
    model: 'bmw',
    color: 'red',
    price: 2000
}
car.type = 'manual'; // dynamic property
// console.log(JSON.stringify(car));

Object.defineProperty(car, "type", {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 'gas'
});
car.type = "petrol";
console.log('carrrrrrrrrrr',car);

Object.defineProperty(car, "isDreamCar", {
    value: true,
    enumerable: true,
    configurable: false,
    writable: false,    // Update Access

});
car.isDreamCar = false;

// console.log(car.type); //gas
// console.log(JSON.stringify(car));


/**
 * [2] New Operator or Constructor function
 */
 function Car(model, color) {
    this.model = model;
    this.color = color;
}
var c1 = new Car('BMW', 'red');
console.log(c1.model);
console.log("car stringified=> "+JSON.stringify(car));

/**
 * instanceof Operator     
 */
 function Student(name, age) {
    this.name = name;
    this.age = age;
}
var s1 = new Student('foo', 7);
console.log(s1.name);
var s2 = new Student('koo', 9);
console.log(s2.name);
var s1 = new Student('foo', 9);
var c1 = new Car('BMW', 'red');
console.log("Check Instance or not => "+c1 instanceof Student);
console.log(JSON.stringify(s1));

/**
 * Object.defineProperty
 */
 function Car(model) {
    Object.defineProperty(this, "model", {
        writable: true,
        enumerable: true,
        configurable: false,
        value: model
    });
}

var myCar = new Car("Audi A3");
console.log("Object.defineProperty => "+myCar.model);    // Audi  A3

/**
 * [3] Object.create() method
 */
 var Car = {
    model: 'Electric BMW',
    color: 'created red'
}
var ElectricCar = Object.create(Car);
console.log("Object.create() => "+ElectricCar.model); // BMW

/**
 * /**
 * Object.create() method DETAILED
 */
var ElectricCar = Object.create(Car, {
    type: {
        value: 'Electric',
        writable: true,
        configurable: false,
        enumerable: true
    }
});
console.log("Object.create() DETAILED => "+ElectricCar.type); // BMW

/**
 * [4] Using Class to create Object just like OOPS
 */
 class LuxuryCar {

    constructor(maker, price) {
        this.maker = maker;
        this.price = price;
    }

    getInfo() {
        console.log("Your "+this.maker + " costs : " + this.price);
    }
}
var car1 = new LuxuryCar("BMW", 100);
// car1.getInfo();
var car2 = new LuxuryCar("Teju's Mercedes", 1500000);
console.log("Object Using Class => ", car1.getInfo());



