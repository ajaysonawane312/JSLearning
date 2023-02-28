console.log(`Assignment 02.----------if else Statement---------------------\n`);
console.log(`1.----------------- TCS Interview Eligibility-----------------\n`);

function interviewEligibility(gradeScore, hscScore, sscScore, candidateName){
    if (gradeScore>=70 || hscScore>=80 ||sscScore>90) {
       console.log(`--> Congrates ${candidateName}: You are Eligible For TCS Interview.`); 
    }else{
        console.log(`--> Unfortunately! ${candidateName}: You are Not Eligible For TCS Interview.`); 
    }
}
interviewEligibility(80,86,90,"Ajay");
interviewEligibility(70,65,55,"Ranjit");
interviewEligibility(60, 79, 88,"Vijay")