console.warn(`1.--------No Arguments and No Return Value--------`);
const arrow = ()=>{
    console.log("Good Morning, Today is Monday");
}
arrow();
console.warn(`2.-------Three Arguments and No Return Value------`);
const multiplication = (num1, num2, num3=1) => {
      console.log(`Ans ------> :`, num1*num2*num3);
}
console.log(`A. Multiplication of 5 * 5* 2 is: `);
multiplication(5, 5, 2);
console.log(`B. Multiplication of 10 * 4 * Default val 1 is: `);
multiplication(10, 4);

console.warn(`3.--------Five Arguments and  Return Value--------`);
const addition = (num1, num2, num3, num4, num5)=>{
    let result = num1+num2+num3+num4+num5;
    return result;
}
let addResult = addition(100, 100, 200, 349, 756);
console.log(`Addition of 100 + 100 + 200 + 349 + 756 is : `, addResult);
let additionResult = addition("I am  ", "learning  ", "ES6  ", 'Features  ', "in depth");
console.log(`Addition of Strings : `, additionResult);