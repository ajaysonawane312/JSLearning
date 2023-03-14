const bankSbi = {
    bankName : "SBI Bank",
    account : 12000002563,
    ifsc : "SBIN000001234",
    branch : "ADB Phaltan"
}
const bankLocation = {
    street : "Ring Road",
    city : "Phaltan",
    pinCode : 415523
}
const rateOfInterest = {
    homeLoneInterest : "9.7%",
    personalLoanInterest  : "11.9%",
    dueInterest : "25.4%"
}
console.warn(`1.---------------------------------------Create Object-------------------------------------------`);
console.log(bankSbi);
console.log(bankLocation);
console.warn(`2.----------------------------------Clone Using Object.assign()----------------------------------`);
 const bankDetails = Object.assign(bankSbi, bankLocation);
 bankDetails.bankName = "State Bank of India"
 console.log(bankDetails);
//  const banking = Object.assign(bankLocation);
//  console.log(banking);
 console.warn(`3.-----------------------------------Using Spread Operator--------------------------------------`);
 const newBank = {...bankSbi,...bankLocation};
 console.table(newBank);
 console.warn(`4.---------------------------------------------Merge Objects------------------------------------`);
 const mergeObjects = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
 console.table(mergeObjects);
console.warn(`5.-------------------------------------Tarverse Merge Objects------------------------------------`);
 function traverseObject(banksDetails){
    for (const key in banksDetails) {
      if (Object.hasOwnProperty.call(banksDetails, key)) {
        const element = banksDetails[key];
        console.log(`${key} : ${element}`);
      }
    }
  }
  traverseObject(mergeObjects);
