class Bank {
    static AccountDetails() {
        let users = {
            1000: { acno: 1000, actype: "savings", username: "userone", password: "userone", balance: 50000 },
            1001: { acno: 1001, actype: "savings", username: "usertwo", password: "usertwo", balance: 5000 },
            1002: { acno: 1002, actype: "current", username: "userthree", password: "userthree", balance: 10000 },
            1003: { acno: 1003, actype: "current", username: "userfour", password: "userfour", balance: 6000 }
        }
        return users;
    }

    static authenticate(acno, username, password) {
        //check if account number exists
        //return values for correct and incorrent details
        //return 1 for correct account number, -1 for incorrect password or username, 0 for incorrect account number

        let bankData = Bank.AccountDetails();
        if (acno in bankData) {
            if (username == bankData[acno].username & password == bankData[acno].password)
                return 1;

            else {
                return 0;
            }
        }

        else {
            return -1;
        }

    }


    static login() {
        let input_accountNumber = id_accountnumber.value;
        let input_Username = id_user.value;
        let input_Password = id_pass.value;
        let LoginValues = Bank.authenticate(input_accountNumber, input_Username, input_Password)

        if (LoginValues == 1) {
            window.location.href="balancepage.html"
        }
        else if (LoginValues == 0) {
            alert("Entered Username/Password is incorrent")
        }
        else if (LoginValues == -1) {
            alert("Entered Account Number does not exist in our database")
        }
    }

    static checkBalance() {
        let input_accountNumber = id_accountnumber.value;
        let input_Username = id_user.value;
        let input_Password = id_pass.value;
        let LoginValues = Bank.authenticate(input_accountNumber, input_Username, input_Password)
        let bankData = Bank.AccountDetails();
        if (LoginValues == 1) {

            let balance = bankData[input_accountNumber].balance;
            let html_val=`<h1>aval balance:${balance}</h1>`
            document.querySelector("#display").innerHTML=html_val

          }
    }
    static deposit() {
        let input_accountNumber = id_accountnumber.value;
        let input_Username = id_user.value;
        let input_Password = id_pass.value;
        let LoginValues = Bank.authenticate(input_accountNumber, input_Username, input_Password)
        let bankData = Bank.AccountDetails();
        if (LoginValues == 1) {
            var amount = parseInt(prompt("Enter a Value", "0"), 10);
            var balance = bankData[input_accountNumber].balance;
            balance = amount+balance;
            let html_val=`<h1>You have deposited ${amount} into your account. Your available balance is:${balance}</h1>`
            document.querySelector("#display").innerHTML=html_val
        }
            
    }
    static withdrawal() {
            let input_accountNumber = id_accountnumber.value;
            let input_Username = id_user.value;
            let input_Password = id_pass.value;
            let LoginValues = Bank.authenticate(input_accountNumber, input_Username, input_Password)
            let bankData = Bank.AccountDetails();
            if (LoginValues == 1) {
                var amount = parseInt(prompt("Enter a Value", "0"), 10);
                var balance = bankData[input_accountNumber].balance;
                balance = balance-amount;
                let html_val=`<h1>You have withdrawn ${amount} from your account. Your available balance is:${balance}</h1>`
                document.querySelector("#display").innerHTML=html_val
            }
                
    }
}