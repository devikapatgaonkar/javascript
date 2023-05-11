console.log("***NO1***");

function name(){
    console.log("Devika");
}
name();
function fullName() {
    console.log("Devika Patgaonkar");
}
fullName();

console.log("***NO2***");
function personalDetails(firstName,lastName,collegeName){
console.log("My Personal Details:");
console.log("My Name :",firstName,"My Surname :",lastName,"My college name:",collegeName);
}
personalDetails( "Devika","Patgaonkar","Bharathi Vidyapeeth")

console.log("***NO3***");
 var x = "virat";
 var y = "Anuksha";
 
 var one = 1000;
 var two = 2000;
 function swapValueDude(numOne,numTwo){
    console.log("Before Swap:",numOne,numTwo);
    var temp = numOne;
    var numOne = numTwo;
    var numTwo = temp;
console.log("After Swap:",numOne,numTwo);
 }
 swapValueDude(x,y);
 swapValueDude(one,two);

 console.log("***NO4***");
 function addThreeValues(valueOne,valueTwo,valueThree){
    var result = valueOne+valueTwo+valueThree
    console.log("Addition is :",result);
 }
 addThreeValues(10.23,40,600);
 addThreeValues("Hello","Good","Morning")