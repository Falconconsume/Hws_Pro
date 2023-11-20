class SuperMath {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    check(obj) {
        this.x = obj.X;
        this.y = obj.Y;
        if (window.confirm(`Do you want to confirm this ${obj.znak}`)) {
            return this.znak(obj.znak);
        } else {
            this.input();
        }
    }
    input() {
        this.x = Number(prompt(`Enter the X: `));
        this.y = Number(prompt(`Enter the Y: `));
        let operation = prompt(`Could you choose the operation: +, -, /, *, % `);
        return this.znak(operation);
    }
    znak(operation) {
        let result;

        switch (operation) {
            case `+`: {
                result = this.x + this.y;
                break;
            }
            case `-`: {
                result = this.x - this.y;
                break;
            }
            case `/`: {
                if (this.y === 0) {
                    alert('Error: Division by zero');
                    return;
                }
                result = this.x / this.y;
                break;
            }
            case `*`: {
                result = this.x * this.y;
                break;
            }
            case `%`: {
                if (this.y === 0) {
                    alert('Error: Division by zero');
                    return;
                }
                result = this.x % this.y;
                break;
            }
            default: {
                alert(`You enter invalid znak!`);
                return;
            }
        }
        if (isNaN(result)) {
            return alert(`Something goes wrong!`);
        }
        return alert(`The result of your action is ${result}`);
    }
}

const p = new SuperMath();
let obj = {
    X: 14,
    Y: 7,
    znak: `+`
};
console.log(p.check(obj));