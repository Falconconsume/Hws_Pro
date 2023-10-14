alert(`Welcome to calculator!`);
const greeting = `Good bye, see you later!`;
const actionUser = prompt(`What action do you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos`);

if(actionUser === `Add` || actionUser === `Diff` || actionUser === `Mult` || actionUser === `Div`)
{
    const firstNumber = Number(prompt(`Enter first number: `));
    const secondNumber = Number(prompt(`Enter second number: `));

    if (isNaN(firstNumber) || isNaN(secondNumber))
    {
        alert(greeting);
    }

    else
    {
        if(actionUser === `Add`)
    {
        const sum = firstNumber + secondNumber;
        alert(`Sum of ${firstNumber} and ${secondNumber} equals: ${sum}`);
    }

    else if(actionUser === `Diff`)
    {
        const diffAction = firstNumber - secondNumber;
        alert(`Difference of ${firstNumber} and ${secondNumber} equals: ${diffAction}`);
    }

    else if(actionUser === `Mult`)
    {
        const multAction = firstNumber * secondNumber;
        alert(`Mult of ${firstNumber} and ${secondNumber} equals: ${multAction}`);
    }

    else if(actionUser === `Div`)
    {
        const divAction = firstNumber / secondNumber;
        alert(`Div of ${firstNumber} and ${secondNumber} equals: ${divAction}`);
    }
    alert(greeting);

}       
}

else if(actionUser === `Sqrt`|| actionUser === `Sin`|| actionUser === `Cos`)
{
        
    const digit = Number(prompt(`Enter a number:`));

    if(isNaN(digit))
    {
        alert(`This is bad digit, good bye`);
    } 

    else
    {

        if(actionUser === `Sqrt`)
        {
            const sqrtAction = Math.sqrt(digit);
            alert(`Root of ${digit} equals: ${sqrtAction}`);
        }

        else if(actionUser === `Sin`)
        {
            const sinAction = Math.sin(digit);
            alert(`Sin of ${digit} equals: ${sinAction}`);
        }

        else if(actionUser === `Cos`)
        {
            const cosAction = Math.cos(digit);
            alert(`Sin of ${digit} equals: ${cosAction}`);
        }
        
        alert(greeting);
    }
    
}

else if(isNaN(actionUser))
{
    alert(greeting)
}

else 
{
    alert(greeting);
}