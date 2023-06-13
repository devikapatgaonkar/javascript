let palidrome = function (string) {
    let reverseString = '';
    let reverse =string.length-1
    for (let index = reverse; index >=0; index--) {
        let char = string.charAt(index);
        
        reverseString= reverseString.concat(char)
    } 
    if (string==reverseString) {
        console.log(`${string}:Given string is palidrome`)
    } else {
        console.log(`${string}:Given string is not a palindrome`);
    }
}
palidrome("madam");
palidrome("141");
palidrome("sunday");
palidrome("mom");
palidrome("listen");
palidrome("dad")

/*function reverseWord(word){
    var reverseString = "";
    var wordLength = word.length - 1;
    for (let index = wordLength; index >= 0; index--) { // index = 9  8 
        var char = word.charAt(index);
        reverseString = reverseString.concat(char);    
    }
console.log(reverseString);
}*/
