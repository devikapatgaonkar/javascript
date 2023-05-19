function voteEligibility(age) {
    if (age == null || age == undefined || age<0 || age>90 ) {
      console.log(`Your data is invalid: ${age}`);  
    } else { if (age<18) {
        console.log(`You are not eligible for voting: ${age}`);
    } else { if (age>=18) {
        console.log(`You are eligible for voting: ${age}`);
    } else {
        
    }
        
    }
        
    }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(0);
voteEligibility(200);
voteEligibility(null);
voteEligibility(undefined)













function gradeCalculation(marks){
    
    if (marks==undefined || isNaN(marks) || marks<=0 || marks>100) { // undefined, null
        console.log(`Invalid marks: ${marks}`);
    } else {
       
       if (marks>=90) {
            console.log(`Fantastic marks : ${marks}, Your grade is A+`);
       } else { if (marks>=70 && marks<90) {
        console.log(`Excellent mark: ${marks},your grade is A`);
       } else { if (marks>=50 && marks<70) {
        console.log(`Good mark: ${marks},your grade is B`);
       } else { if (marks>=35 && marks<50) {
        console.log(`Marks is: ${marks} your grade is C,Needs improvement`);
       } else {
        
       }
        
       }
        
       }
        
       }
    }

    
}
// Handling invalid inputs
gradeCalculation(undefined);
gradeCalculation(null);
gradeCalculation(NaN);

gradeCalculation("Karthik");
gradeCalculation(-10);
gradeCalculation(120);

// Valid input
gradeCalculation("20");

gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("eighty");
gradeCalculation(undefined);
gradeCalculation(null);




