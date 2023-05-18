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