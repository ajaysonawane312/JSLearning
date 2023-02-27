console.log(`Assignment 01:--------Only Use if else Statement---------`);
console.log(`1. -----------------Eligibility for Vote-----------------`);
console.log(``);
function voteEligibility(age){
    if (age>=18) {
        console.log(`==> Age ${age}: Eligible For Vote`);
    }else{
        console.log(`==> Age ${age}: You Are Not Eligible For Vote`);
    }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
function dataInvalid(age){
    if(age<=0 || age>=100 || (typeof mark!="number")){
        console.log(`==> Age ${age}: Invalid Data`);
    }
}
dataInvalid(-10);
dataInvalid(200);
dataInvalid(0);
dataInvalid(undefined);
dataInvalid(null);
console.log(``);
console.log(`2. ----------------Grade Calculations--------------------`);
console.log(``);
function gradeCalculation(mark){
   if (mark>100) {
    return `mark ${mark}: Please Provide the Valid Marks`
   }
   if (mark>=90) {
    var final=`mark ${mark}: Funtastic Marks Your Grade is A+`;
    return final;
   }
   if (mark>=75 && mark<90) {
    return `mark ${mark}: Excellent Marks Your Grade is A`
   }
   if (mark>=50 && mark<75) {
    return `mark ${mark}: Good Marks Your Grade is B`
   }
   if (mark>=35 && mark<50) {
    return `mark ${mark}: Good Marks Your Grade is C: Need Improvement`;
   }
}
var result=gradeCalculation(98);
console.log(result);
var result=gradeCalculation(80);
console.log(result);
var result=gradeCalculation(90);
console.log(result);
var result=gradeCalculation(64);
console.log(result);
var result=gradeCalculation(91);
console.log(result);
var result=gradeCalculation(35);
console.log(result);
var result=gradeCalculation(49);
console.log(result);
var result=gradeCalculation(150);
console.log(result);
function failStatus(mark){
   if (mark<35) {
    return `Mark ${mark}: Fail`;
   }
}
var fail=failStatus(29);
console.log(fail);
var fail=failStatus(0);
console.log(fail);

function invalidData(mark){
   if (mark>100 || (typeof mark!="number") || (typeof mark!=NaN)) {
    console.log(`mark ${mark}: Please Provide the Valid Marks`);
   }
}
invalidData(-7);
invalidData("Eighty");
invalidData(NaN);
invalidData(null);
invalidData(undefined);
