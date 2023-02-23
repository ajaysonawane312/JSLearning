console.log(`Assignment 0B:--------------Use Ternary Operator: ----------------\n`);
console.log(`1. Condition Check for Eligibility: Using Ternary Operator \n`);
console.log(`--------------------- Gender  Age  Boy_name----------------------`);
function maleMarriageEligibility (gender, age, boyName){
console.log(`:) Candidate Details:  ${gender}   ${age}   ${boyName}`);
var eligible = age>=21 ? "Eligible for Marriage" : "Not Eligible for Marriage"
//console.log(`Check Eligibilty for Marriage: ${eligible}`);
return eligible;
}
var boyName = maleMarriageEligibility("Male", 25, "Billgates");
console.log(`==> Check Eligibility for Marriage: ${boyName}`);
var boyName = maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(`==> Check Eligibility for Marriage: ${boyName}`);
console.log(`-----------------------------------------------------------------\n`);
console.log(`2. Condition Check for Eligibility: Using Ternary Operator \n`);
console.log(`-------------------------Gender Age Girl Name--------------------`);
function femaleMarriageEligibility(gender, age, girlName){
    console.log(`:) Candidate Details:   ${gender}  ${age}  ${girlName}`);
    var checkEligibility = age>=18 ? "Eligible for Marriage" : "Not Eligible for Marriage";
    return checkEligibility;
    // var girl = age;
    // if(age>=18){
    // console.log(`==> Check Eligibility for Marriage: Eligible for Marriage`);
    // }else{
    //     console.log(`==>Check Eligibility for Marriage: Not Eligible for Marriage`);
    // }
    // return girl;
}
var result=femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(`==> Check Eligibility for Marriage: ${result}`);
var result=femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(`==> Check Eligibility for Marriage: ${result}`);
console.log(`------------------------------------------------------------------`);