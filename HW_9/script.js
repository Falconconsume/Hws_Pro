alert(`Welcome to calculator!`);
const greeting = `Good bye, see you later!`;

let history = [];
let result;
function getUserNumber(number)
{
    while (isNaN(number)) {
        alert(`The digit is invalid! Please enter a correct digit!`);
        number = Number(prompt(`Enter the number: `));
    }
    if (number === null) {
        return 0; 
    } else
    {
        return number;
    }
}

function sum(firstDigit,secondDigit)
{
    return firstDigit + secondDigit;
}
function diff(firstDigit,secondDigit)
{
    return firstDigit - secondDigit;
}
function mult(firstDigit,secondDigit)
{
    return firstDigit * secondDigit;
}
function div(firstDigit,secondDigit)
{
    return firstDigit / secondDigit;
}
function sqrt(digit)
{
    return Math.sqrt(digit);    
}    
function sin(digit)
{
    return Math.sin(digit);    
}
function cos(digit)
{
    return Math.cos(digit);    
}  

function showNotification(actionUser, firstDigit, secondDigit, result)
{
    alert(`${actionUser.toUpperCase()} of ${firstDigit} and ${secondDigit} is ${result}`);
    history.push(`${actionUser} of ${firstDigit} and ${secondDigit} is ${result}`);
}

function showNotificationTriomagry(actionUser, digit, result)
{
    alert(`${actionUser.toUpperCase()} of ${digit} is ${result}`);
    history.push(`${actionUser} of ${digit} is ${result}`);
}

do {
    const userOperation = prompt(`What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos, History`);
    
    if(userOperation === null)
    {
        break;
    }
    const actionUser = userOperation.toLowerCase();
    
    switch(actionUser)
    {
        case `history`:
            {
                if(history.length !==0)
                {
                    alert(`Your operations: ${history.join(`\n`)}`)
                }
                else 
                {
                    alert(`You haven't done any operations yet!`);
                }
                break;
            }
        case `add`:
        case `diff`:
        case `mult`:
        case `div`:
            let firstDigit = Number(prompt(`Enter the first number:`));
            firstDigit = getUserNumber(firstDigit);
            if (firstDigit === 0) 
            {
                alert(`You didn't enter the number!`)
                break;
            } 
        
            let secondDigit = Number(prompt(`Enter the second number: `));
            secondDigit = getUserNumber(secondDigit);
            if (secondDigit === 0) 
            {
                alert(`You didn't enter the number!`)
                break;
            } 

        
            switch(actionUser)
            {
                case `add`: result = sum(firstDigit,secondDigit); break;
                case `diff`: result = diff(firstDigit,secondDigit); break;
                case `mult`: result = mult(firstDigit,secondDigit); break;
                case `div`: result = div(firstDigit,secondDigit); break;
            }
            if(result !== null){
                showNotification(actionUser,firstDigit,secondDigit,result);
            } 
            break;

        case `sqrt`:
        case `sin`:
        case `cos`:
            let digit = Number(prompt(`Enter the number: `));
            digit = getUserNumber(digit);
            

            switch(actionUser)
            {
                case `sqrt`: result = sqrt(digit); break;
                case `sin`: result = sin(digit); break;
                case `cos`: result = cos(digit); break;   
            }
            if (digit !== null && digit !== 0)
            {
                showNotificationTriomagry(actionUser,digit,result); 
                break;
            } 
            else
            {
                break;
            }
            
        default:
            alert(`I don't recognize your operation. Please choose a correct operation like: Add, Diff, Mult, Div, Sqrt, Sin, Cos, History!`);
            break;
    }

}while(confirm(`Do you want to continue with me?`));

alert(greeting);
