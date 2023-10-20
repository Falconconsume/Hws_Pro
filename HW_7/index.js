alert(`Welcome to calculator!`);
const greeting = `Good bye, see you later!`;

do {
    let actionUser = prompt(`What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos`);
    let result;
    while (actionUser !== 'Add' && actionUser !== 'Diff' && actionUser !== 'Mult' && actionUser !== 'Div' && actionUser !== 'Sqrt' && actionUser !== 'Sin' && actionUser !== 'Cos') {
        alert(`I don't recognize your operation. Please choose correct operation like: Add, Diff, Mult, Div, Sqrt, Sin, Cos!`);
        actionUser = prompt(`What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos`);
    }

    switch (actionUser) {
        case 'Add':
        case 'Diff':
        case 'Mult':
        case 'Div':
            let firstDigit = Number(prompt(`Enter the first number: `));
            while (firstDigit === 0 || isNaN(firstDigit)) {
                alert(`The first digit is invalid! Please enter correct digit!`);
                firstDigit = Number(prompt(`Enter the first number: `));
            }
            let secondDigit = Number(prompt(`Enter the second number: `))
            while (secondDigit === 0 || isNaN(secondDigit)) {
                alert(`The second digit is invalid! Please enter correct digit!`);
                secondDigit = Number(prompt(`Enter the second number: `));
            }

            switch (actionUser) {
                case 'Add': {
                    result = firstDigit + secondDigit;
                    break;
                }
                case 'Diff': {
                    result = firstDigit - secondDigit;
                    break;
                }
                case 'Mult': {
                    result = firstDigit * secondDigit;
                    break;
                }
                case 'Div': {
                    result = firstDigit / secondDigit;
                    break;
                }
            }
            alert(`${actionUser} of ${firstDigit} and ${secondDigit} is ${result}`);
            break;

        case 'Sqrt':
        case 'Sin':
        case 'Cos':
            const digit = Number(prompt(`Enter the number: `));
            if (isNaN(digit) || digit === 0) {
                alert(`The digit is invalid!`);
                break;
            }

            switch (actionUser) {
                case 'Sqrt': {
                    result = Math.sqrt(digit);
                    break;
                }
                case 'Sin': {
                    result = Math.sin(digit);
                    break;
                }
                case 'Cos': {
                    result = Math.cos(digit);
                    break;
                }
            }
            alert(`${actionUser} of ${digit} is ${result}`);
            break;

        default: {
            alert(greeting);
        }
    }
} while (window.confirm(`Do you want continue work with me?`))

alert(greeting);