console.warn(`1.----------Find the All Element which are Greater Than 50-----------`);
const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`Given Array :`, arrayNumbers);
const newArray = [];
const arrayGreater = arrayNumbers.filter(numbers => {
    if (numbers>50) {
        newArray.push(numbers);
    }
});
console.log(`Greater than 50 Elements:`, newArray);
console.warn(`2.--------------------Find the All Even Element ---------------------`);
// console.log(`Given Array :`, arrayNumbers);
 const arrayEven = [];
 const newArrayEven = arrayNumbers.filter(numbers =>{
    if (numbers%2==0) {
        arrayEven.push(numbers);
    }
 })
 console.log(`Even Element:`, arrayEven);

console.warn(`3.--------------------Find the All ODD Element ----------------------`);
// console.log(`Given Array :`, arrayNumbers);
 const arrayOdd = [];
 const newArrayOdd = arrayNumbers.filter(numbers =>{
    if (numbers%2!=0) {
        arrayOdd.push(numbers);
    }
 })
 console.log(`Odd Element:`, arrayOdd);

console.warn(`4.-----------Find the All Element which are Multiple of 5------------`);
// console.log(`Given Array :`, arrayNumbers);
 const arrayMultiple = [];
 const newArrayMultiple = arrayNumbers.filter(numbers =>{
    if (numbers%5==0) {
        arrayMultiple.push(numbers);
    }
 })
 console.log(`Elements Multiple of 5 is:`, arrayMultiple);

 console.warn(`5.------Find Out the All Element which are Between 20 to 50--------`);
//  console.log(`Given Array :`, arrayNumbers);
 const arrayBetween = [];
 const newArrayBet = arrayNumbers.filter(number =>{
   if (number >=20 && number<=50){
        arrayBetween.push(number);
   }
 })
 console.log(`Elements Between 20 to 50:`,arrayBetween);