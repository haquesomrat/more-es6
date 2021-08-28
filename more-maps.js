const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Poi'];
const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);

const products = [
    { name: 'water bottle', price: 40, color: 'yellow' },
    { name: 'mobile phone', price: 34000, color: 'camoflage' },
    { name: 'phone stand', price: 4500, color: 'orange' },
    { name: 'sticky notes', price: 20, color: 'pink' },
    { name: 'water glass', price: 5, color: 'white' }
];
const productNames = products.map(product => product.name);
const productPrices = products.map(products => products.price);
// products.map(product =>console.log(product));
products.forEach(product => console.log(product));
// console.log(productPrices);