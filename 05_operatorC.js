console.log(`***NO1***`);

function isEligbleForMarriage(gender,age,boyName){
    var result = gender = "male" &&  age>=21 ? "Is Eligible for Marriage" :"Not Eligible for Marriage";
    console.log(`${boyName} ${result}`);
    return result
}

var result1 = isEligbleForMarriage("male",25,"Billgates");
var result2 = isEligbleForMarriage("male",17,"Steve Jobs");

console.log(`***NO2***`);

function femaleMarriageEligibility(gender,age,girlName){
    var result = gender = "female" &&  age>=18 ? "Is Eligible for Marriage" :"Not Eligible for Marriage";
    console.log(`${girlName} ${result}`);
    return result
}
var result3 = femaleMarriageEligibility("female",16,"jennifer");
var result4 = femaleMarriageEligibility("female",27,"Malinda Gates")