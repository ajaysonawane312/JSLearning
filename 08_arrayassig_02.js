console.log(`Assignment 02.---------------------------------------------------`);
const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]
console.log(`Given Elements:`, arrayNumbers);
console.log(`1.---------------Total Length of Given Elements------------------`);
let totalLength = arrayNumbers.length;
console.log(`--> Total Length of Elements is:`, totalLength);
console.log(`-----------------------------------------------------------------`);
console.log(`2.--------------First Element and Last Element-------------------`);
let firstElement = arrayNumbers[0];
console.log(`--> First Element is: `, firstElement);
let lastElement = arrayNumbers.slice(-1);
console.log(`--> Last Element is: `, lastElement);
console.log(`-----------------------------------------------------------------`);
console.log(`3.----------Thirst Last Element using Length Property------------`);
let thirdLastElement = arrayNumbers[arrayNumbers.length-3];
console.log(`--> Thirst Last Element is: `, thirdLastElement);
console.log(`-----------------------------------------------------------------`);
console.log(`4.--------------Find the All Even Elements-----------------------`);
let evenElements=[];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if(element%2==0){
        evenElements = evenElements.concat(element);
    }  
}
console.log(`--> Even Elements: `, evenElements);
console.log(`-----------------------------------------------------------------`);
console.log(`5.--------------Find the All Odd Elements------------------------`);
let oddElements=[];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if(element%2!=0){
        oddElements = oddElements.concat(element);
    }  
}
console.log(`--> Odd Elements: `, oddElements);
console.log(`----------------------------------------------------------------------------------------------`);
console.log(`6.---------------------------------Even Position of Elements----------------------------------`);
let evenPosition = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 == 0) {
    evenPosition = evenPosition.concat(arrayNumbers[index]);
 }
}
let sumEvenPosition =0;
for (let index = 0; index < evenPosition.length; index++) {
    const element = evenPosition[index];
    sumEvenPosition = sumEvenPosition + element;
    
}
console.log(`--> All even position Elements is : ${evenPosition} and Sum of All Even Position is: ${sumEvenPosition}`);
console.log(`----------------------------------------------------------------------------------------=-----`);
console.log(`7.-----------------------------------Odd Position of Elements---------------------------------`);
let oddPosition = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 != 0) {
    oddPosition = oddPosition.concat(arrayNumbers[index]);
  }
  }
let sumOddPosition =0;
for (let index = 0; index < oddPosition.length; index++) {
    const element = oddPosition[index];
    sumOddPosition = sumOddPosition + element;
    
}
console.log(`--> All Odd position Elements is : ${oddPosition} and Sum of The All Odd Position: ${sumOddPosition}`);

console.log(`----------------------------------------------------------------------------------------------`);
console.log(`8.----------------------Sum of All Elements----------------------`);
let sumElements = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sumElements = sumElements + element
    
}
console.log(`--> Sum of All Elements is: `, sumElements);
console.log(`-----------------------------------------------------------------`);
console.log(`9.-----------Find the Numbers which are Multiple of 5------------`);
let multiple = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%5==0) {
        multiple = multiple.concat(element);
    }  
}
console.log(`--> Multiple of 5 Elements is: `, multiple);
console.log(`------------------------------------------------------------------------------`);
console.log(`10.-----------------Check the 115 Element is Available in Array---------------`);
console.log(`Given Elements in the Array: `, arrayNumbers);
let isAvailable = arrayNumbers.includes(115);
console.log(`--> Is 115 Element is Available in Array: `, isAvailable);
console.log(`------------------------------------------------------------------------------`);
console.log(`11.----------Check the 23 Element is Available in Array-----------------------`);
console.log(`Given Elements in the Array: `, arrayNumbers);
let checkAvailable = arrayNumbers.includes(23);
console.log(`--> Is 23 Element is Available in Array: `, checkAvailable);
console.log(`----------------------------------------------------------------------------------------------`);
console.log(`12.-----------------------Insert Element: 55, 66 Before Index 3-------------------------------`);
console.log(`Given Elements in the Array: `, arrayNumbers);
let insertElement = arrayNumbers.splice(3,0,55,66);
console.log(`--> Insert Element 55, 66 Before Index 3 :`, arrayNumbers);
console.log(`-----------------------------------------------------------------------------------------------`);
console.log(`13.---------------------------Delete 3 Elements Starting from Index 4--------------------------`);
console.log(`Given Elements in the Array: `, arrayNumbers);
let deleteElement = arrayNumbers.splice(4, 3);
console.log(`--> Delete 3 Elements Starting from Index 4:`, arrayNumbers);
console.log(`-----------------------------------------------------------------------------------------------`);