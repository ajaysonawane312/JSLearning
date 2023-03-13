console.warn(`-----------------------------------------Bank Details--------------------------------------------------------\n`);
function Bank (bankName, location, ifscCode, branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    this.showDetails=function(){
        console.log(`Bank Details is : Bank Name: ${this.bankName} , Location: ${this.location}, IFSC Code :${this.ifscCode}, Branch Code: ${this.branchCode}`);
}
}
Bank.prototype.openTime = "9 A.M. IST";
Bank.prototype.closeTime = "6 P.M.IST";
let yesBank = new Bank("Yes Bank", "Pune", "YESB00001456", 117);
yesBank.showDetails();
let sbiBank = new Bank("SBI Bank", "Phaltan", "SBIN00001234", 118);
sbiBank.showDetails();
let mahBank = new Bank("MAH Bank", "Pune", "MAHB00007894", 119);
mahBank.showDetails();
let axisBank = new Bank("AXIS Bank", "Phaltan", "AXIS00002589", 120);
axisBank.showDetails();

console.warn("-------------------------------------Open and Close Bank Time-------------------------------------------------\n");
console.log(`Open Time of YES Bank is: "${yesBank.openTime}"   |  Close Time is: "${yesBank.closeTime}"`);
console.log(`Open Time of SBI Bank is: "${sbiBank.openTime}"   |  Close Time is: "${sbiBank.closeTime}"`); 
console.log(`Open Time of MAH Bank is: "${mahBank.openTime}"   |  Close Time is : "${mahBank.closeTime}"`);
console.log(`Open Time of AXIS Bank is: "${axisBank.openTime}"  |  Close Time is : "${axisBank.closeTime}"`);