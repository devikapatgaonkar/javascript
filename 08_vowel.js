var word = "JavaScript Language Of Internet";
// a e i o u == A E I O U
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index); // 
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
        console.log(char);
        count++;
    }
    
}
console.log(`Count total vowels: ${count}`);

var string = 'Hello how are you doing'
// DoinG YoU ArE HoW Hello
var con = "";
for (let index = string.length-1; index >= 0 ; index--) {
   
    var char = string.charAt(index);
    
    con=con.concat(char);

   // console.log(result);
}


