class Vehicle {
    constructor(vehicleName, color, type, model, year){
       this.vehicleName = vehicleName;
       this.color = color;
       this.type = type;
       this. model = model;
       this.year = year;
    }
}
console.warn(`1.-------------------------Define class Vehicle with data members and constructor------------------------`);
const vehicleBmw = new Vehicle("BMW", "Black", "Four Wheeler", "BMW X7", 2022);
console.log(vehicleBmw);
const vehicleNexon = new Vehicle("Nexon", "White", "Four Wheeler", "TATA", 2023);
console.log(vehicleNexon);
const vehicleYamaha = new Vehicle("R15", "Red", "Two Wheeler", "Yamaha", 2020);
console.log(vehicleYamaha);
const vehicleAudi = new Vehicle("Audi", "White", "Four Wheeler", "Audi e-tron GT", 2023);
console.log(vehicleAudi);
const vehicleUnicorn = new Vehicle("Unicorn", "Black", "Two Wheeler", "Honda", 2013)
console.log(vehicleUnicorn);

console.warn(`1.1 -------------------------Add In to the Array and Traverse using for of---------------------------------`);

let arrayOfVehicle =[vehicleBmw, vehicleNexon, vehicleYamaha, vehicleAudi, vehicleUnicorn];
for (const elements of arrayOfVehicle) {
   console.log(`Vehicle Details:`,[elements.vehicleName, elements.color, elements.type, elements.model, elements.year]);
}

console.warn(`2. -------------------------Define class Vehicle with data members and constructor-------------------------`);
class College {
    constructor(collegeName, department, location, naacGrade){
         this.collegeName = collegeName;
         this.department = department;
         this.location = location;
         this.naacGrade = naacGrade;
    }
}
let collegeMd = new College("Mudhoji College", "Computer Science", "Phaltan", "A++");
console.log(collegeMd);
let collegeKs = new College("Krishna College", "Business Management", "Karad", "A+" );
console.log(collegeKs);
let collegeTc = new College("TC College", "Library Science", "Baramati", "A");
console.log(collegeTc);
let collegeSvpm = new College("SVPM College", "Engineering", "Malegaon", "A++");
console.log(collegeSvpm);

console.warn(`3.-----------------------------Traverse using for in with one Argument--------------------------------------`);

  function traverseObject(collegeDetails) {
    for (const key in collegeDetails) {
      if (Object.hasOwnProperty.call(collegeDetails, key)) {
        const element = collegeDetails[key];
        console.log(`${key} : ${element}`);
      }
    }
  }
  traverseObject(collegeMd);
  console.log(`-------------------------------------------------------------------------------------`);
  traverseObject(collegeKs);
  console.log(`-------------------------------------------------------------------------------------`);
  traverseObject(collegeTc);
  console.log(`-------------------------------------------------------------------------------------`);
  traverseObject(collegeSvpm);

console.warn(`4.-----------------------Find Given Number is Prime or Not------------------------------`);

function chkPrime(n)
{
    if(n == 1 || n == 0) 
    return false;
    for(var i = 2; i < n; i++)
    {
    if(n % i == 0) 
    return `Not Prime Number`;
    }
    return `Prime Number`;
}
let result = chkPrime(11);
console.log(`Given Number 11 is: `, result);
// var num = 100;
// // check for every number from 1 to num
// for(var i = 1; i <= num; i++)
// {
//    // check if current number is prime
//    if(chkPrime(i)) {
//     console.log( i );
//    }
// }