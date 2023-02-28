console.log(`Assignment 01.-------Using--if else Statement-----------`);
console.log(`--------------------Vote Eligibility------------------\n`);
function voteEligibility(age)
{
 if(age<=0 || age>120)
 {
    console.log(`-->Age is ${age}: Invalid Data`);
   return
 }
 if (age>=18 && age<=120) 
 {
    console.log(`-->Age is ${age}: Congratulations! You Are Eligible for Vote`); 
    return  
 }
 if (age>0 && age<18) 
 {
     console.log(`-->Age is ${age}: Soryy! You are Not Eligible for Vote`);
 }else{
    console.log(`-->Age is ${age}: Please Enter Valid Data`);
 }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
console.log(`-----------------------Grade Status--------------------\n`);
function gradeCalculation(marks){
   if (marks>=90 && marks<=100) {
      return `Marks ${marks}: Funtastics marks Your Grade is A+`;
   }
   if (marks>=75 && marks<90) {
      return `Marks ${marks}: Excellent marks Your Grade is A`;
   }
   if (marks>=50 && marks<75) {
      return `Marks ${marks}: Good marks Your Grade is B`;
   }
   if (marks>=35 && marks<50) {
      return `Marks ${marks}: Your Grade is C: Need Improvements`;
   }
   if (marks<35 && marks>=0) {
      return `Marks ${marks}: Result is Fail`;
   }
   if (marks<=0 || marks>100 || (typeof marks!="number") || isNaN(Number)) {
      return `Marks ${marks}: Invalid Data `;
      
   }
   }
   var result=gradeCalculation(98);
   console.log(result);
   var result=gradeCalculation(80);
   console.log(result);
   var result=gradeCalculation(90);
   console.log(result);
   var result=gradeCalculation(0);
   console.log(result);
   var result=gradeCalculation(150);
   console.log(result);
   var result=gradeCalculation(-7);
   console.log(result);
   var result=gradeCalculation(35);
   console.log(result);
   var result=gradeCalculation(29);
   console.log(result);
   var result=gradeCalculation(64);
   console.log(result);
   var result=gradeCalculation(49);
   console.log(result);
   var result=gradeCalculation(91);
   console.log(result);
   var result=gradeCalculation("Eighty");
   console.log(result);
   var result=gradeCalculation(NaN);
   console.log(result);
   var result=gradeCalculation(null);
   console.log(result);
   var result=gradeCalculation(undefined);
   console.log(result);