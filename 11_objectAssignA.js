


let professor = {
    name: "Rutuja",
    age: "52yrs",
    
    graduated: "Banaras University",
    postgraduation: "Mumbai University",

    degrees : {
        engineering: "CSC",
        phd : "Adv.Computing" ,
        diploma: "Web.Designing",

    },
    certificate :["Hacker Rank Participation","Certificate in IFE course","Certificate in Advance Programming"],


    professorDetails: function () {
        let detail = `Engineering : ${professor.degrees.engineering}, PHD : ${professor.degrees.phd}, Diploma: ${professor.degrees.diploma} `;
        

       
        return detail;
    }
};

console.log(`***Add a function with return value***`);
let professional = professor.professorDetails()
console.log(`Teacher degrees & Total degreees are : ${professional}`);
var result =professor.degrees.engineering.split(" ");
var resultLength = result.length
var result1 =professor.degrees.phd.split(" ");
var result1Length = result1.length

var result2 = professor.degrees.diploma.split(" ");
var result2Length = result2.length

var result3 = resultLength+result1Length+result2Length;
console.log(`Total Degrees are :${result3}`);


console.log(`***Add new property in total experience as 14 yrs***`);

professor.experience = "14 years"
//console.table(professor);
console.log(`Total experience is : ${professor.experience}`);

console.log(`***Modify existing Property***`);
console.log(`Before Modification`);
console.log(professor);
professor.age = 50;
console.log(`After modification`);
console.log(professor);
console.log(`***add array***`);
console.log(`Before Modification`);
console.log(professor.certificate);
let professionalCertificate =professor.certificate.push("ORACLE Certificate")
console.log(`After Modification`);
//console.log(professionalCertificate);
console.log(professor.certificate  );
console.log(`***log Last three element***`);

let lastElement = professor.certificate.slice(3)
console.log(lastElement);





