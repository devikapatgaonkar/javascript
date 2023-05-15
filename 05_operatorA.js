console.log("***NO1***");
function squareOfWordLength(string){
    var length = string.length;
    console.log(`Length of word: ${length}`);
    var squareLength = length*length;
    console.log(`Square length of given word is: ${squareLength}`);
}
console.log("Given string is : JavaScript");
squareOfWordLength("JavaScript");
console.log("Given string is : Google Chrome");
squareOfWordLength("Google Chrome");
console.log("Given string is : Devloper Smart");
squareOfWordLength("Devloper Smart");

console.log("***NO2***");
function word() {
    var string = "I am Angular Devloper";
    console.log(`Given string is : ${string}`);
    var lengthOne = string.length;
    var wordsInString = string.split(" ");
    var wordsInString1 = wordsInString.length
    var division = lengthOne / wordsInString1;
    console.log(`Division of string length with words is : ${division}`);
    var multiplication = lengthOne * wordsInString1;
    console.log(`Multiplication of length with word in string is : ${multiplication}`);
}
word()