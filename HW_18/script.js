class Hamburger {
    static SIZE_BIG = {
        price: 100,
        ccal: 40
    };
    static SIZE_SMALL = {
        price: 50,
        ccal: 20
    };
    static STAFFING_CHEESE = {
        price: 10,
        ccal: 20
    };
    static STAFFING_SALAD = {
        price: 20,
        ccal: 5
    };
    static STAFFING_POTATOES = {
        price: 15,
        ccal: 10
    };
    static TOPPING_SEASONING = {
        price: 15,
        ccal: 0
    };
    static TOPPING_MAYONNAISE = {
        price: 20,
        ccal: 5
    };

    constructor(size, staffing) {
        this.size = size;
        this.staffing = staffing;
        this.toppings = [];
    }

    addToppings(topping) {
        this.toppings.push(topping);
    }

    CalculatePrice() {
        let price = this.size.price + this.staffing.price;
        this.toppings.forEach(topping => price += topping.price);
        return price;
    }

    CalculateCcal() {
        let ccal = this.size.ccal + this.staffing.price;
        this.toppings.forEach(topping => ccal += topping.ccal);
        return ccal;
    }
}

const hamburger1 = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STAFFING_POTATOES);
hamburger1.addToppings(Hamburger.TOPPING_MAYONNAISE)

console.log(`Price: ${hamburger1.CalculatePrice()}`);
console.log(`Ccal: ${hamburger1.CalculateCcal()}`);

hamburger1.addToppings(Hamburger.TOPPING_MAYONNAISE);

console.log(`Price: ${hamburger1.CalculatePrice()}`);
console.log(`Ccal: ${hamburger1.CalculateCcal()}`);