const a = Number(prompt("Введіть двозначне число:"));

let firstPart = Math.floor(a / 10);
let secondPart = a % 10;

if( firstPart < secondPart)
{
    console.log ("Перше число менше за друге");
}

else if(firstPart > secondPart)
{
    console.log ("Друге число менше за перше");
}

else if (firstPart === secondPart)
{
    console.log ("Числа одинакові");
}