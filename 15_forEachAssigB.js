class Employee {
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }  
}
const emp_anil= new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha= new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi= new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali= new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika= new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny= new Employee(88,"Viny","IT",75000,"TCS");
const emp_mahesh= new Employee(99,"Mahesh","HR",85000,"Infy");

array_employees=[emp_anil, emp_radha, emp_rishi,emp_sonali,emp_monika, emp_viny,emp_mahesh];
console.warn(`1-------TCS Employee details only Employee Name and Company-------`);
array_employees.forEach(employee => {
    if (employee.emp_company=="TCS") {
        console.log(`Employee Name:`, employee.emp_name, `Company Name: `,employee.emp_company);
    }
});
console.warn(`2.----------Salary greater than or equal to 50000 and log employee details on console-----------`);
array_employees.forEach(employee => {
    if (employee.emp_salary>=50000) {
        console.log(employee);
    }
});
console.warn(`3--------------------Find the sum of all employee salary and log on console----------------------`);
let totalSalary = 0;
array_employees.forEach((employee) => {
    totalSalary = totalSalary+employee.emp_salary;
});
console.log(`Sum of All Employee Salary is : `,totalSalary);

console.warn(`4--------------------Find the Avarge Salary and log on console-----------------------------------`);
var avarageSalary=0;
array_employees.forEach((employee)=>{
    avarageSalary=totalSalary/array_employees.length;
});
console.log(`Total Salary Average is: ${avarageSalary}`);

console.warn(`5-----------------Find the "IT" or "HR" department employess whose salary is >=75000-------------`);
array_employees.forEach((employee)=>{
    if((employee.emp_dept=="IT"||employee.emp_dept=="HR")&&(employee.emp_salary>=75000))
    {
        console.log(employee);
    }
});