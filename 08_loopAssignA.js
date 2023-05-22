console.log(`***NO1***`);
var string = "I am very good IT developer";
var count =0;
var word = string.toLowerCase("I am very good IT devloper")
console.log(`Given string is:${string}`);
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index)
 
  if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ) {
    
    count++
  }
    
}

console.log(`Count total vowels: ${count}`);


console.log(`***NO2***`);

function cube()
{ 
  var sum=0
  
  for (let index = 1; index<=5; index++) {
    
     result=(index*index*index); 
     sum=result+sum;
}

console.log( `sum of cube of number: ${sum}`);  

}
cube();



//console.log(`***NO3***`);
//var s = "india"
//for (let index= 0; index < s.length-1; index++) {
  //if (index%2!==0) {
   // console.log(s[index]);
  //}
//}


console.log(`***NO3***`);
function odd (s) {
  var word="";
  varchar=s.charAt();
  for (let index = 0; index < s.length; index++) {
    var char = s.charAt(index);
    if (index%2!==0 && char!=" ") {
    //  console.log(s[index]);
     var r= s[index];
     word=word+r;
     
    }
    
  }
      //console.log(`Given string is : "${s}"`);
      //console.log(`Odd Positions character :  "${word}"`);
}
odd("Hard work always pays back");
odd("Soon I will be Angular IT Champ");

function oddPosition(str){
  var word = 0;
  for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    if (index%2!==0 && char!=" ") {
      word = word+char
    }
    
  }
  console.log(word);
}
oddPosition("Hard work always pays back")





//var reverseString = "";//ar wordLength = word.length - 1;
//for (let index = wordLength; index >= 0; index--) { // index = 9  8 
 //   var char = word.charAt(index);
 //   reverseString = reverseString.concat(char);    
//}