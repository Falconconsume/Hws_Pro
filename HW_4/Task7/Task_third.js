const mainNumber = Number(prompt("Введіть тризначне число"));

let firstLetter = Math.floor(mainNumber / 100);
let secondLetter = Math.floor((mainNumber % 100) / 10);
let thirdLetter = mainNumber % 10;

if(firstLetter === secondLetter && secondLetter === thirdLetter)
{
    console.log("Усі цифри одинакові");
}

else if(firstLetter === secondLetter || secondLetter === thirdLetter || firstLetter === thirdLetter)
{
    console.log("Є серед цифр одинакові");
}

else
{
    console.log("Немає одинакових цифр");
}