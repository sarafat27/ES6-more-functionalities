const numbers = [4, 13, 19, 6, 8, 43, 10];
const fiveTimes = numbers.map(x => x * 5);
// console.log(fiveTimes);
const odd = numbers.filter(x => x % 2 == 1);
// console.log(odd);
const products = [
    { name: 'water bottle', price: 50, color: 'white' },
    { name: 'Mi phone', price: 12000, color: 'black' },
    { name: 'keyboard', price: 500, color: 'black' },
    { name: 'clock', price: 1200, color: 'green' },
    { name: 'Laptop', price: 42000, color: 'silver' }
];
const phone = products.find(x => x.price == 12000);
// console.log(phone);
const firstOdd = numbers.find(x => x % 2 == 1);
console.log(firstOdd);