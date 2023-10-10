const firstDistance = Number(prompt("Введіть першу відстань у кілометрах:"));
const secondDistance = Number(prompt("Введіть другу відстань у футах:"));

let kilometer=1000;
let fut=305;

let kiloDistance = firstDistance * kilometer;
let futDistance = secondDistance * fut;

if(kiloDistance < futDistance) 
{
    console.log("Відстань у кілометрах менша, ніж у футах");
}

else if (kiloDistance > futDistance) 
{
    console.log("Відстань у футах - менша, ніж відстань у кілометрах ");
}
