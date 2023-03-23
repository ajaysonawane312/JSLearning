console.warn(`1.--Find the index of Array Element--`);
const arrayNumbers = [1,-7,40, 502, -77, 91, 0, 108, 89, -601];
arrayNumbers.forEach((numbers, index) => {
    console.log(`index is: `,index, `Elements: `, numbers);
});
console.warn(`2.-----Find the Positive Numbers-----`);
arrayNumbers.forEach(numbers => {
    if(numbers>0)
    console.log(`Positive Numbers is: `, numbers);
});
console.warn(`3.----Find the Negative Numbers, add into new array----`);
    let newArray= [];
    arrayNumbers.forEach(numbers => {
        if (numbers<0) {
            newArray.push(numbers);
            //console.log(`Negative Numbers: `, numbers);
        }
});
console.log(`Negative Numbers: `, newArray);

console.warn(`4---Even Numbers Using forEach() with arrow Function---`);
let evenNum = 0;
let arrayEven = [];
arrayNumbers.forEach(numbers => {
    if (numbers%2==0) {
        arrayEven.push(numbers);
        // console.log(`Even Numbers: `, numbers);
    }
});
console.log(`Even Numbers: `, arrayEven);
console.warn(`5--------Sum of all elements from array_numbers--------`);
let sumOfElement = 0;
arrayNumbers.forEach(numbers => {
    sumOfElement=sumOfElement+numbers
});
console.log(`Sum of Elements: `, sumOfElement);
console.warn("6-----------Even index element in the array------------");
let arrayNum = [];
arrayNumbers.forEach((numbers, index) => {
    if (index%2==0) {
        arrayNum.push(numbers)
    }
});
console.log(`Even index Elements: `,arrayNum);