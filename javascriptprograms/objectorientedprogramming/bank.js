class Bank{
    constructor(acno, minbal, acctype){
        this.acno = acno;
        this.bal = minbal;
        this.acctype = acctype;
        this.ifsc = 'sbk151645234';
        this.bname = 'sbk';
    }

    deposit(amount){
        this.bal+=amount;
        console.log(`your ${this.bname}, account number: ${this.acno} is credited with amount ${amount}. Your available balance: ${this.bal}`)
    }

    withdraw(amount){
        if(amount<this.bal){
        this.bal-=amount;
        console.log(`your ${this.bname}, account number: ${this.acno} is debited with amount ${amount}. Your available balance: ${this.bal}`)
        }   
        else{
            console.log("insufficient funds")
        }
    }

    balEnq(){
        console.log("Your available balance is "+ this.bal);
    }

}

var obj1 = new Bank(000, 5000, 'savings');
var obj2 = new Bank(1001, 15000, 'savings');
var obj3 = new Bank(1002, 40000, 'current');
var obj4 = new Bank(1003, 20000, 'savings');

// obj1.deposit(2000);
// obj1.withdraw(4000);
// obj1.balEnq();

var users = [];

users.push(obj1)
users.push(obj2)
users.push(obj3)
users.push(obj4)

var savingsusers = users.filter(user=>user.acctype=='savings')
console.log(savingsusers)

var sortedbalance = users.sort((user1,user2)=>user1.bal-user2.bal)
console.log(sortedbalance)

var highestbalance = users.reduce((user1,user2)=>user1.bal>user2.bal?user1:user2)
console.log(highestbalance)