console.log(`1. ----------- Using If....Else Block.... Male Marriage Eligibility----------\n`);
function maleMarriageEligibility(gender,age,name)
{
   if(age>=21)
   {
    return `==> Hey ${name} : You are eligible for marriage`;
   }
     else{
        return `==> Hey ${name} : Sorry! You are not eligible for marriage`;
     }
   }
var result=maleMarriageEligibility("male",23,"Billgates");
console.log(result);
var result=maleMarriageEligibility("Male",18,"Stew Jobs");
console.log(result);
console.log(`\n`);
console.log(`2. ---------- Using If....Else Block....Female Marriage Eligibility----------\n`);

function femaleMarriageEligibility(gender,age,name)
{
   if(age>=18)
   {
    return `==> Hey ${name} : You are eligible for marriage`;
   }
     else{
        return `==> Hey ${name} : Sorry! You are not eligible for marriage`;
     }
   }
var result=femaleMarriageEligibility("female",21,"Genifer");
console.log(result);
var result=femaleMarriageEligibility("female",17,"Malinda");
console.log(result);