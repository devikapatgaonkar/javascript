console.log("***NO1***");

function stringHandsOn() {
    var string = "  Hey you're doing good keep it up  ";
    
    console.log(`Given string is:${string}`);
}
stringHandsOn();
var string = "  Hey you're doing good keep it up  ";
console.log("***NO2***");
var string1 = string.length
console.log(`Lenght of string:${string1}`);
console.log("***NO3***");
var string2 = string.trim();
var string3= string2.length
console.log(`After trim:${string2}`);
console.log(`Lenght of characteris:${string3}`);
console.log("***NO4***");
var string4 = string1-string3;
console.log(`Total number of spaces removed:${string4}`);
console.log("***NO5***");
var string5 = string2.charAt(0);
console.log(`First character:${string5}`);
var string6 = string2.charAt(31);
console.log(`Last character:${string6}`);
console.log("***NO6***");
var string7 = string2.split(" ")
console.log(`Total words in string:${string7.length}`);
console.log("***NO7***");
var string8 = string7.indexOf("good")
console.log(`Index of word good is: ${string8}`);
console.log("***NO8***");
var string9 = string2.substring(22);
console.log(`Substring of string at index 22: ${string9}`);
var string10 = string2.slice(22);
console.log(`Slice of string at index 22: ${string10}`);
console.log("***NO9***");
var string11 = string2.endsWith("up");
console.log(`String end with up: ${string11}`);
var string12 = string2.startsWith("Hey");
console.log(`String start with Hey: ${string12}`);