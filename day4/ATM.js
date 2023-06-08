const prompt = require("prompt-sync")();
var users = [];
var currentUser = null;
class User {
    constructor(name, phonenumber, address, amount, password) {
        this.name = name;
        this.phonenumber = phonenumber;
        this.address = address;
        this.amount = amount;
        this.accountNum = generateRandomNumber();
        this.password = password;
        this.transaction = [];
        this.transactionLimit = 5;
        this.transactionDone = 0;
        this.transactionCost = 50;
        this.withdrawLimit = 50000;
        this.moneyWithdraw = 0;
    }
    AddMoney() {
        const amount = prompt("Enter Amount to be added :");
        this.amount = +amount + +this.amount;
        console.log("Successfully added!\nCurrent Balance :", this.amount);
    }
    ChangePassword() {
        const oldPassword = prompt("Old Password :");
        const newPassword = prompt("New Password :");
        const renewPassword = prompt("New Password Again :");
        if (oldPassword != this.password) {
            console.log("Old Password is Wrong");
            currentUser.ChangePassword();
        }
        if (newPassword != renewPassword) {
            console.log("New Password didn't match");
            currentUser.ChangePassword();
        }
        this.password = newPassword;
        console.log("Password Changed Successfully!");
        Features();
    }
    ShowDetail() {
        console.log(
            "name :",
            this.name,
            "\nAccount number :",
            this.accountNum,
            "\nPhone Number :",
            this.phonenumber,
            "\nAddress :",
            this.address,
            "\nTotal Amount :",
            this.amount
        );
        Features();
    }
    ShowTransaction() {
        for (let i of this.transaction) {
            console.log(i);
        }
        Features();
    }
    MoneyWithdrawal() {
        const amount = prompt("Enter Amount to be withdrawn :");
        if (currentUser.Check(amount)) {
            this.moneyWithdraw = +amount + +this.moneyWithdraw;
            this.transactionDone++;
            this.amount = +this.amount - +amount - +this.transactionCost;
            this.transaction.push(
                "Amount " +
                    amount +
                    " SELF WITHDRAWN on " +
                    new Date(Date.now()).toLocaleString()
            );
            console.log(
                "Thanks for using our service\n\n\nYour balance is",
                this.amount
            );
        } else {
            Features();
        }
        Features();
    }
    MoneyTransfer() {
        let flag = false;
        const amount = prompt("Amount to be Transfer :");
        const account = prompt("Account :");
        let secondUser = null;
        for (let user of users) {
            if (user.accountNum == account) {
                flag = true;
                secondUser = user;
                break;
            }
        }
        if (!flag) {
            console.log("User doesn't exist");
            Features();
        }
        if (flag && currentUser.Check(amount)) {
            this.amount = +this.amount - +amount - +this.transactionCost;
            this.transactionDone++;
            secondUser.amount = +secondUser.amount + +amount;
            this.transaction.push(
                "Amount " +
                    amount +
                    " to " +
                    account +
                    " on " +
                    new Date(Date.now()).toLocaleString()
            );
            console.log(
                "Thanks for using our service\n\n\nYour balance is",
                this.amount
            );
        } else {
            Features();
        }
        Features();
    }
    Check(amount) {
        if (amount == 0) {
            console.log("Please enter the amount");
            return false;
        } else if (+amount + +this.transactionCost > +this.amount) {
            console.log("OOPS! You don't have enough money in you account");
            return false;
        } else if (+this.withdrawLimit - +this.moneyWithdraw < amount) {
            console.log("You exceeded Withdawal Limit");
            return false;
        } else if (+this.transactionDone == +this.transactionLimit) {
            console.log("You have already used your daily trasaction count");
            return false;
        }
        return true;
    }
}
class CurUser extends User {
    constructor(
        name,
        phonenumber,
        address,
        amount,
        password,
        GSTnum,
        Businessname
    ) {
        super(name, phonenumber, address, amount, password);
        this.GSTnum = GSTnum;
        this.Businessname = Businessname;
        this.transactionLimit = 20;
        this.transactionCost = 100;
        this.withdrawLimit = 200000;
    }
    ShowDetail() {
        console.log("Business Name", this.Businessname);
        console.log("GST Number", this.GSTnum);
        super.ShowDetail();
    }
}
function generateRandomNumber() {
    const min = 1000000000;
    const max = 9999999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

function Start() {
    console.log(users);
    console.log("1. LOGIN \n2. Create User");
    const option = prompt();
    if (option == 1) {
        Login();
    } else if (option == 2) {
        ChooseUser();
    } else {
        console.log("No such option");
    }
}
function Login() {
    const account = prompt("Account: ");
    const password = prompt("Password: ");
    for (let user of users) {
        if (user.accountNum == account && user.password == password) {
            currentUser = user;
            console.log("Logged in successfully!");
            currentUser.ShowDetail();
            Features();
        }
    }
    console.log(account, password);
    console.log("Invalid account number or password.");
    Start();
}
function Features() {
    console.log(
        "1. Change Password \n2. Money Transfer \n3. Money Withdrawal \n4. View Transactions \n5. Check Balance \n6. Add Money \n7. Exit"
    );
    const option = prompt("Enter an option (1-7): ");
    switch (option) {
        case "1":
            currentUser.ChangePassword();
            break;
        case "2":
            currentUser.MoneyTransfer();
            break;
        case "3":
            currentUser.MoneyWithdrawal();
            break;
        case "4":
            currentUser.ShowTransaction();
            break;
        case "5":
            currentUser.ShowDetail();
            break;
        case "6":
            currentUser.AddMoney();
            break;
        case "7":
            Start();
            break;
            3;
        default:
            console.log("Invalid option.");
            break;
    }
}
function ChooseUser() {
    console.log("1. Normal User \n2. Current User ");
    const option = prompt();
    if (option == 1) {
        const name = prompt("name : ");
        const phonenumber = prompt("Phone Number : ");
        const address = prompt("address : ");
        const password = prompt("password : ");
        const amount = prompt("amount : ");
        users.push(new User(name, phonenumber, address, amount, password));
        Start();
    } else if (option == 2) {
        const name = prompt("name : ");
        const phonenumber = prompt("Phone Number : ");
        const address = prompt("address : ");
        const password = prompt("password : ");
        const amount = prompt("amount : ");
        const Businessname = prompt("business name: ");
        const GSTnum = prompt("GST number :");
        users.push(
            new CurUser(
                name,
                phonenumber,
                address,
                amount,
                password,
                Businessname,
                GSTnum
            )
        );
        Start();
    } else {
        console.log("No such option");
    }
}

users.push(
    new User("John Doe", "1234567890", "123 Main Street", 5000, "password1")
);
users.push(
    new User("Jane Smith", "9876543210", "456 Elm Street", 10000, "password2")
);
users.push(
    new CurUser(
        "Mike Johnson",
        "5555555555",
        "789 Oak Street",
        20000,
        "password3",
        "GST12345",
        "ABC Company"
    )
);
users.push(
    new CurUser(
        "Sarah Williams",
        "9999999999",
        "321 Pine Street",
        15000,
        "password4",
        "GST67890",
        "XYZ Corporation"
    )
);

Start();
