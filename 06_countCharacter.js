

function countCharacterA (string){
    var count = " ";
    for (let index = 0; index < string.length; index++) {
        var char = string.charAt(index);
        if (char=="A"||char=="a") {
            count++
            
        }
        
    }
    console.log(`Given string:${string}, contains character A is : ${count}`);
}
countCharacterA("I Am learning JavaScript,The Language of Internet");
countCharacterA('My Favourite movie is LAggAn')