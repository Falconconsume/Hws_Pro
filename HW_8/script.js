alert(`Welcome to calculator!`);
const greeting = `Good bye, see you later!`;

let history = [];
let symbolUser;
do {
    let actionUser = prompt(`What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos, History`);
    if (!actionUser) {
        break;
    }

    switch (actionUser) {
        case `History`:
            if (history.length !== 0) {
                alert(`Your operations: ${history.join('\n')}`);
            } else {
                alert(`You haven't done any operations yet!`);
            }
            break;

        case `Add`:
        case `Diff`:
        case `Mult`:
        case `Div`:
            let firstDigit = Number(prompt(`Enter the first number: `));
            while (firstDigit === 0 || isNaN(firstDigit)) {
                alert(`The first digit is invalid! Please enter a correct digit!`);
                firstDigit = Number(prompt(`Enter the first number: `));
            }
            let secondDigit = Number(prompt(`Enter the second number: `));
            while (secondDigit === 0 || isNaN(secondDigit)) {
                alert(`The second digit is invalid! Please enter a correct digit!`);
                secondDigit = Number(prompt(`Enter the second number: `));
            }

            switch (actionUser) {
                case `Add`:
                    result = firstDigit + secondDigit;
                    break;
                case `Diff`:
                    result = firstDigit - secondDigit;
                    break;
                case `Mult`:
                    result = firstDigit * secondDigit;
                    break;
                case `Div`:
                    result = firstDigit / secondDigit;
                    break;
            }
            if(actionUser === `Add`)
            {
                symbolUser = `+`;
            }
            if(actionUser === `Diff`)
            {
                symbolUser = `-`;
            }
            if(actionUser === `Mult`)
            {
                symbolUser = `*`;
            }
            if(actionUser === `Div`)
            {
                symbolUser = `/`;
            }

            history.push(`${actionUser}: ${firstDigit} ${symbolUser} ${secondDigit} = ${result}`);
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
                case `Sqrt`:
                    result = Math.sqrt(digit);
                    break;
                case `Sin`:
                    result = Math.sin(digit);
                    break;
                case `Cos`:
                    result = Math.cos(digit);
                    break;
            }

            history.push(`${actionUser}: ${digit} = ${result}`);
            alert(`${actionUser} of ${digit} is ${result}`);
            break;

        default:
            alert(`I don't recognize your operation. Please choose a correct operation like: Add, Diff, Mult, Div, Sqrt, Sin, Cos, History!`);
            break;
    }
} while (confirm(`Do you want to continue working with me?`));

alert(greeting);
