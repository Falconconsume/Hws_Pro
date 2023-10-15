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

    isNaN(firstNumber) || firstNumber === 0 ? (alert(`This is bad digit, good bye!`))  : (null);

    if(isNaN(firstNumber) || firstNumber === 0)
    {
        break;
    }

    const secondNumber = Number(prompt(`Enter the second number:`));
    
    isNaN(secondNumber) || secondNumber === 0 ? (alert(`This is bad digit, good bye!`)) : (null);

    if(isNaN(secondNumber))
    {
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
    alert(greeting);
    break;

    case `Sqrt`:
    case `Sin`:
    case `Cos`:

        const digit = Number(prompt(`Enter the number:`));

        isNaN(digit) || digit === 0 ? (alert(`This is bad digit, good bye!`)) : (null);
    
        if(isNaN(digit) || digit === 0)
        {
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
        alert(greeting);
        break;

        default:
        {
            alert(greeting);
        }
}