const arrayNums=[20,3,4,56,90,400,49];
console.log(`Original Array is:`,arrayNums);

console.warn(`1.------------Shallow Clone and update the array with Values 55, 66 Using push()--------------`);
let array=arrayNums;
array.push(55,66);
console.log( `shallow Clone array updating: `,array);

console.warn(`2.------------Deep clone using spread operator Update Array with values 10, 25----------------`);
let arrayClone =[...arrayNums];
console.log(`Deep clone array is:`,arrayClone);
arrayClone.push(10,25);
console.log(`Original Array Updation is:`,arrayClone);

console.warn(`3.--------Merge and concat the Array using spread operator (arrayEven and arrayNums)----------`);
const arrayEven=[2,30,14,8];
console.log(`Even Array Element: `, arrayEven);
let operator=[...arrayEven,...arrayNums];
console.log(`Merge or Concat arrayEven and arrayNums:`, operator);


console.warn(`4.-------------------------------------Employee Details----------------------------------------`);
const employee_info={
    emp_id:27,
    emp_name:"john Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"      
   },
   address:{
    locality:{
        colony:"Om Vrindavan Society",
        street:"Kanch Pokali,411202"
    },
    city:"Mumbai",
    State:"Maharashtra",
    Country:"India"
    },
    mobiles:["+918600345688","1800-4567 32","+91- 9096 5678 77"]
}

let employeeDetails = [employee_info.address.locality.colony, employee_info.address.locality.street, employee_info.address.city, employee_info.address.State, employee_info.address.Country];
console.log(`4.1. Employee Address Details:`, employeeDetails);
console.log(`4.2. Employee Mobile Numbers :`,employee_info.mobiles);
console.warn(`5.------------------------------Perform Deep Copy Using JSON.stringify()--------------------------------`);
const newEmployee = {...employee_info}
console.log(`---> Deep Clonning:`, newEmployee.emp_id, newEmployee.emp_name, newEmployee.salary, newEmployee.address.locality, newEmployee.mobiles);
console.log(`---> Monthly Salary is :`,newEmployee.salary);
let deepCopy=JSON.parse(JSON.stringify(newEmployee));
deepCopy.salary.july_month="80 0000INR";
console.log(`5.1 Update July Month salary is:`,deepCopy.salary);

console.log(`---> Country is:`, newEmployee.address.Country);
deepCopy.address.Country="United Kingdom";
console.log(`5.2. Updated country:`,deepCopy.address.Country);
console.log(`5.3. Values of Original Objects:`,[newEmployee.emp_id, newEmployee.emp_name, newEmployee.salary.july_month, newEmployee.address.Country]);


console.log(`5.4. Cloned object updated values:`, [deepCopy.emp_id, deepCopy.emp_name, deepCopy.salary.july_month, deepCopy.address.Country]);
