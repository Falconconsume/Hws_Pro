const userHours = Number(prompt('Введіть кількість годин'));

if(isNaN(userHours))
{
    alert("Введіть число!!!");
}
else {
    const userSeconds = 3600 * userHours;
    alert (" В годиннах: " + userHours+ ";" + " У секундах:" + userSeconds);
}


