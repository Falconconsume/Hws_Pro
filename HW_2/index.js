const userNumber1 = Number(prompt("Введіть перше число"));
const userNumber2 = Number(prompt("Введіть друге число"));

    if (isNaN(userNumber1) || isNaN(userNumber2))
{
    console.log("Будь ласка, введіть число!!!")
}

else {
    const sum = userNumber1 + userNumber2;
    const diff = userNumber1 - userNumber2;
    const mult = userNumber1 * userNumber2;
    const div = userNumber1 / userNumber2;

    console.log("Calculations are finished");

    console.log("Sum: " + userNumber1 + " + " + userNumber2 + " = " + sum); 
    console.log("Diff: " + userNumber1 + " - " + userNumber2 + " = " + diff);
    console.log("Mult: " + userNumber1 + " * " + userNumber2 + " = " + mult); 
    if((userNumber1==0) || (userNumber2==0))
    {
        console.log("На нуль ділити не можна!!!")
    } 
    else { 
        console.log("Div: " + userNumber1 + " / " + userNumber2 + " = " + div);
    }
}    






