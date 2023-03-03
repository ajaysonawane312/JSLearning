console.log(`-------------------Assignment A-------------------`);
console.log(`1.-----------Find The Factorial Number------------\n`);
function factorialOfNum(num){
    var val = 1;
    if ((typeof num!="number") || isNaN(num) || num == 0) {
        return `Invalid Data`;
    }
    for (let index = num; index >=1; index--) {
        val=val*index;
    }
    return `Factorial is: ${val}`;
}
var result = factorialOfNum(5);
console.log(`1.1. Given Number is : 5 : ${result}\n`);
var result = factorialOfNum(3);
console.log(`1.2  Given Number is : 3 : ${result}\n`);
var result = factorialOfNum(null);
console.log(`1.3  Given Number is : null : ${result}\n`);
var result = factorialOfNum(8);
console.log(`1.4  Given Number is : 8 : ${result}\n`);
var result = factorialOfNum(undefined);
console.log(`1.5  Given Number is : undefined : ${result}\n`);
var result = factorialOfNum(9);
console.log(`1.6  Given Number is : 9 : ${result}\n`);
var result = factorialOfNum(NaN);
console.log(`1.7  Given Number is : NaN : ${result}\n`);
var result = factorialOfNum(0);
console.log(`1.8  Given Number is : 0 : ${result}\n`);
console.log(`--------------------------------------------------`);