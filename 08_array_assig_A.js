console.log(`Assignment A.--------------------------------------------Using Array----------------------------------------------------`);
console.log(`--------------------------------------------Array Elements of Fruits----------------------------------------------------`);
const arraySeasonlFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"]
console.log(`List of Fruits: `,arraySeasonlFruits);
console.log(`------------------------------------------------------------------------------------------------------------------------`);
console.log(`1.----------------------------------------------First And Last Element--------------------------------------------------`);
console.log(`First Element is: ${arraySeasonlFruits[0]}`);
let lastElement = arraySeasonlFruits.slice(-1)
console.log(`Last Element is: ${lastElement}`);
console.log(`------------------------------------------------------------------------------------------------------------------------`);
console.log(`2.--------------------------------------------Add Element 'Papaya' Before Banana----------------------------------------`);
// console.log(arraySeasonlFruits);
console.log(`Before Adding Papaya :`, arraySeasonlFruits);
var addElement = arraySeasonlFruits.splice(0, 0, 'Papaya')
console.log(`After Adding 'Papaya':`, arraySeasonlFruits);
console.log(`------------------------------------------------------------------------------------------------------------------------`);
console.log(`3.------------------------------------------Remove 'Mango' from the Array-----------------------------------------------`);
console.log(`Before Removing 'Mango':`,arraySeasonlFruits);
var removeElement = arraySeasonlFruits.splice(4,1)
console.log(`After Removing 'Mango':`, arraySeasonlFruits);
console.log(`------------------------------------------------------------------------------------------------------------------------`);
console.log(`4.----------------------------------Add or Insert an Element 'Pineapple' at Last Position-------------------------------`);
console.log(`Before Insert an Element 'Pineapple' is :`, arraySeasonlFruits);
var addLastElement = arraySeasonlFruits.push("Pineapple");
console.log(`After Insert an Element 'Pineapple' is :`, arraySeasonlFruits);
console.log(`------------------------------------------------------------------------------------------------------------------------`);
console.log(`5.-------------------------------- Insert an element "Dragon Fruit" before "WaterMelon"---------------------------------`);
console.log(`Before Adding Dragon Fruit :`, arraySeasonlFruits);
arraySeasonlFruits.splice(4,0,"Dragon Fruit");
console.log(`After Adding Dragon Fruit :`,arraySeasonlFruits);
console.log(`------------------------------------------------------------------------------------------------------------------------`);
console.log(`6.---------------------------------------------Replace "Orange" with "Kiwi"---------------------------------------------`);
console.log(`Before Replace :`, arraySeasonlFruits);
arraySeasonlFruits.splice(2,1,"Kiwi");
console.log(`After replace :`, arraySeasonlFruits);
console.log(`------------------------------------------------------------------------------------------------------------------------`);
console.log(`7.------------------------------------Log the elements starting from 1 to 4---------------------------------------------`);
console.log(`List of Array Element is :`, arraySeasonlFruits);
let sliceResult=arraySeasonlFruits.slice(1,5);
console.log(`Elements From index 1 to 4 is :`, sliceResult);
console.log(`------------------------------------------------------------------------------------------------------------------------`);
console.log(`8.----------------------Only Select Last 3 Elements and log on console : Use the Length Property------------------------`);
console.log(`List of Array Element is :`, arraySeasonlFruits);
let lastThreeElements=(arraySeasonlFruits.slice(arraySeasonlFruits.length-3));
console.log(`Last Three Elements in the Array is :`, lastThreeElements);