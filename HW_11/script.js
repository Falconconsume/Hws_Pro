function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;

    } else {
        return n * factorial(n - 1);
    }
}

function greeting() {
    return alert(`Good bye, see you later!`);
}
let n = prompt(`Enter the number`);
if (n === null) {
    greeting();
} else if (n.trim() === ``) {
    alert(`You didn't enter the number!`);
    greeting();
} else if (!isNaN(n)) {
    let answer = factorial(n);
    alert(`Factorial of ${n} is ${answer}`);
    greeting();
} else {
    alert("You didn't enter the number!");
    greeting();
}