const numbers = [4, 67, 13, 54, 99, 53, 33, 56, 87, 44];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
// console.log(bigNumbers);
// console.log(smallNumbers);


const products = [
    { name: 'water bottle', price: 40, color: 'yellow' },
    { name: 'mobile phone', price: 34000, color: 'camoflage' },
    { name: 'phone stand', price: 4500, color: 'orange' },
    { name: 'sticky notes', price: 20, color: 'pink' },
    { name: 'water glass', price: 5, color: 'white' }
];
const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const pinks = products.filter(product => product.color == 'pink');
// console.log(pinks);

const orangeItem = products.find(product => product.color == 'orange');
console.log(orangeItem);