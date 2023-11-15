class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    output() {
        console.log(this.name + ' ' + this.age);
    }
}

class Car {
    constructor(model, brand, yearOfRelease, numberOfCar) {
        this.brand = brand;
        this.model = model;
        this.yearOfRelease = yearOfRelease;
        this.numberOfCar = numberOfCar;
    }

    setOwner(owner) {
        if (owner.age >= 18) {
            this.owner = owner;
        } else {
            console.log(`Людині не дозволено водити машину, до 18 років!`);
        }
    }

    ownerCheck() {
        if (this.owner) {
            console.log(`Власник: ${this.owner.name}`);
        } else {
            console.log(`Цей автомобіль не має власника.`);
        }
    }

    info() {
        console.log(this);
        if (this.owner) {
            this.owner.output();
        }
    }
}

let person1 = new Person('Oleg', 17);
let person2 = new Person('Olga', 29);
let person3 = new Person('Sacha', 39);

let car1 = new Car('Audi', 'Q8', 2022, 2132);
car1.setOwner(person1);

let car2 = new Car('Mersedes', 'Blender', 2022, 1911);
car2.setOwner(person3);

let car3 = new Car(`Porsche`, `Macan`, 2021, 1001);
car3.setOwner(person2);

console.log(person1);
console.log(person2);
console.log(person3);

console.log(car1);
car1.ownerCheck();

console.log(car2);
car2.ownerCheck();

console.log(car3);
car3.ownerCheck();