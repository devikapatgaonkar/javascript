class Employee {
    constructor(id,name,dept,salary,company){
        this.id = id,
        this.name = name,
        this.dept = dept,
        this.salary = salary,
        this.company = company
    }
    

}
 const empAnil = new Employee (22,"Anil","IT",50000,"TCS");
 const empRadha = new Employee (33,"Radha","HR",74000,"WIPRO");
 const empRishi = new Employee (55,"Rishi","Finance",47000,"TCS");
 const empSonali = new Employee (66,"Sonali","Finance",45000,"Infy");
 const empMonika = new Employee (77,"Monika","IT",40000,"WIPRO");
 const empViny = new Employee (88,"Vinayak","IT",75000,"TCS");
 const empMahi = new Employee (99,"Mahesh","HR",85000,"Infy");

 let arrayEmployees = [empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi];
console.log(`***NO1***`);
 for (const element of arrayEmployees) {
    if (element.company=="TCS") {
        console.log("Employee working in TCS company are:" ,"Name:",element.name,"Company:",element.company);
        
    }
    
 }
 console.log(`***NO2***`);
 for (const element of arrayEmployees) {
    if (element.dept=="Finance") {
        console.log("Employees working in finance Department are :", "Name:",element.name,"Department:",element.dept);
        
    }
    
 }

 console.log(`***NO3***`);
 
 for (const element of arrayEmployees) {
    if (element.name.startsWith("R")) {
        console.log("Employees Name Starting with R are " , "Name:",element.name,"ID:",element.id,"Department:",element.dept,"Salary:",element.salary,"Company:",element.company);
        
    }
    
 }

 console.log(`***NO4***`);

 for (const element of arrayEmployees) {
    if (element.salary>75000) {
        console.log( "Employees salary greater than 75000 are :","Name:",element.name,"Company:",element.company,"Salary:",element.salary)
    }
    
 }

 console.log(`***NO5***`);
 for (const element of arrayEmployees) {
    if (element.salary>=50000 && element.dept=="IT") {
        console.log( "Employees salary greater than or equal to 50000 and are from IT are :","Name:",element.name,"ID:",element.id,"Department:",element.dept,"Company:",element.company,"Salary:",element.salary)
    }
    
 }

 console.log(`***NO6***`);
 for (const element of arrayEmployees) {
    if (element.company=="Infy") {
        console.log( "Employees Details from Infy company are:","Name:",element.name,"ID:",element.id,"Department:",element.dept,"Company:",element.company,"Salary:",element.salary)
    }
    
 }