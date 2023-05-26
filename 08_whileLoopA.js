
console.log(`WAP to print number 5 to 15 by incrementing by 1`);
let number = 4;
while (number<=15) {
    number++
    console.log(number);
}

console.log(`WAP to print 50 to 40 decrementing by 1`);
let num = 51;
while (num>=41) {
    num--
    console.log(num);
    
}

console.log(`WAP to write first 15 odd number`);
let oddNum = 0;
while (oddNum<=15) {
    if (oddNum%2!==0) {
        console.log(oddNum); 
    }
    oddNum++
}
console.log(`WAP to write first 10 even number`);
let evenNum = 0;
while (evenNum<=10) {
    if (evenNum%2==0) {
       console.log(evenNum); 
    }
evenNum++
    
}

console.log(`WAP of table of 5`);
let tableOf5 = 1;
while (tableOf5<=50) {
    if (tableOf5%5==0) {
        console.log(tableOf5);
    }
    tableOf5++
}
 

console.log(`WAP of table of 10`);

let tableOf10 = 1;
while (tableOf10<=100) {
    if (tableOf10%10==0) {
        console.log(tableOf10);
    }
    tableOf10++
}

console.log(`WAP to get reverse order from 100 till 10`);
let reverseOrder = 100;
while (reverseOrder>=10) {
    if (reverseOrder%10==0) {
        console.log(reverseOrder);
        
    }
    reverseOrder--
    
}
