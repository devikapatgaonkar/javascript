console.log("***NO1***");
var square = function(num1) {
var square1 = num1*num1;
console.log(`Square of given number is: ${square1}`);
}
var square2 = square(5);
var square3 = square(6);
var square4 = square(25);
var square5 = square(100);
console.log("***NO2***");
console.log(`Type of function: ${typeof square}`);
console.log("***NO3***");
var areaOfPlot = function(lenght,breadth) {
    var area = lenght*breadth;
    console.log(`Area of rectangular plot: ${area}`);
}
var area1 = areaOfPlot(499,917);
console.log("***NO4***");
var swapValue = function(num1,num2) {
    console.log("Before swap:",num1,num2);
    var temp = num1;
    var num1 = num2;
    var num2 = temp;
    console.log("After swap:",num1,num2);
}
console.log('***NO4.2***');
var swapValue1 = swapValue("virat","Anuksha");
console.log("***NO4.3***");
var swapValue2 = swapValue(1000,2000);

console.log("***NO5***");
var string = function() {
    var string1 = "JS the most popular language of internet";
    console.log(`Given string is: ${string1}`);
    console.log("***NO5.1***");
    var string2 = string1.length;
    console.log(`Lenght of string is: ${string2}`);
    console.log("***5.2***");
    var string3 = string1.charAt(5);
    console.log(`Index at no 5 is: ${string3}`);
    console.log("***NO5.3***");
    var string4 = string1 .charAt(11);
    console.log(`Index at no 11 is: ${string4}`);
    console.log("***NO5.4***");
    var string5 = string1.charAt(39);
    console.log(`Character at last of string is : ${string5}`);
    console.log("***5.5***");
    var string6 = string1.charAt(0)
    console.log(`Character at first of string is: ${string6}`);
    console.log("***5.6***");
    var string7 = string1.split(" ");
    var string8 = string7.length;
    console.log(`Total number of words are: ${string8}`);
    var string9 = string8*string8;
    console.log(`Square of total number of words is : ${string9}`);


}
var string2 = string();
