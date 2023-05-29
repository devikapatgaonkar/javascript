let sbiBank ={
    bankName: "SBI Bank",
    location: "Kothrud",
    accountNo: "00015672",
    ifsc : "SBIN0005546",
    intrestRate: "14%",
    showdetails: function () {
        console.log(`Bank details: BankName : ${this.bankName}; Location : ${this.location}; Account no: ${this.accountNo}; IFSC code: ${this.ifsc}; Intrest Rate : ${this.intrestRate} `);
    }
};
sbiBank.showdetails();


let axisBank ={
    bankName: "Axis Bank",
    location: "Mayur Colony",
    accountNo: "000597168",
    ifsc : "UTIN0005546",
    intrestRate: "12%",
    showdetails: function () {
        console.log(`Bank details: BankName : ${this.bankName}; Location : ${this.location}; Account no: ${this.accountNo}; IFSC code: ${this.ifsc}; Intrest Rate : ${this.intrestRate} `);
    }
};
axisBank.showdetails();

let hdfcBank ={
    bankName: "HDFC Bank",
    location: "Wakad",
    accountNo: "00035978",
    ifsc : "HDFC0005546",
    intrestRate: "9%",
    showdetails: function () {
        console.log(`Bank details: BankName : ${this.bankName}; Location : ${this.location}; Account no: ${this.accountNo}; IFSC code: ${this.ifsc}; Intrest Rate : ${this.intrestRate} `);
    }
};
hdfcBank.showdetails();


let yesBank ={
    bankName: "YES Bank",
    location: "Akurdi",
    accountNo: "000846203",
    ifsc : "YESB0005546",
    intrestRate: "8.8%",
    showdetails: function () {
        console.log(`Bank details: BankName : ${this.bankName}; Location : ${this.location}; Account no: ${this.accountNo}; IFSC code: ${this.ifsc}; Intrest Rate : ${this.intrestRate} `);
    }
};
yesBank.showdetails();