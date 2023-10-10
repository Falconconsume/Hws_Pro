const firstNumber = Number(prompt("Введіть шестизначне число"));

let num = firstNumber;
let strNumber = String(num);

if (strNumber.length != 6) 
{
    console.log("Число не шестизначне");
} 
else 
{
    let firstPart = strNumber.substring(0, 3);
    let secondPart = strNumber.substring(3, 6);
    if (firstPart === secondPart.split("").reverse().join("")) 
    {
        console.log("Число " + num + " є дзеркальним");
    } 
    else 
    {
        console.log("Число " + num + " не є дзеркальним");
    }
}