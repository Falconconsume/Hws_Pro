function removeElement(array,item)
{
    const index = array.indexOf(item);
    (index !==-1 ) ? array.splice(index,1) : null;
}

const array = [`Oleg`, `Artem`, 8, `Olga`, `Sasha`, 9 , 11,];
removeElement(array, 9);
console.log(array);