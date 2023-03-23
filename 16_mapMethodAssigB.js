class Employee {
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }  
}
const emp_Anil= new Employee(22,"Anil","IT",50000,"TCS");
const emp_Radha= new Employee(33,"Radha","HR",74000,"Wipro");
const emp_Rishi= new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_Soni= new Employee(66,"Soni","Finance",45000,"Infy");
const emp_Moni= new Employee(77,"Moni","IT",40000,"Wipro");
const emp_Viny= new Employee(88,"Viny","IT",75000,"TCS");
const emp_Mahi= new Employee(99,"Mahi","HR",85000,"Infy");

const newArray = [emp_Anil,emp_Radha,emp_Rishi,emp_Soni,emp_Moni,emp_Viny,emp_Mahi];
console.warn(`1.-------------Get The List All Name of Employees--------------`);
const arrayName = newArray.map(employee =>employee.emp_name)
console.log(arrayName);
console.warn(`2.------------Get The List All Name of Department--------------`);
const arrayDept = newArray.map(employee =>employee.emp_dept)
console.log(arrayDept);
console.warn(`3.-------------Get The List All of Employees Id's--------------`);
const arrayId = newArray.map(employee =>employee.emp_id)
console.log(arrayId);
console.warn(`4.--------Get The List of Employee Name Working in TCS---------`);
const arrayComp = newArray.map(employee =>{
  if(employee.emp_company=="TCS"){
    console.log(`Emp Name: ${employee.emp_name},`,`Company: ${employee.emp_company}`);
  } 
})
// console.log(arrayComp);x

// arrayComp.forEach(employee => {
//   console.log(employee.emp_name);
// })
