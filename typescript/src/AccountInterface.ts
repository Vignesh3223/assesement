interface ISavingAccount {
    acc_no: number,
    user_name: string,
    balance: (amount?: any, interest?: any) => void
}
interface ICurrentAccount {
    acc_no: number,
    user_name: string,
    balance: (amount?: any, interest?: any) => void
}
export class Account implements ISavingAccount, ICurrentAccount {
    acc_no: number
    user_name: string
    constructor(accno: number, username: string) {
        this.acc_no = accno;
        this.user_name = username;
    }
    public balance(amount?: any, interest?: any) {
        console.log("Account Details");
        console.log("Account Number : " + this.acc_no);
        console.log("Account Holder : " + this.user_name);
        if (interest != null)
            console.log("Savings Account Balance : " + (amount + amount * interest))
        else
            console.log("Current Account Balance : " + amount);
    }
}
let s: ISavingAccount = new Account(101, 'Aarav')
s.balance(10000, 0.3)
let c: ICurrentAccount = new Account(104, 'Vincent')
c.balance(15000)