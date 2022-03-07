const numbers = [23, 76, 40, 6, 54, 76, 44, 23];
const bigNumbers = numbers.filter(number => number < 20);
// console.log(bigNumbers);
const products = [
    { name: 'water bottle', price: 50, color: 'white' },
    { name: 'Mi phone', price: 12000, color: 'black' },
    { name: 'keyboard', price: 500, color: 'black' },
    { name: 'clock', price: 1200, color: 'green' },
    { name: 'Laptop', price: 42000, color: 'silver' }
];
const price = products.filter(product => product.price > 2000);
// console.log(price)
const blacks = products.filter(product => product.color == 'black');
// console.log(blacks);
const blacks2 = products.find(product => product.color == 'black');
console.log(blacks2);