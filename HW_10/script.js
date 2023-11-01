function removeElement(array, item) {
    let newArray = array.filter(element => JSON.stringify(element) !== JSON.stringify(item));
    return newArray;
}

let array = [1, 2, 3, 4, 5, 'string', [1, 2, 3]];
let result = removeElement(array, `string`);
console.log(result);