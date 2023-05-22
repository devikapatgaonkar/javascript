//WAp to get 100 to 80 in reverse order by decrementing 1
// 100,99,98------

for (let index = 100; index >= 80; index--) {
   console.log(index);
    
}
console.log(`After Loop`);




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



//var string = how are your doing;
//25var result = Doing Your are how;


//swap without third variable

var num1 = 100;
var num2= 200;
var num1 = num1+num2;
var num2 = num1-num2;
var num1 = num1 - num2;
console.log(`num1:${num1}  num2:${num2}`);

//WAP to get table of 5;
for (let index = 5; index <= 50; index = index+5) {
    console.log(index);
    
}
console.log(`After Loop`);


//WAP to get the table of 17
for (let index = 17; index <=170; index= index+17) {
    console.log(index);
    
}
console.log(`After Loop`);

//WAP to get table of 19 in reverse order
for (let index = 190; index >=19; index = index-19) {
    console.log(index);
    
}

console.log(`After Loop`);

 //WAP to get table of 8;
 for (let index = 8; index <=80; index=index+8) {
    console.log(index);
      
 }
 console.log(`After loop`);

 var str = 'JavaScript';
 for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
  //console.log(char);
 }
 //console.log(`After Loop`);

//var word = 'JavaScript';
var reverseString ="";
for (let index = word.length-1; index >=0; index--) {
  var char = word.charAt(index);
  reverseString = reverseString.concat(char)
  //console.log(char);
}
//console.log(reverseString);


