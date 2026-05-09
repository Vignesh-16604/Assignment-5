class BankAccount {
    #balance;
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log("Deposited: " + amount);
        } else {
            console.log("Invalid deposit amount");
        }
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Invalid withdrawal amount");
        } else if (amount > this.#balance) {
            console.log("Insufficient balance");
        } else {
            this.#balance -= amount;
            console.log("Withdrawn: " + amount);
        }
    }
    getBalance() {
        console.log("Current Balance: " + this.#balance);
    }
}
let account1 = new BankAccount(1000);
account1.getBalance();
account1.deposit(500);
account1.withdraw(300);
account1.withdraw(1500); // exceeds balance
account1.getBalance();
