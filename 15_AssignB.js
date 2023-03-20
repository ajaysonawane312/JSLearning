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
const emp_vinayak= new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahesh= new Employee(99,"Mahesh","HR",85000,"Infy");

array_employees=[emp_anil, emp_radha, emp_rishi,emp_sonali,emp_monika, emp_vinayak,emp_mahesh];

console.warn(`1.-------Find all employees from TCS company-------`);
for (const employee of array_employees) {
    if(employee.emp_company=="TCS"){
       console.log(`Employee Name:`, employee.emp_name, `Company Name: `,employee.emp_company);
    }
}
console.warn(`2.-------- Find the Finance Dept. employees --------`);
for (const empComp of array_employees) {
    if (empComp.emp_dept=="Finance") {
        console.log(`Department: `,empComp.emp_dept,",", `Employee Name: `,empComp.emp_name);
    }
}
console.warn(`3.--------------------- Find the Employee Whoes Name Start With 'R' ----------------------`);
for (const nameEmployee of array_employees) {
    if (nameEmployee.emp_name.startsWith("R")) {
        console.log(nameEmployee);
    }
}
console.warn(`4.------------------ Find the Employee Whoes Salary Greater than 75000 -------------------`);
for (const empSalary of array_employees) {
    if (empSalary.emp_salary>75000) {
       console.log(`Emp Name:`,empSalary.emp_name, `Company:`,empSalary.emp_company, `Emp Salary:`,empSalary.emp_salary); 
    }
}
console.warn(`5.--------------- Find the Employee Whoes Salary Greater than Equal 50000 ----------------`);
for (const employeeSalary of array_employees) {
    if (employeeSalary.emp_salary>=50000 && employeeSalary.emp_dept=="IT") {
       console.log(employeeSalary); 
    }
}
console.warn(`6.---------------------------Find all employees from Infy company-------------------------`);
for (const companyName of array_employees) {
    if(companyName.emp_company=="Infy"){
       console.log(companyName);
    }
}