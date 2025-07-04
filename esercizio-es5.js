//Definizione in ES5

function BankAccount(accountNumber, accountHolder, initialBalance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = initialBalance || 0;

    this.displayBalance = function () {
        console.log("Conto " + this.accountNumber + " - Nome Cliente: " + this.accountHolder + " - Bilancio: €" + this.balance);
    };

    this.deposit = function (value) {
        this.balance = this.balance + value;
        console.log("Depositato €" + value + " sull'account " + this.accountNumber);
    };

    this.withdraw = function (value) {
        if (value > 0) {
            if (this.balance >= value) {
                this.balance -= value;
                console.log("Prelevato €" + value + " dal conto" + this.accountNumber);
            } else {
                console.log("Aho! Non fare il furbo!");
            }
        } else {
            console.log("Aho! Non fare il furbo!");
        }
    };


    this.calculateInterest = function () {
        var interest = this.balance * 0.01;
        this.balance += interest;
        console.log("Interessi di €" + interest.toFixed(2) + " sul conto " + this.accountNumber);
        return interest;
    };

    this.getAmount = function () {
        return this.balance;
    };
}




//Codice Programma
var account1 = new BankAccount("IT001", "Mario Rossi", 1000);
var account2 = new BankAccount("IT002", "Giulia Bianchi", 500);
var account3 = new BankAccount("IT003", "Luca Verdi", 2000);

console.log("I Miei conti in banca");
account1.displayBalance();
account2.displayBalance();
account3.displayBalance();
console.log("--------");

console.log("ACCOUNT 1 (Mario Rossi)");
account1.deposit(250);
account1.withdraw(100);
account1.displayBalance();
console.log("--------");

console.log("ACCOUNT 2 (Giulia Bianchi)");
account2.deposit(300);
account2.withdraw(150);
account2.withdraw(1000);//Qui si incazza
account2.displayBalance();
console.log("--------");

console.log(" ACCOUNT 3 (Luca Verdi)");
account3.deposit(500);
account3.withdraw(300);
account3.displayBalance();
console.log("--------");

console.log(" Saldo finale con interessi applicati");
account1.calculateInterest();
account2.calculateInterest();
account3.calculateInterest();
console.log("--------");