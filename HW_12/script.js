function createHash(key, secret) {
    let result = '';
    for(let i = 0; i < key.length; i++) {
        const index = (key.charCodeAt(i) + secret.charCodeAt(i % secret.length)) % secret.length;
        result += secret.charAt(index);
    }
    return result;
}

const key = prompt('Enter some key');
const secret = 'someSecret';

console.log(createHash(key, secret));
console.log(createHash(key, secret));
console.log(createHash(key, secret));
