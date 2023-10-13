alert(`Welcome to calculator!`);
const actionUser = prompt(`What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos`);

const greeting = `Good bye, see you soon!`;
let result;

switch(actionUser)
{
    case `Add`:
    case `Diff`:
    case `Mult`:
    case `Div`:
    
    const firstNumber = Number(prompt(`Enter the first number:`));
    const secondNumber = Number(prompt(`Enter the second number:`));

    if(isNaN(firstNumber || secondNumber))
    {
        alert(`This is bad digit, good bye!`)
        break;
    }

    switch(actionUser)
    {
        case `Add`:
        {
            result = firstNumber + secondNumber;
            break;
        }

        case `Diff`:
        {
            result = firstNumber - secondNumber;
            break;
        }

        case `Mult`:
        {
            result = firstNumber * secondNumber;
            break;
        }

        case `Div`:
        {
            result = firstNumber / secondNumber;
            break;
        }
    }
    alert(`${actionUser} of ${firstNumber} and ${secondNumber} equals: ${result}`);
    break;

    case `Sqrt`:
    case `Sin`:
    case `Cos`:

        const digit = Number(prompt(`Enter the number:`));

        if(isNaN(digit))
        {
            alert(`This is bad digit, good bye!`);
            break;
        }

        switch(actionUser)
        {
            case `Sqrt`:
                {
                    result = Math.sqrt(digit);
                    break;
                }
                case `Sin`:
                {
                    result = Math.sin(digit);
                    break;
                }
                case `Cos`:
                {
                    result = Math.cos(digit);
                    break;
                }
        }
        alert(`${actionUser} of ${digit} equals: ${result}`);
        break;

        default:
        {
            alert(greeting);
        }
}