class Support {
    name;
    designation = 'support web dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

const aamir = new Support('Aamir khan', 'BD');
const salman = new Support('Salman khan', 'Saudi Arabia');

aamir.startSession();
salman.startSession();
// console.log(aamir);
// console.log(salman);