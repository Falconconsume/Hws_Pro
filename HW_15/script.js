function Person(name, sex) {
    this.name = name;
    this.sex = sex;
}

function Flat(countOfPeople) {
    this.countOfPeople = countOfPeople;
    this.citizens = [];
    this.addCitizen = function(person) {
        this.citizens.push(person);
    }
}

function House(maxFlat) {
    this.flats = [];
    this.maxFlat = maxFlat;
    this.addFlat = function(flat) {
        if (this.flats.length < this.maxFlat) {
            this.flats.push(flat);
        } else {
            console.log(`Ви перевищили ліміт квартир!`);
        }

    }
}

let person1 = new Person(`Oleg`, `male`);
let person2 = new Person(`Katushka`, `female`);
let person3 = new Person(`Sasha`, `male`);
let person4 = new Person(`Ola`, `female`);

let flat1 = new Flat(4);
flat1.addCitizen(person1);
flat1.addCitizen(person2);
flat1.addCitizen(person3);
flat1.addCitizen(person4);

let house1 = new House(15);
house1.addFlat(flat1);

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(flat1);
console.log(house1);