alert(`Welcome to the calculator`);
const actionUser = prompt(`What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos`);

const greeting = `Good bye, see you later!`;
let result;

switch(actionUser)
{
    case `Add`:
    case `Diff`:
    case `Mult`:
    case `Div` :
        const firstNumber = Number(prompt(`Enter the first number`));
        isNaN(firstNumber) ? alert(`The first number is invalid!`) : (null);
        const secondNumber = Number(prompt(`Enter the second number`));
        isNaN(secondNumber) ? alert(`The second number is invalid!`) : (null);
        isNaN(firstNumber) || isNaN(secondNumber) ? alert(`This is bad digit, good bye`) : (null);
        
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
        !isNaN(firstNumber) && !isNaN(secondNumber) ? (alert(`${actionUser} of ${firstNumber} and ${secondNumber} is ${result}`), alert(greeting)) : (null);       
        break;

    case `Sqrt`:
    case `Sin`:
    case `Cos`:
        const digit = Number(prompt(`Enter the number`));
        isNaN(digit) ? alert(`This is bad digit, good bye`) : (null);

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
        !isNaN(digit) ? (alert(`${actionUser} of ${digit} is ${result}`), alert(greeting)) : (null);       
        break;

    default:
        {
            alert(greeting);
        }
}
