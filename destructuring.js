const fish = { id: 66, name: 'king Hilsha', price: 9000, phone: '01916666666', address: 'Chandpur', dress: 'silver' };
// const dress = fish.dress;
// const name = fish.name;
// const price = fish.price;
// const id = fish.id;
// const phone = fish.phone;
const { dress, name, price, id, phone } = fish;
// console.log(fish.dress);
// console.log(dress, phone);
// console.log(id, name);
// console.log(name, dress);

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'Pranta', food: 'chottopoti', },
    web: { work: 'website development', employee: 22, framework: 'react' }
};
// const work = company.web.work;
// const food = company.ceo.food;
const { work } = company.web;
const { food } = company.ceo;
console.log(work, food);