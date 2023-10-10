
const a = Number(prompt("Введіть число:"));

let b;

let c = a % 10;

b = a % 2;

if(b === 0)
{
    console.log(`Число парне; остання цифра: ${c}`);
}

else if (b !== 0 )
{
    console.log(`Число непарне; остання цифра: ${c}`);
}