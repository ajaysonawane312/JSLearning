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

array_emps=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinayak,emp_mahesh];

console.warn(`1.----------Find out All the Employee from TCS-----------------`);
var empCompany=array_emps.filter((employee) =>{
    return employee.emp_company=="TCS";
});
empCompany.forEach((employee) => {
    console.log("Company:", employee.emp_company,"|","Emp Name:",employee.emp_name, );
});

console.warn(`----------------------------------------------------------------`);
const empSalary = array_emps.filter((employee) =>{
    return employee.emp_company=="Wipro"
});
let salAvg=0;
empSalary.forEach((employee)=>{
    salAvg=salAvg+employee.emp_salary;
})
console.log(`2. Average Salary of Employees from Wipro --> ${salAvg/empSalary.length}`);
console.warn(`----------------------------------------------------------------`);
const employeeSal = array_emps.filter((employee)=>{
    return (employee.emp_company=="Wipro" || employee.emp_company=="Infy")

});
let avgsal = 0;
employeeSal.forEach((employee)=>{
    return avgsal=avgsal+employee.emp_salary;
})
console.log(`3. Average Salary of Employees from Wipro and Infy --> ${avgsal/employeeSal.length}`);