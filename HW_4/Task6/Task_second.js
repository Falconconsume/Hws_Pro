const mainNumber = Number(prompt("Введіть тризначне число"));

let firstLetter = Math.floor(mainNumber / 100);
let secondLetter = Math.floor((mainNumber % 100) / 10);
let thirdLetter = mainNumber % 10;

let c = (firstLetter + secondLetter + thirdLetter) % 2;
let sum = firstLetter + secondLetter + thirdLetter;

if (c === 0)
{
    console.log("Сума цифр є парною");
}

else if (c !== 0 )
{
    console.log("Сума цифр є непарною");
}


if(sum % 5 === 0)
{
    console.log("Число кратне 5");
}

else if(sum % 5 !== 0)
{
    console.log("Число некратне 5");
}

let mult = firstLetter * secondLetter * thirdLetter;

if(mult < 100)
{
    console.log("Добуток менший за 100");
}

else if(mult > 100)
{
    console.log("Добуток більший за 100");
}
