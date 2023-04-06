"use strict";
class Customer {
    constructor(name, age, address, contact) {
        this.Name = name;
        this.Age = age;
        this.Address = address;
        this.Conatct = contact;
    }
}
class Loan extends Customer {
    constructor(name, age, address, contact, accno, ltype, lamt, dur) {
        super(name, age, address, contact);
        this.loanaccountno = accno;
        this.loantype = ltype;
        this.loanamt = lamt;
        this.duration = dur;
    }
    interestcalculate(interest, total) {
        interest = (this.loanamt * this.duration) / 100;
        total = this.loanamt + interest;
        console.log("Interest to be Paid : " + interest);
        console.log("Total Amount to be Paid : " + total);
    }
    display() {
        console.log("Customer Name : " + this.Name + "\n" + "Age : " + this.Age + "\n" + "Address : " + this.Address + "\n" + "Contact Number : " + this.Conatct + "\n");
        console.log("Account Number : " + this.loanaccountno + "\n" + "Loan type : " + this.loantype + "\n" + "Loan Amount : " + this.loanamt + "\n" +
            "Duration : " + this.duration + "\n");
    }
}
let loan = new Loan('Rajesh', 32, '4B,Meco Gardens,Kanuvai', 9366052147, 12115, 'Personal', 200000, 24);
loan.display();
loan.interestcalculate();
