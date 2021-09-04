const bank = owner => {
    balance = 0;
    return amount => {
        // balance = balance + amount;
        balance += amount;
        return;
    }
}

const MofizBank = bank('Mofiz');
console.log(MofizBank(100));