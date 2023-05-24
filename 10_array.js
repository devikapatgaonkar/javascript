

var arrayOfRollNumber = [67,56,78,90,60,40]
console.log(`Type of array: ${typeof arrayOfRollNumber}`);

let lengthOfArray = arrayOfRollNumber.length
console.log(`Length of array is : ${lengthOfArray}`);

// Accessing array element
const zerothIndexValue = arrayOfRollNumber[0]


//Acess the array element 90
let arrayElement90=  arrayOfRollNumber[3];
console.log(`Array of element:${arrayElement90}`);

//Access the last element
let arrayLength = arrayOfRollNumber.length;
const lastElement =arrayOfRollNumber[arrayLength-1];
console.log(`Last Element : ${lastElement}`);

//Adding element in last position

arrayOfRollNumber.push(80);
arrayOfRollNumber.push(30);
console.log( arrayOfRollNumber);

//Adding element in First position;
arrayOfRollNumber.unshift(50)
console.log(arrayOfRollNumber);


//Removing last element
arrayOfRollNumber.pop();
console.log(arrayOfRollNumber);

//Removing first element
arrayOfRollNumber.shift();
console.log(arrayOfRollNumber);

//Multiple element push;
arrayOfRollNumber.push(69,89,59)
console.log(arrayOfRollNumber);


var arrayOfRollNumber = [67,56,78,90,60,40]
//Update array element;
console.log(`Updating array value`);
arrayOfRollNumber[0] = 888;
console.log(arrayOfRollNumber);

// Update the last element with value 77
arrayOfRollNumber[arrayOfRollNumber.length-1] = 77;
console.log(arrayOfRollNumber);

console.log(`Slice()`);
var arrayOfRollNumber = [67,56,78,90,60,40]
const sliceArray = arrayOfRollNumber.slice(3);
console.log(sliceArray);

const sliceArr =arrayOfRollNumber.slice(2, 5);
console.log(sliceArr);

console.log(`Splice()`);
var arrayOfRollNumber = [67,56,78,90,60,40];
const arraySpliced = arrayOfRollNumber.splice(3);
console.log(arrayOfRollNumber);
console.log(arraySpliced);

var arrayOfRollNumber = [67,56,78,90,60,40,99,80];
let arrSpliced = arrayOfRollNumber.splice(2, 5)
console.log(arrayOfRollNumber);
console.log(arrSpliced);

// splice for insertion

var arrayOfRollNumbers = [67, 56, 78, 90, 60, 90, 40, 99, 80];

console.log(arrayOfRollNumbers);

arrayOfRollNumbers.splice(2, 0, 666, 444)

console.log(arrayOfRollNumbers);

 

 

// splice for insertion by replacing elements

var arrayOfRollNumbers = [67, 56, 78, 99, 80];

console.log(arrayOfRollNumbers);

arrayOfRollNumbers.splice(1, 1, 99, 88, 77, 66)

console.log(arrayOfRollNumbers);

 

 

// splice for insertion by replacing elements

var arrayOfRollNumbers = [67, 56, 78, 99, 80];

console.log(arrayOfRollNumbers);

arrayOfRollNumbers.splice(2, 2, 111, 22, 333);

console.log(`==== Traversing array =====`);

var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
for (let index = 0; index < arrayNames.length; index++) {
    const element = arrayNames[index];
    console.log(element);
}

console.log(`------------ for in loop -----------------`);
for (const index in arrayNames) {
    console.log(arrayNames[index]);
}

console.log(`------------ for of loop -----------------`);
for (const element of arrayNames) {
    console.log(element);
}

console.log(`------- WAP to get even indexed element ------`);
var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
// WAP to get even indexed element
for (const index in arrayNames) {
   if (index%2==0) {
    console.log(`${arrayNames[index]}`);
   }
}


console.log(`---------- join() ------------`);
let names = arrayNames.join(", ");
console.log(names);



const arrayBoys = ["Anil", "Ram" ,"Sunil"];
let arrayGirls = ["Siya", "Jenny"]

let combineArray =  arrayBoys + arrayGirls;
console.log(combineArray);

let concatArray =  arrayBoys.concat(arrayGirls);
console.log(concatArray);


console.log(`------ Resize an array -------`);
var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
arrayNames.length = 3;
console.log(arrayNames);