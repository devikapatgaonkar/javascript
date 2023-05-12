console.log("***NO1***");

function stringHandsOn() {
    var string = "  Hey you're doing good keep it up  ";
    
    console.log("Given string is:",string);
}
stringHandsOn();
var string = "  Hey you're doing good keep it up  ";
var string1 = string.length
console.log("Lenght of string:",string1);
var string2 = string.trim();
var string3= string2.length
console.log("After trim:",string2);
console.log("Lenght of character is:",string3);
var string4 = string1-string3;
console.log("Total number of spaces removed:",string4);
var string5 = string2.charAt(0);
console.log("First character:",string5);
var string6 = string2.charAt(31);
console.log("Last character:",string6);