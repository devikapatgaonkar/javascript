class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]

console.log(`***NO1***`);
array_employees.forEach((employee)=>{
if (employee.emp_company=="TCS") {
    console.log(`Name of Employee:${employee.emp_name},Company name is : ${employee.emp_company}`);
}
})

console.log(`***NO2***`);
array_employees.forEach((employee)=>{
    if (employee.emp_salary>=50000) {
        console.log("Employee Details with Salary>=50000" ,employee);
    }
})

console.log(`***NO3***`);
let employeeSalary = 0;
array_employees.forEach((employee)=>{
employeeSalary= employeeSalary+employee.emp_salary
})
console.log("Sum of all employees salary is :",employeeSalary);


console.log(`***NO4***`);
let sumSalary = 0;
array_employees.forEach((element)=>{
    sumSalary = element.emp_salary+sumSalary;

})
let average = sumSalary/array_employees.length;
console.log("Average Salary of employee is :",average);


console.log(`Find HR & IT Employees Who has Salary >=75000`);
array_employees.forEach((employee)=>{
    if (employee.emp_dept=="HR"||"IT") {
        
    }if (employee.emp_salary>=75000) {
        console.log("Employees Details:",employee);
    }

})
