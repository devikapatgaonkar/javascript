function factorialOfNum(num) {
    
    if (num==null||num==undefined||isNaN(num)) {
        console.log(`Invalid input: ${num}`);
        return;
    } else {if (num==0) {
       console.log(`factorial of zero is 1`);
    }
        
   }
    let factorial = 1;
    for (let index = num; index>=1; index--) {
        factorial=factorial*index
         
       
    }
   
    return factorial;
   
}
let result =factorialOfNum(5);
console.log(`Factorial of number 5 is : ${result}`);
let result1 = factorialOfNum(3);
console.log(`Factorial of Number 3 is: ${result1}`);
let result2 =  factorialOfNum(null);
let result3 = factorialOfNum(8);
console.log(`Factorial of Number 8 is ${result3}`);
let result4 = factorialOfNum(undefined);
let result5 = factorialOfNum(9);
console.log(`Factorial of Number 9 is ${result5}`);
let result6 = factorialOfNum(0);


