const friends = ['Akbar', 'Jahangir', 'shahjahan', 'aorongojeb', 'md babar'];
const fLength = friends.map(friend => friend.length);
// console.log(fLength);
const products = [
    { name: 'water bottle', price: 50, color: 'white' },
    { name: 'Mi phone', price: 12000, color: 'black' },
    { name: 'keyboard', price: 500, color: 'black' },
    { name: 'clock', price: 1200, color: 'green' },
    { name: 'Laptop', price: 42000, color: 'silver' }
];
const productsName = products.map(product => product.name);
const productPrices = products.map(product => product.price);
// products.map(product => console.log(product));
products.forEach(product => console.log(product));
// console.log(productPrices);