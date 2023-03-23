console.warn(`---------------------------forEach Map---------------------------`);
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
const mapEmployees = new Map();
mapEmployees.set(22, emp_Anil);
mapEmployees.set(33, emp_Radha);
mapEmployees.set(55, emp_Rishi);
mapEmployees.set(66, emp_Soni);
mapEmployees.set(77, emp_Moni);
mapEmployees.set(88, emp_Viny);
mapEmployees.set(99, emp_Mahi);

mapEmployees.forEach((key)  => {
    // console.log(`${employee.emp_id}`,"====>", `Emp Name: ${employee.emp_name},`,`Dept: ${employee.emp_dept},`,`Company: ${employee.emp_company},`,`Salary: ${employee.emp_salary}`);
    console.log(key.emp_id,`===>`, key);
});
