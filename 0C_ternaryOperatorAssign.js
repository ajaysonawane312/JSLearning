console.log(`Assignment 0C: Use Ternary Operator\n`);
console.log(`1. -----------------Check Eligibility for TCS Interview---------------------\n`);
function eligibilityInter(gradeScore, hscScore, sscScore, candidateName){
console.log(`:) Candidate Result    : ${gradeScore} ${hscScore} ${sscScore}   ${candidateName}`);
var eligible = gradeScore>=70 || hscScore>=80 || sscScore>=90 ? "You are Eligible for TCS Interview" : "Unfortunatly You are Not Eligible for TCS Interview";
return eligible;
}
var eligibility = eligibilityInter(80, 86, 90, "Ajay");
console.log(`==> Check Eligibility  : ${eligibility}\n`);
var eligibility = eligibilityInter(70, 65, 55, "Prabhu");
console.log(`==> Check Eligibility  : ${eligibility}\n`);
var eligibility = eligibilityInter(60, 79, 88, "Ranjit");
console.log(`==> Check Eligibility  : ${eligibility}\n`);
console.log(`----------------------------------------------------------------------------\n`);