"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(accno, username) {
        this.acc_no = accno;
        this.user_name = username;
    }
    balance(amount, interest) {
        console.log("Account Details");
        console.log("Account Number : " + this.acc_no);
        console.log("Account Holder : " + this.user_name);
        if (interest != null)
            console.log("Savings Account Balance : " + (amount + amount * interest));
        else
            console.log("Current Account Balance : " + amount);
    }
}
exports.Account = Account;
let s = new Account(101, 'Aarav');
s.balance(10000, 0.3);
let c = new Account(104, 'Vincent');
c.balance(15000);
