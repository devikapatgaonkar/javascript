let i = [11,3,4,11,4,7,3];
let j = [];
for (let index = 0; index < i.length; index++) {
    if (j.indexOf(i[index])== -1) {
        j.push(i[index])
    }
    
}
console.log(`Before removing Duplicate from array : ${i}`);
console.log(`After removing duplicate from array : ${j}`);



console.log(`---------------------------------------------------`);
const str = "How are you mate";
let newChar = "";
const arrayWords = str.split(" ");
for (const element of arrayWords) {
    for (let index = 0; index < element.length; index++) {
        let char = "";
        if (index == 0 || index == element.length-1) {
            char = element[index].toUpperCase();
            
        } else {
            char = element[index]
        }
        newChar = newChar+ char ;

    }
    newChar = newChar + " ";
    
}
console.log(`Given String is ${str}`);
console.log(`Updated String s ${newChar}`);