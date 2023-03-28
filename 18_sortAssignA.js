const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`Given Array : `,arrayRollNumbers);
console.warn(`1.-----------------------------Reverse Array--------------------------`);
const arrayReverse = arrayRollNumbers.reverse();
console.log(`Reverse Array:`,arrayReverse);
console.warn(`2.-----------------Sort() Without any custom sorting logic------------`);
const arraySort = arrayRollNumbers.sort();
console.log(`Sort Array :`, arraySort);
console.warn(`3.-------------Sort Array Assending Order writing custom logic--------`);
const newArraySort = arrayRollNumbers.sort((a, b) =>{
   return a > b ? 1 : -1
        
})
console.log(`Sort Assending Order :`, newArraySort);
console.warn(`4.----------------Find the Greatest Number From the Array-------------`);
const greatestNum = newArraySort.slice(-1);
console.log(`Greatest Number is: ${greatestNum}`);
console.warn(`5.----------------Find the Smallest Number From the Array-------------`);
const smallestNum = newArraySort[0];
console.log(`Smallest Number is: ${smallestNum}`);
console.warn(`6.-------------Remove the Duplicate Element From the Array------------`);
console.log(`Given Array : `,arrayRollNumbers);
const removeDuplicate = [...new Set(arrayRollNumbers)];
console.log(`Remove Duplicate Elements :`, removeDuplicate);