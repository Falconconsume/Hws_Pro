const a = Number(prompt("Введіть число a:"));
const b = Number(prompt("Введіть число b:"));

let c;

c = b % a;

if(c === 0)
{
    console.log("Число a є дільником b");
}

else if (c !== 0)
{
    console.log("Число a не є дільником b");
}