console.log(`Assignment:----------Using If Block Only---------------`);
console.log(`1. -----------Given Number is EVEN or ODD--------------\n`);
function oddEvenNumber (num){
    if (num%2==0) {
        // console.log(`Number is: ${num}`);
        return "EVEN"
    }
    if (num%2!=0) {
        // console.log(`Number is: ${num}`);
        return "ODD"
    } 
}
var result=oddEvenNumber(45);
console.log(`1.1 Given Number 45 is: ${result}`);
console.log(`--------------------------------`);
var result=oddEvenNumber(70);
console.log(`1.2 Given Number 70 is: ${result}`);
console.log(`--------------------------------`);
var result=oddEvenNumber(67);
console.log(`1.3 Given Number 67 is: ${result}`);
console.log(`--------------------------------`);
var result=oddEvenNumber(98);
console.log(`1.4 Given Number 98 is: ${result}\n`);
console.log(`2. --------------Check Age Eligibility for Vote-------------\n`);
function marriageEligibility(val){
    if (val>=18) {
        return "You are Eligible for Vote"
    }
    if(val<=18){
        return "Sorry You are Not Eligible for Vote"
    }
}
  
var result=marriageEligibility(18);
console.log(`2.1 Eligibility of Vote Age is 18: ${result}`);
var finalResult=marriageEligibility(20);
console.log(`2.2 Eligibility of Vote Age is 20: ${finalResult}`);
var result=marriageEligibility(17);
console.log(`2.3 Eligibility of Vote Age is 17: ${result}`);
var result=marriageEligibility(40);
console.log(`2.4 Eligibility of Vote Age is 40: ${result}\n`);

console.log(`3.--------Check String Length More Than 10 Character--------\n`);
function stringLenth(value){
    var totalLength=value.length;
    console.log(`3.1 Total Length of String "JavaScript-ES6" is: ${totalLength}`);
    if (totalLength>10) {
        return "YES"
    }
    if(totalLength<10)
    {
        return "NO"
    }
}
var final=stringLenth("JavaScript-ES6");
console.log(`3.2 Given String Length More Than 10 Chracter or Not: ${final}\n`);
console.log(`4.------------Check String is Start with "Java"--------------\n`);
function startWithString(words){
    var words="JavaScript Language";
    console.log(`4.1 Given String is: ${words}`);
var homeWord=words.startsWith("Java")
// console.log(homeWord);
if (homeWord==true) {
    return true;
}
if(homeWord!=true)
{
    return false;
}
}
var result=startWithString("JavaScript Language");
console.log(`4.2 Check String Start With "Java" is: ${result}`);

