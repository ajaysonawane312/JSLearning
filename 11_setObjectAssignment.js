console.warn(`A.-----------------------Create a Class with Data Members and Initialized Using Constructor--------------------------\n`);
class Bank {
    constructor(bank_name, location, account_no, ifsc, interest_rate){
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc = ifsc;
        this.interest_rate = interest_rate
    }
}
let axis_bank = new Bank("Axis Bank", "Pune", 10002356, "AXIB000004568", "10.5%");
let sbi_bank = new Bank("SBI Bank", "Mumbai", 8900877568, "SB5645672", "8.00%");
let icici_bank = new Bank("ICICI Bank", "Nagpur", 567787899, "IC45653667", "12.4%");
let kotak_bank = new Bank("Kotak Bank", "Delhi", 6876589879, "KO56878987", "9.5%");
let hdfc_bank = new Bank("HDFC Bank","Chennai", 57348930843, "HD5720862", "13.8%");
let punjab_bank = new Bank("Punjab Bank", "Pune", 3986557777, "PU1290656", "8.7%");

console.warn(`B.--------------------------------------Create objects of these banks------------------------------------------------\n`);
console.log(axis_bank);
console.log(sbi_bank);
console.log(icici_bank);
console.log(kotak_bank);
console.log(hdfc_bank);
console.log(punjab_bank);
console.warn(`C.------------------------------------------Add All Object Elements in a Set-----------------------------------------\n `);

const bankDetails = new Set();
bankDetails.add(axis_bank);
bankDetails.add(sbi_bank);
bankDetails.add(icici_bank);
bankDetails.add(kotak_bank);
bankDetails.add(hdfc_bank);
bankDetails.add(punjab_bank);
console.log(bankDetails);

console.warn(`D.--------------------------Traverse Set Using For...of Loop Log Only bank_name and location-------------------------`);
for (const bank of bankDetails) {
    
    console.log(`Bank Details:`, "Bank Name:",bank.bank_name,",", "Location:",bank.location);
}
