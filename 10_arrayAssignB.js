

const arrayNumber = [20,31,40,25,23,11,29,9,60,2,11]
console.log(`***NO1***`);
let arrayLength = arrayNumber.length
console.log(`Length of Given element is ${arrayLength}`);
console.log(`***No2***`);
let firstElement = arrayNumber[0];
console.log(`First element is : ${firstElement}`);
let lastElement= arrayNumber[arrayLength-1]
console.log(`Last element is : ${lastElement}`);
console.log(`***NO3***`);
let thirdLast = arrayNumber[arrayLength-3];
console.log(`Third Last element is ${thirdLast}`);
console.log(`***NO4***`);
for (let index = 0; index < arrayNumber.length; index++) {
    let evenNumber = arrayNumber[index]
    if (evenNumber%2==0) {
        console.log(`Even Number in given array is : ${evenNumber}`);
    }
}
console.log(`***NO5***`);
for (let index = 0; index < arrayNumber.length; index++) {
    let oddNumber = arrayNumber[index]
    if (oddNumber%2!==0) {
        console.log(`Odd Number in given array is : ${oddNumber}`);
    }
}

console.log(`***NO6***`);
let sum = 0;
for (let index = 0; index < arrayNumber.length; index++) {
    let evenPosition = arrayNumber[index]
    if (index%2==0) {
        sum = sum+evenPosition
        
    }
    
}
console.log(`Sum of all Even Positioned array is: ${sum}`);

console.log(`***NO7***`);
let sums = 0;
for (let index = 0; index < arrayNumber.length; index++) {
    let oddPosition = arrayNumber[index]
    if (index%2!==0) {
        sums = sums+oddPosition
        
    }
    
}
console.log(`Sum of all Odd Positioned array is: ${sums}`);

console.log(`***NO8***`);
let sumOfAll = 0;
for (let index = 0; index < arrayNumber.length; index++) {
    var sumOfNum = arrayNumber[index];
    sumOfAll = sumOfAll+sumOfNum
    
}
console.log(`Sum of all element in array is ${sumOfAll}`);

console.log(`***NO9***`);
for (let index = 0; index < arrayNumber.length; index++) {
    let multipleOf5=arrayNumber[index]
    if (multipleOf5%5==0) {
        console.log(`Multiple of 5 in given array is ${multipleOf5}`);
    }
    
}

console.log(`***NO10***`);
let number = arrayNumber.includes(115);
console.log(`Is 115 number available in given array : ${number} `);

console.log(`***NO11***`);
let number1 = arrayNumber.includes(23);
console.log(` Is 23 number available in given array : ${number1}`);

console.log(`***NO12***`);
console.log(`Original array number:${arrayNumber}`);
let insertNum = arrayNumber.splice(3,0,55,66)
console.log(`Insert number 55 & 66 before index 3 in given array : ${arrayNumber}`);

console.log(`***NO13***`);
console.log(`Orginal array is : ${arrayNumber}`);
let deleteElement = arrayNumber.splice(4,3)
console.log(`After deleting 3 elements from index 4 , array is ${arrayNumber}`);