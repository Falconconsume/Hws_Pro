alert(`Welcome to the calculator`);
const actionUser = prompt(`What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos`);

const greeting = `Good bye, see you later!`;
let result;

if (actionUser === `Add` || actionUser === `Diff` || actionUser === `Mult` || actionUser === `Div`) {
    firstNumber = Number(prompt(`Enter first number`));
    if (isNaN(firstNumber) || firstNumber === 0) {
        alert(`First number is invalid!!!`);
    }

    secondNumber = Number(prompt(`Enter second number`));

    if (isNaN(secondNumber) || secondNumber === 0) {
        alert(`Second number is invalid!`);
    }

    if (isNaN(firstNumber) || isNaN(secondNumber) || firstNumber === 0 || secondNumber === 0) {
        alert(`This is bad digit, good bye`);
    } else {
        if (actionUser === `Add`) {
            result = firstNumber + secondNumber;
        } else if (actionUser === `Diff`) {
            result = firstNumber - secondNumber;
        } else if (actionUser === `Mult`) {
            result = firstNumber * secondNumber;
        } else if (actionUser === `Div`) {
            result = firstNumber / secondNumber;
        }
        alert(`${actionUser} of ${firstNumber} and ${secondNumber} is ${result}`);
        alert(greeting);
    }
} else if (actionUser === `Sqrt` || actionUser === `Sin` || actionUser === `Cos`) {
    const digit = Number(prompt(`Enter the number: `));

    if (isNaN(digit) || digit === 0) {
        alert(`This is bad digit, good bye!`);
    } else {
        if (actionUser === `Sqrt`) {
            result = Math.sqrt(digit);
        }
        if (actionUser === `Sin`) {
            result = Math.sin(digit);
        }
        if (actionUser === `Cos`) {
            result = Math.cos(digit);
        }
        alert(`${actionUser} of ${digit} is ${result}`);
        alert(greeting);
    }
}

