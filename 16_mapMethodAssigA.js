const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.warn(`1.--------------------------Add 10 in to Each Element-------------------------`);
console.log(`Given Array is:`, arrayNumbers);
const arrayNew = arrayNumbers.map(numbers =>{
    return numbers + 10;
})
console.log(`Add 10 Element:`,arrayNew);

console.warn(`2.-----------------------Square the Each Array Element------------------------`);
const arraySquare = arrayNumbers.map(numbers =>{
    return numbers ** 2;
})
console.log(`Given Array is:`, arrayNumbers);
console.log(`Square of Element:`,arraySquare);

console.warn(`3.---------------------Add Index Value Each Array Element---------------------`);
const arrayAddIndex = arrayNumbers.map((numbers, index)=>{
    return numbers + index;
})
console.log(`Given Array is:`, arrayNumbers);
console.log(`Add Index value:`,arrayAddIndex);