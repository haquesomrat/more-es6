/* const bank = owner => {
    balance = 0;
    return amount => {
        // balance = balance + amount;
        balance += amount;
        return balance;
    }
}
*/

const bank = owner => {
    balance = 0;
    return {
        deposit: amount => {
            // balance = balance + amount;
            balance += amount;
            return balance;
        },
        withdraw: amount => {
            // balance = balance - amount;
            balance -= amount;
            return balance;
        }

    }
}
const MofijBank = bank('Mofij');
console.log(MofijBank.deposit(100));
console.log(MofijBank.deposit(75));
console.log(MofijBank.deposit(55));
console.log(MofijBank.balance);
console.log(MofijBank.deposit(400));
console.log(MofijBank.withdraw(250));