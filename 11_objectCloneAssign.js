

let bankSbi ={
    accountName: "Rutu Gaikwad",
    accountNo: "00256846",
    ifsc:"SBIN0234567",
    intrestRate:"6.4%",
}

let bankLocation ={
    street:"Kothrud",
    pin: "416416",
    city:"Pune"
}
console.log(`***Before Clone***`);
console.log(bankSbi);

console.log(`***After Clone***`);
Object.assign(bankSbi,bankLocation);
console.table(bankSbi);


let rateOfIntrest = {
    homeLoan:"8.9%",
    personalLoan:"6.4%",
    dueIntrest:"9.8%"
}

let sbiDetails = {

}

console.log(`*** Merge BankLocation,BankName,IntrestRate in SBI Details`);
Object.assign(sbiDetails,bankSbi,bankLocation,rateOfIntrest);
console.table(sbiDetails);


console.log(`***Traversing the object***`);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value = sbiDetails[key];
        

        console.log(`${key} : ${value}`);
    }
}