var num1;//
num1 = num1++; // undefined + 1 ==> NaN
console.log(`${num1}, type of NaN is ${typeof num1}`);

console.log(`${0/0}`);

var numTwo = "200";
numTwo = numTwo++; // 200 + 1
console.log(`${numTwo}`);

var num3 = "Ten";// "10" ==> 10
num3 = --num3; 
console.log(`${num3}`);

var city = "Pune";
var result = +city;
console.log(`${result}`);

var num5 = "100";
var result = +num5;
console.log(`Result is ${result} and it's type is: ${typeof result}`);
console.log(`${3-"2"}`);




for (let index = 0; index <= 10; index++) { // index = 11
    console.log(index); // 0 1  2 ... 10 
}
console.log("After loop");

// WAP to get table for 5 ==> 5   10   15   20  25  30   ---- 50
for (let index = 5; index <=50; index=index+5) { // index = 11
    console.log(index); // 0 1  2 ... 10 
}
console.log("After loop");




for (let index =100; index >= 80; index-1) {
    
    
}
console.log("After loop");
for (let index = 17; index <= 170; index= index+17) {
    console.log(index);
    
}


console.log("After loop");
for (let index = 190; index>=19; index= index-19) {
    console.log(index);
    
}
for (let index = 8; index <=80 ; index = index+8) {
    console.log(index);
    
}




// JavaScript = J a v a S c r  i  p  t
var str = "JavaScript"; // 9
for (let index = 0; index < str.length; index++) { // 0  1   2
     var char = str.charAt(index); // J  a v
     console.log(char); 
}






// WAP to reverse the string --> JavaScript --> tpircSavaJ
// JavaScript -->
// initialization = 9
// condition index>=0
// update expression index--
var str = "JavaScript";
var reverseString = "";
for (let index = 9; index >= 0; index--) { // index = 9  8 
    var char = str.charAt(index);
    reverseString = reverseString.concat(char); 
}
console.log(reverseString);



function reverseWord(word){
    var reverseString = "";
    var wordLength = word.length - 1;
    for (let index = wordLength; index >= 0; index--) { // index = 9  8 
        var char = word.charAt(index);
        reverseString = reverseString.concat(char);    
    }
console.log(reverseString);
}
reverseWord("JavaScript");
reverseWord("Google Chrome");
reverseWord("Developer");


//var string = how are you doing;
//25var result = Doing Yor are how;

