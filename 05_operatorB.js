console.log(`***NO1***`);
var greaterNumber = function (num1,num2) {
    var great = num1>=num2 ? `${num1}`:`${num2}`
    console.log(`greater number is : ${great}`);
}
var great1 = greaterNumber(10,-10);
var great2 = greaterNumber(800,899);

console.log(`***NO2***`);
var isEvenOrOdd = function (value) {
    var result = value%2 == 0 ? ` Number is Even`:`Number is odd`;
    console.log(`${value}: ${result}`);
}
var num1 = isEvenOrOdd(29);
var num2 = isEvenOrOdd(44);
var num3 = isEvenOrOdd(0);
var num4 = isEvenOrOdd(101);

console.log(`***NO3***`);
var wordLength = function (word1) {
    var word2 = word1.length ;
    var word3 = word2%2 == 0 ? `Given word has Even Character`:`Given word has odd character`
console.log(word1,":",word3);


}
var word4 = wordLength("JavaScript");
var word5 = wordLength("Developer");
var word6 = wordLength("Google")