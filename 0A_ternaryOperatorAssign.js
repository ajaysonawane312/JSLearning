console.log(`Assignment 0A:--------------- Ternary Operators -------------------------\n`);
console.log(`1. -------------Find the Greatest Number Among Two Number----------------\n`);
function greaterNumber(num1, num2){
  var greatest = num1>num2 ? "10 is Greatest Number" : " 800 is Smallest Number";
  console.log(`==> Check Number Greatest or Smallest is: ${greatest}\n`);
}
greaterNumber(10,-10);
greaterNumber(800, 899);

console.log(`2. --------------------Check Even or Odd Numbers-------------------------\n`);
function isEvenOrOddNumber(value){
  var number=value%2==0 ? "Even Number" : "Odd Number";
  return number;
}
var result=isEvenOrOddNumber(29);
console.log(`2.1 Given number 29 is: ${result}`);
var result=isEvenOrOddNumber(44);
console.log(`2.2 Given number 44 is: ${result}`);
var result=isEvenOrOddNumber(0);
console.log(`2.3 Given number  0 is: ${result}`);
var result=isEvenOrOddNumber(101);
console.log(`2.4 Given number 101 is: ${result}\n`);
console.log(`3. ----------------Check Which word length is Even or Odd---------------- \n`);
function evenOddLength(value){
    var len = value.length;
    var temp = len%2==0 ? "Even" : "Odd";
    console.log(`==> Length of Given String and String is Even or Odd : ${len} : ${temp}`);
}
evenOddLength ("JavaScript");
evenOddLength ("Developer");
evenOddLength ("Google");
console.log(`-------------------------------------------------------------------------`);