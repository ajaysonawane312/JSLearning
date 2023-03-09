const sbiBank= {
    bankName:"SBI Bank",
    location:"Pune",
    accountNo:9007452156,
    ifsc:'SBI0000005242',
    interestRate: '8%', 
    showDetails : function()
    {
        console.log(`1. SBI Bank details by invoke the function`);
        // console.log(Object.keys(sbiBank));
        console.log(sbiBank);
    }
    
}
sbiBank.showDetails();
console.log(`------------------------------------------------------------------------------------------------------------`);
const axisBank={
    bankName:"Axis Bank",
    location:"Nagpur",
    accountNo:8754269000,
    ifsc:'AX0000005864',
    interestRate:'7%',
    showDetails:function()
    {
        console.log(`2. Axis Bank details by invoke the function`);
        // console.log(Object.keys(axisBank));
        console.log(axisBank);
    }
}
axisBank.showDetails();
console.log(`------------------------------------------------------------------------------------------------------------`);
const hdfcBank={
    bankName:"HDFC Bank",
    location:"Nashik",
    accountNo:9875400255,
    ifsc:'HDB0000005487',
    interestRate:'12%',
    showDetails :function()
    {
        console.log(`3. HDFC Bank details by invoke the function`);
        // console.log(Object.keys(hdfcBank));
        console.log(hdfcBank);
    }
}
hdfcBank.showDetails();
console.log(`------------------------------------------------------------------------------------------------------------`);
const yesBank={
    bankName:"YES Bank",
    location:"Mumbai",
    accountNo:880004578,
    ifsc:'YESB00000432',
    interestRate:"10%",
    showDetails:function()
    {
        console.log(`4. YES Bank details by invoke the function`);
        // console.log(Object.keys(yesBank));
        console.log(yesBank);
    }
};
yesBank.showDetails();